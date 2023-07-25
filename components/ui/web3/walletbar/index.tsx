import { useWeb3 } from "@/components/providers";
import { useNetwork } from "@/components/web3/hooks";

export default function WalletBar() {
  const { network } = useNetwork();
  const web3Context = useWeb3();

  if (!web3Context) {
    // Return a loading state or error state
    return <div>Loading...</div>;
  }

  const { requireInstall } = web3Context;

  return (
    <div className="pt-11">
      <section className="text-white bg-indigo-800 rounded-md">
        <div className="p-8">
          <h1 className="text-2xl">Hello there</h1>
          <h2 className="subtitle mb-5 text-xl">
            I hope you are having a great day!
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-3 sm:mb-0 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
                >
                  Learn how to purchase
                </a>
              </div>
            </div>
            <div className="sm:flex sm:space-x-2 md:flex-col">
              {network.hasFinishedFirstFetch && !network.data.isSupported && (
                <div className="bg-red-500 p-3 rounded-lg mb-2 sm:mb-0">
                  <div>Connected to the wrong Network</div>
                  <div>
                    Connect to: <strong>{network.data.target}</strong>
                  </div>
                </div>
              )}

              {requireInstall && (
                <div className="bg-yellow-600 p-3 rounded-lg">
                  Cannot connect to network. Please install Metamask
                </div>
              )}

              {network.data && (
                <div>
                  <span>Currently on </span>
                  <strong className="text-2xl">{network.data}</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
