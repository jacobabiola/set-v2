import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from ".";
interface PriceOracleInterface extends Interface {
    functions: {
        adapters: TypedFunctionDescription<{
            encode([]: [BigNumberish]): string;
        }>;
        addAdapter: TypedFunctionDescription<{
            encode([_adapter]: [string]): string;
        }>;
        addPair: TypedFunctionDescription<{
            encode([_assetOne, _assetTwo, _oracle]: [string, string, string]): string;
        }>;
        controller: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        editMasterQuoteAsset: TypedFunctionDescription<{
            encode([_newMasterQuoteAsset]: [string]): string;
        }>;
        editPair: TypedFunctionDescription<{
            encode([_assetOne, _assetTwo, _oracle]: [string, string, string]): string;
        }>;
        getAdapters: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        getPrice: TypedFunctionDescription<{
            encode([_assetOne, _assetTwo]: [string, string]): string;
        }>;
        masterQuoteAsset: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        oracles: TypedFunctionDescription<{
            encode([,]: [string, string]): string;
        }>;
        owner: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        removeAdapter: TypedFunctionDescription<{
            encode([_adapter]: [string]): string;
        }>;
        removePair: TypedFunctionDescription<{
            encode([_assetOne, _assetTwo]: [string, string]): string;
        }>;
        renounceOwnership: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        transferOwnership: TypedFunctionDescription<{
            encode([newOwner]: [string]): string;
        }>;
    };
    events: {
        AdapterAdded: TypedEventDescription<{
            encodeTopics([_adapter]: [null]): string[];
        }>;
        AdapterRemoved: TypedEventDescription<{
            encodeTopics([_adapter]: [null]): string[];
        }>;
        MasterQuoteAssetEdited: TypedEventDescription<{
            encodeTopics([_newMasterQuote]: [null]): string[];
        }>;
        OwnershipTransferred: TypedEventDescription<{
            encodeTopics([previousOwner, newOwner]: [string | null, string | null]): string[];
        }>;
        PairAdded: TypedEventDescription<{
            encodeTopics([_assetOne, _assetTwo, _oracle]: [string | null, string | null, null]): string[];
        }>;
        PairEdited: TypedEventDescription<{
            encodeTopics([_assetOne, _assetTwo, _newOracle]: [string | null, string | null, null]): string[];
        }>;
        PairRemoved: TypedEventDescription<{
            encodeTopics([_assetOne, _assetTwo, _oracle]: [string | null, string | null, null]): string[];
        }>;
    };
}
export declare class PriceOracle extends Contract {
    connect(signerOrProvider: Signer | Provider | string): PriceOracle;
    attach(addressOrName: string): PriceOracle;
    deployed(): Promise<PriceOracle>;
    on(event: EventFilter | string, listener: Listener): PriceOracle;
    once(event: EventFilter | string, listener: Listener): PriceOracle;
    addListener(eventName: EventFilter | string, listener: Listener): PriceOracle;
    removeAllListeners(eventName: EventFilter | string): PriceOracle;
    removeListener(eventName: any, listener: Listener): PriceOracle;
    interface: PriceOracleInterface;
    functions: {
        adapters(arg0: BigNumberish): Promise<string>;
        addAdapter(_adapter: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        addPair(_assetOne: string, _assetTwo: string, _oracle: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        controller(): Promise<string>;
        editMasterQuoteAsset(_newMasterQuoteAsset: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        editPair(_assetOne: string, _assetTwo: string, _oracle: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        getAdapters(): Promise<string[]>;
        getPrice(_assetOne: string, _assetTwo: string): Promise<BigNumber>;
        masterQuoteAsset(): Promise<string>;
        oracles(arg0: string, arg1: string): Promise<string>;
        owner(): Promise<string>;
        removeAdapter(_adapter: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        removePair(_assetOne: string, _assetTwo: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        renounceOwnership(overrides?: TransactionOverrides): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    adapters(arg0: BigNumberish): Promise<string>;
    addAdapter(_adapter: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    addPair(_assetOne: string, _assetTwo: string, _oracle: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    controller(): Promise<string>;
    editMasterQuoteAsset(_newMasterQuoteAsset: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    editPair(_assetOne: string, _assetTwo: string, _oracle: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    getAdapters(): Promise<string[]>;
    getPrice(_assetOne: string, _assetTwo: string): Promise<BigNumber>;
    masterQuoteAsset(): Promise<string>;
    oracles(arg0: string, arg1: string): Promise<string>;
    owner(): Promise<string>;
    removeAdapter(_adapter: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    removePair(_assetOne: string, _assetTwo: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    renounceOwnership(overrides?: TransactionOverrides): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {
        AdapterAdded(_adapter: null): EventFilter;
        AdapterRemoved(_adapter: null): EventFilter;
        MasterQuoteAssetEdited(_newMasterQuote: null): EventFilter;
        OwnershipTransferred(previousOwner: string | null, newOwner: string | null): EventFilter;
        PairAdded(_assetOne: string | null, _assetTwo: string | null, _oracle: null): EventFilter;
        PairEdited(_assetOne: string | null, _assetTwo: string | null, _newOracle: null): EventFilter;
        PairRemoved(_assetOne: string | null, _assetTwo: string | null, _oracle: null): EventFilter;
    };
    estimate: {
        adapters(arg0: BigNumberish): Promise<BigNumber>;
        addAdapter(_adapter: string): Promise<BigNumber>;
        addPair(_assetOne: string, _assetTwo: string, _oracle: string): Promise<BigNumber>;
        controller(): Promise<BigNumber>;
        editMasterQuoteAsset(_newMasterQuoteAsset: string): Promise<BigNumber>;
        editPair(_assetOne: string, _assetTwo: string, _oracle: string): Promise<BigNumber>;
        getAdapters(): Promise<BigNumber>;
        getPrice(_assetOne: string, _assetTwo: string): Promise<BigNumber>;
        masterQuoteAsset(): Promise<BigNumber>;
        oracles(arg0: string, arg1: string): Promise<BigNumber>;
        owner(): Promise<BigNumber>;
        removeAdapter(_adapter: string): Promise<BigNumber>;
        removePair(_assetOne: string, _assetTwo: string): Promise<BigNumber>;
        renounceOwnership(): Promise<BigNumber>;
        transferOwnership(newOwner: string): Promise<BigNumber>;
    };
}
export {};