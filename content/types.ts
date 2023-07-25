import { provider, AbstractProvider } from "web3-core";

export interface Course {
  id: string;
  type: string;
  title: string;
  description: string;
  coverImage: string;
  author: string;
  link: string;
  slug: string;
  wsl: string[];
}

export interface CourseWithIndex extends Course {
  index: number;
}

export interface CourseMap {
  [key: string]: CourseWithIndex;
}

interface MetaMaskEthereumProvider extends AbstractProvider {
  isMetaMask?: boolean;
  once(eventName: string | symbol, listener: (...args: any[]) => void): this;
  on(eventName: string | symbol, listener: (...args: any[]) => void): this;
  off(eventName: string | symbol, listener: (...args: any[]) => void): this;
  addListener(
    eventName: string | symbol,
    listener: (...args: any[]) => void
  ): this;
  removeListener(
    eventName: string | symbol,
    listener: (...args: any[]) => void
  ): this;
  removeAllListeners(event?: string | symbol): this;
}

export interface Provider extends MetaMaskEthereumProvider {
  on: (event: string, callback: (data: string) => void) => this;
}
