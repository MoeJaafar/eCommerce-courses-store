import Web3 from "web3";
import { handler as createAccountHook } from "./useAccount";
import { handler as createNetworkHook } from "./useNetwork";
import { Provider } from "content/types";

export const setupHooks = (deps: [Web3, Provider]) => {
  return {
    useAccount: createAccountHook(...deps),
    useNetwork: createNetworkHook(...deps),
  };
};
