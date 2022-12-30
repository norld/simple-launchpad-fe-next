export const contractABI = [
  {
    inputs: [
      { internalType: "uint256", name: "_startTime", type: "uint256" },
      { internalType: "uint256", name: "_duration", type: "uint256" },
      { internalType: "uint256", name: "_totalSupply", type: "uint256" },
      { internalType: "address", name: "_IDOTokenAddress", type: "address" },
      { internalType: "address", name: "_txnTokenAddress", type: "address" },
      { internalType: "uint256", name: "_txnRatio", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [{ internalType: "address", name: "government", type: "address" }],
    name: "addGovernment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkReleaseRules",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "iTime", type: "uint256" },
          { internalType: "uint256", name: "ratio", type: "uint256" },
        ],
        internalType: "struct IDOPool.ReleaseRule[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "checkSharingRules",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "iType", type: "uint256" },
          { internalType: "address", name: "clearAddress", type: "address" },
          { internalType: "uint256", name: "ratio", type: "uint256" },
        ],
        internalType: "struct IDOPool.SharingRule[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "checkTxnLimit",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "maxTimes", type: "uint256" },
          { internalType: "uint256", name: "minAmount", type: "uint256" },
          { internalType: "uint256", name: "maxAmount", type: "uint256" },
        ],
        internalType: "struct IDOPool.TxnLimit",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "checkWhiteListInfo",
    outputs: [
      { internalType: "address", name: "_contractAddress", type: "address" },
      { internalType: "uint256", name: "_expireTime", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "clear",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "clearAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "government", type: "address" }],
    name: "deletedGovernment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "earned",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAccountsLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "getBuyRecord",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "buyTimes", type: "uint256" },
          { internalType: "uint256", name: "txnAmount", type: "uint256" },
          { internalType: "uint256", name: "rewards", type: "uint256" },
          { internalType: "uint256", name: "paidRewards", type: "uint256" },
        ],
        internalType: "struct IDOPool.BuyRecord",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
    name: "getBuyRecordByIndex",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "buyTimes", type: "uint256" },
          { internalType: "uint256", name: "txnAmount", type: "uint256" },
          { internalType: "uint256", name: "rewards", type: "uint256" },
          { internalType: "uint256", name: "paidRewards", type: "uint256" },
        ],
        internalType: "struct IDOPool.BuyRecord",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getClaimOpen",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEndTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
    name: "getGovernment",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGovernmentLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolInfo",
    outputs: [
      {
        components: [
          { internalType: "address", name: "withdrawToken", type: "address" },
          { internalType: "address", name: "exchangeToken", type: "address" },
          { internalType: "uint256", name: "ratio", type: "uint256" },
          { internalType: "uint256", name: "poolStartTime", type: "uint256" },
          { internalType: "uint256", name: "poolEndTime", type: "uint256" },
          { internalType: "uint256", name: "total", type: "uint256" },
        ],
        internalType: "struct IDOPool.PoolInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPosition",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSoftCap",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "offset", type: "uint256" }],
    name: "giveBack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "isGovernment",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "txnAmount", type: "uint256" }],
    name: "purchase",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_endTime", type: "uint256" }],
    name: "resetEndTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_softCap", type: "uint256" }],
    name: "resetSoftCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_claimOpen", type: "bool" }],
    name: "setClaimOpen",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "aryTime", type: "uint256[]" },
      { internalType: "uint256[]", name: "aryRatio", type: "uint256[]" },
    ],
    name: "setReleaseRules",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_seniorWhiteList", type: "address" }],
    name: "setSeniorWhiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "aryType", type: "uint256[]" },
      { internalType: "address[]", name: "aryClearAddress", type: "address[]" },
      { internalType: "uint256[]", name: "aryRatio", type: "uint256[]" },
    ],
    name: "setSharingRules",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_maxTimes", type: "uint256" },
      { internalType: "uint256", name: "_minAmount", type: "uint256" },
      { internalType: "uint256", name: "_maxAmount", type: "uint256" },
    ],
    name: "setTxnLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_contractAddress", type: "address" },
      { internalType: "uint256", name: "_expireTime", type: "uint256" },
    ],
    name: "setWhiteListInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenAddress", type: "address" },
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "withdrawBNB",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
