import { useEffect } from "react";
import useSWR from "swr";
import { Provider } from "@/content/types";

interface AdminAddresses {
  [key: string]: boolean;
}

const adminAddresses: AdminAddresses = {
  "0xd09d11ebe21971c00a703de54f10d588f937b6ffe5934e6c42c52a762029f5f5": true,
};

interface Web3Instance {
  eth: {
    getAccounts: () => Promise<string[]>;
  };
  utils: {
    keccak256: (data: string) => string;
  };
}

export const handler = (web3: Web3Instance, provider: Provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/accounts" : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => {
        mutate(accounts[0] ?? null);
      });
  }, [mutate]);

  return {
    data,
    isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest,
  };
};
