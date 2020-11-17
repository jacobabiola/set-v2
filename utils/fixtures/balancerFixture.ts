import DeployHelper from "../deploys";
import { Signer, ContractTransaction } from "ethers";
import { JsonRpcProvider, Web3Provider } from "ethers/providers";
import { Address, Account } from "../types";
import { BigNumber } from "ethers/utils";

import {
  BFactory,
  BPool,
  BRegistry,
  ExchangeProxy
} from "../contracts/balancer";
import { StandardTokenMock } from "@utils/contracts";
import { ether, bitcoin } from "../index";
import { BPoolFactory } from "@typechain/BPoolFactory";
import { Weth9 } from "@typechain/Weth9";
import { ONE } from "@utils/constants";

export class BalancerFixture {
  private _deployer: DeployHelper;
  private _ownerSigner: Signer;

  public owner: Account;
  public factory: BFactory;
  public exchange: ExchangeProxy;
  public registry: BRegistry;

  public wethDaiPool: BPool;
  public wethWbtcPool: BPool;
  public wbtcDaiPool: BPool;

  constructor(provider: Web3Provider | JsonRpcProvider, ownerAddress: Address) {
    this._ownerSigner = provider.getSigner(ownerAddress);
    this._deployer = new DeployHelper(this._ownerSigner);
  }

  public async initialize(_owner: Account, _weth: Weth9, _wbtc: StandardTokenMock, _dai: StandardTokenMock): Promise<void> {
    this.owner = _owner;

    this.factory = await this._deployer.external.deployBFactory();

    this.wethDaiPool = await this.createNewPool(_weth, _dai, ether(400), ether(92000));
    this.wethWbtcPool = await this.createNewPool(_wbtc, _weth, ether(391.3043), bitcoin(10));
    this.wbtcDaiPool = await this.createNewPool(_wbtc, _dai, bitcoin(10), ether(90000));

    this.registry = await this._deployer.external.deployBRegistry(this.factory.address);
    this.exchange = await this._deployer.external.deployExchangeProxy(_weth.address);

    await this.registry.addPoolPair(this.wethDaiPool.address, _weth.address, _dai.address);
    await this.registry.addPoolPair(this.wethWbtcPool.address, _weth.address, _wbtc.address);
    await this.registry.addPoolPair(this.wbtcDaiPool.address, _wbtc.address, _dai.address);

    await this.registry.sortPools([_weth.address, _dai.address], ONE);
    await this.registry.sortPools([_wbtc.address, _dai.address], ONE);
    await this.registry.sortPools([_weth.address, _wbtc.address], ONE);

    await this.exchange.setRegistry(this.registry.address);
  }

  public async createNewPool(
    tokenOne: StandardTokenMock | Weth9,
    tokenTwo: StandardTokenMock | Weth9,
    tokenOneBalance: BigNumber,
    tokenTwoBalance: BigNumber,
  ): Promise<BPool> {
    const tx = await this.factory.newBPool();

    const poolAddress = await this.getPoolAddressFromTransaction(tx);
    const pool = await new BPoolFactory(this._ownerSigner).attach(poolAddress);

    await tokenOne.connect(this._ownerSigner).approve(poolAddress, tokenOneBalance);
    await pool.connect(this._ownerSigner).bind(tokenOne.address, tokenOneBalance, ether(5));

    await tokenTwo.connect(this._ownerSigner).approve(poolAddress, tokenTwoBalance);
    await pool.bind(tokenTwo.address, tokenTwoBalance, ether(5));

    await pool.setPublicSwap(true);

    return pool;
  }

  private async getPoolAddressFromTransaction(tx: ContractTransaction): Promise<Address> {
    const receipt = await this.factory.provider.getTransactionReceipt(tx.hash as string);
    const logs = receipt.logs?.filter(log => log.topics.includes("0x8ccec77b0cb63ac2cafd0f5de8cdfadab91ce656d262240ba8a6343bccc5f945"));
    if (!logs) {
      throw("No logs");
    }
    return "0x" + logs[0].topics[2].substr(26);
  }
}