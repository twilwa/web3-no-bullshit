import { defineChain } from "viem";

// mountfuji chain
export const mountfuji = defineChain({
  id: 665544,
  name: "mountfuji",
  nativeCurrency: { name: "USDC", symbol: "USDC", decimals: 6 },
  rpcUrls: {
    default: {
      http: ["https://3.221.232.196:9650/ext/bc/zvSaJAJk2GjZgnsX99eau7jJESQg8duK7cxFyR4Go8Vvdw13X/rpc"],
    },
  },
  blockExplorers: {
    default: {
      name: "Subnets Explorer",
      url: "https://subnets.avax.network",
    },
  },
});
// fuji c-chain
export const fuji = defineChain({
  id: 43113,
  name: "Avalanche Fuji",
  nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.avax-test.network/ext/bc/C/rpc"],
    },
  },
  blockExplorers: {
    default: {
      name: "SnowTrace",
      url: "https://testnet.snowtrace.io",
    },
  },
});
