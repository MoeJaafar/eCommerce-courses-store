import { createContext, useContext, useEffect, useState, useMemo, ReactNode } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import { setupHooks } from "./hooks/setupHooks";
import { loadContract } from "/Users/moham/Documents/Code/Front-end project/ecommerce-store/utils/loadContract";

interface IWeb3Context {
  provider: any;
  web3: any;
  contract: any;
  isLoading: boolean;
  hooks: any;
  requireInstall?: boolean;
  connect?: any;
}

const Web3Context = createContext<IWeb3Context | null>(null);

interface IWeb3Provider {
  children: ReactNode;
}

export default function Web3Provider({ children }: IWeb3Provider) {
  const [web3Api, setWeb3Api] = useState<IWeb3Context>({
    provider: null,
    web3: null,
    contract: null,
    isLoading: true,
    hooks: setupHooks(),
  });

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const web3 = new Web3(provider as any);
        const contract = await loadContract("CourseMarketplace", web3);
        console.log(contract);
        setWeb3Api({
          provider,
          web3,
          contract,
          isLoading: false,
          hooks: setupHooks(web3, provider),
        });
      } else {
        setWeb3Api((api) => ({ ...api, isLoading: false }));
        console.error("Please, install Metamask.");
      }
    };

    loadProvider();
  }, []);

  const _web3Api: IWeb3Context = useMemo(() => {
    const { web3, provider, isLoading } = web3Api;
    return {
      ...web3Api,
      requireInstall: !isLoading && !web3,
      connect: provider
        ? async () => {
            try {
              await web3Api.provider.request({ method: "eth_requestAccounts" });
            } catch {
              console.error("Couldn't retreive account!");
            }
          }
        : () =>
            console.error(
              "Cannot connect to Metamask, try to reload your browser please!"
            ),
    };
  }, [web3Api]);

  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}

export function useHooks(cb: (hooks: any) => any) {
  const { hooks } = useWeb3();
  return cb(hooks);
}
