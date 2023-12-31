import { useEffect } from "react";
import useSWR from "swr";
import { Provider } from "@/content/types";
interface Web3 {
  eth: {
    getChainId: () => Promise<number>;
  };
}

const NETWORKS: Record<number, string> = {
  1: "Ethereum Main Network",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  56: "Binance Smart Chain",
  1337: "Ganache",
  11155111: "Sepolia test network",
};

const NETWORK_ID: number = parseInt(
  process.env.NEXT_PUBLIC_TARGET_CHAIN_ID || "1",
);

const targetNetwork: string = NETWORKS[NETWORK_ID];

export const handler = (web3: Web3, provider: Provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/network" : null),
    async () => {
      const chainId = await web3.eth.getChainId();
      return NETWORKS[chainId];
    },
  );

  useEffect(() => {
    provider &&
      provider.on("chainChanged", (chainId) => {
        mutate(NETWORKS[parseInt(chainId, 16)]);
      });
  }, [mutate]);

  return {
    data,
    mutate,
    target: targetNetwork,
    isSupported: data === targetNetwork,
    ...rest,
  };
};
