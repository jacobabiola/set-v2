"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreciseUnitMathMockFactory = void 0;
var ethers_1 = require("ethers");
var PreciseUnitMathMockFactory = /** @class */ (function (_super) {
    __extends(PreciseUnitMathMockFactory, _super);
    function PreciseUnitMathMockFactory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    PreciseUnitMathMockFactory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides);
    };
    PreciseUnitMathMockFactory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides);
    };
    PreciseUnitMathMockFactory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    PreciseUnitMathMockFactory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    PreciseUnitMathMockFactory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return PreciseUnitMathMockFactory;
}(ethers_1.ContractFactory));
exports.PreciseUnitMathMockFactory = PreciseUnitMathMockFactory;
var _abi = [
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256"
            },
            {
                internalType: "int256",
                name: "b",
                type: "int256"
            }
        ],
        name: "conservativePreciseDiv",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256"
            },
            {
                internalType: "int256",
                name: "b",
                type: "int256"
            }
        ],
        name: "conservativePreciseMul",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256"
            },
            {
                internalType: "int256",
                name: "b",
                type: "int256"
            }
        ],
        name: "divDown",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "maxInt256",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "minInt256",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256"
            },
            {
                internalType: "int256",
                name: "b",
                type: "int256"
            }
        ],
        name: "preciseDiv",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256"
            }
        ],
        name: "preciseDiv",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256"
            }
        ],
        name: "preciseDivCeil",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256"
            }
        ],
        name: "preciseMul",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256"
            }
        ],
        name: "preciseMulCeil",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "a",
                type: "int256"
            },
            {
                internalType: "int256",
                name: "b",
                type: "int256"
            }
        ],
        name: "preciseMulInt",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "preciseUnit",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "preciseUnitInt",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    }
];
var _bytecode = "0x608060405234801561001057600080fd5b506108ff806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063ad8b9b9b1161008c578063ddb29e9211610066578063ddb29e9214610161578063dfcc00f214610174578063e22cfd3f14610187578063ebf585301461019a576100cf565b8063ad8b9b9b1461013b578063d5e5e6e6146100d4578063db43cf921461014e576100cf565b8063127a30f1146100d4578063576dcc3d146100f25780636749ab9a1461010557806370f0e27a146101185780637c1bd7c81461012b57806393b027b414610133575b600080fd5b6100dc6101ad565b6040516100e991906106e7565b60405180910390f35b6100dc6101003660046106c6565b6101bc565b6100dc6101133660046106c6565b6101d7565b6100dc6101263660046106c6565b6101e9565b6100dc6101fb565b6100dc610205565b6100dc6101493660046106c6565b61020f565b6100dc61015c3660046106c6565b610221565b6100dc61016f3660046106c6565b610233565b6100dc6101823660046106c6565b610245565b6100dc6101953660046106c6565b610257565b6100dc6101a83660046106c6565b610269565b60006101b761027b565b905090565b60006101ce838363ffffffff61028716565b90505b92915050565b60006101ce838363ffffffff61030716565b60006101ce838363ffffffff61034616565b60006101b7610369565b60006101b7610371565b60006101ce838363ffffffff61037c16565b60006101ce838363ffffffff61039f16565b60006101ce838363ffffffff6103bd16565b60006101ce838363ffffffff61044b16565b60006101ce838363ffffffff61047516565b60006101ce838363ffffffff61049316565b670de0b6b3a764000090565b6000816102af5760405162461bcd60e51b81526004016102a69061089f565b60405180910390fd5b600083116102be5760006101ce565b6101ce60016102fb846102ef836102e389670de0b6b3a764000063ffffffff6104b116565b9063ffffffff6104eb16565b9063ffffffff61052d16565b9063ffffffff61056f16565b6000821580610314575081155b15610321575060006101d1565b6101ce60016102fb670de0b6b3a76400006102ef836102e3898963ffffffff6104b116565b60006101ce61035b848463ffffffff61059416565b670de0b6b3a76400006103bd565b600160ff1b90565b6001600160ff1b0390565b60006101ce61039984670de0b6b3a764000063ffffffff61059416565b836103bd565b60006101ce670de0b6b3a76400006102ef858563ffffffff6104b116565b6000816103dc5760405162461bcd60e51b81526004016102a69061089f565b600160ff1b831415806103f157508160001914155b61040d5760405162461bcd60e51b81526004016102a690610843565b600061041f848463ffffffff6105ff16565b9050600083851812801561043b575082848161043757fe5b0715155b156101ce57600019019392505050565b60006101ce670de0b6b3a7640000610469858563ffffffff61059416565b9063ffffffff6105ff16565b60006101ce8261046985670de0b6b3a764000063ffffffff61059416565b60006101ce826102ef85670de0b6b3a764000063ffffffff6104b116565b6000826104c0575060006101d1565b828202828482816104cd57fe5b04146101ce5760405162461bcd60e51b81526004016102a6906107bb565b60006101ce83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610663565b60006101ce83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061068f565b6000828201838110156101ce5760405162461bcd60e51b81526004016102a690610743565b6000826105a3575060006101d1565b826000191480156105b75750600160ff1b82145b156105d45760405162461bcd60e51b81526004016102a6906107fc565b828202828482816105e157fe5b05146101ce5760405162461bcd60e51b81526004016102a6906107fc565b60008161061e5760405162461bcd60e51b81526004016102a69061086a565b816000191480156106325750600160ff1b83145b1561064f5760405162461bcd60e51b81526004016102a69061077a565b600082848161065a57fe5b05949350505050565b600081848411156106875760405162461bcd60e51b81526004016102a691906106f0565b505050900390565b600081836106b05760405162461bcd60e51b81526004016102a691906106f0565b5060008385816106bc57fe5b0495945050505050565b600080604083850312156106d8578182fd5b50508035926020909101359150565b90815260200190565b6000602080835283518082850152825b8181101561071c57858101830151858201604001528201610700565b8181111561072d5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526021908201527f5369676e6564536166654d6174683a206469766973696f6e206f766572666c6f6040820152607760f81b606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b60208082526027908201527f5369676e6564536166654d6174683a206d756c7469706c69636174696f6e206f604082015266766572666c6f7760c81b606082015260800190565b6020808252600d908201526c125b9d985b1a59081a5b9c1d5d609a1b604082015260600190565b6020808252818101527f5369676e6564536166654d6174683a206469766973696f6e206279207a65726f604082015260600190565b60208082526010908201526f043616e742064697669646520627920360841b60408201526060019056fea2646970667358221220f812aa4e8da090209b3810cf310edbbf2013e0151dbad3c4505992d6f4b10b7164736f6c634300060a0033";