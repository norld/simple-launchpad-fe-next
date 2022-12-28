export const BASE_URL = "http://localhost:3000";
// export const IS_DEV = process.env.NODE_ENV !== 'production'
export const IS_DEV = true;
export const CHAIN_ID = IS_DEV ? 97 : 56;
export const EXPLORER_HREF = IS_DEV ? "https://testnet.bscscan.com" : "https://bscscan.com";
export const NETWORK_NAME = IS_DEV ? "BSC Testnet" : "BSC Mainnet";
export const RPC_URL = IS_DEV ? "https://bsc-testnet.public.blastapi.io" : "https://1rpc.io/bnb";
export const bsc = {
  id: 56,
  name: "BSC Mainnet",
  network: "bsc",
  nativeCurrency: {
    decimals: 18,
    name: "BSC Mainnet",
    symbol: "BSC",
  },
  rpcUrls: {
    default: { http: ["https://bsc-dataseed1.ninicoin.io"] },
  },
  blockExplorers: {
    etherscan: { name: "BSCScan", url: "https://bscscan.com" },
    default: { name: "BSCScan", url: "https://bscscan.com" },
  },
};

export const bscTestnet = {
  id: 97,
  name: "BSC Testnet",
  network: "bscTestnet",
  nativeCurrency: {
    decimals: 18,
    name: "BSC Testnet",
    symbol: "TBSC",
  },
  rpcUrls: {
    default: { http: ["https://bsc-testnet.public.blastapi.io"] },
  },
  blockExplorers: {
    etherscan: { name: "BSCTestScan", url: "https://testnet.bscscan.com" },
    default: { name: "BSCTestScan", url: "https://testnet.bscscan.com" },
  },
};

export const CONFIG_CHAIN = IS_DEV ? bscTestnet : bsc;
