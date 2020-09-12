"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IStreamingFeeModuleFactory = void 0;
var ethers_1 = require("ethers");
var IStreamingFeeModuleFactory = /** @class */ (function () {
    function IStreamingFeeModuleFactory() {
    }
    IStreamingFeeModuleFactory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return IStreamingFeeModuleFactory;
}());
exports.IStreamingFeeModuleFactory = IStreamingFeeModuleFactory;
var _abi = [
    {
        inputs: [
            {
                internalType: "contract ISetToken",
                name: "_setToken",
                type: "address"
            }
        ],
        name: "feeStates",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "feeRecipient",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "maxStreamingFeePercentage",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "streamingFeePercentage",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "lastStreamingFeeTimestamp",
                        type: "uint256"
                    }
                ],
                internalType: "struct StreamingFeeModule.FeeState",
                name: "",
                type: "tuple"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract ISetToken",
                name: "_setToken",
                type: "address"
            }
        ],
        name: "getFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];