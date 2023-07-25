import { useWeb3 } from "@/components/providers";
import Link from "next/link";
import { useAccount } from "@/components/web3/hooks";
import Image from "next/image";

export default function Navbar() {
  const web3Context = useWeb3();
  const { account } = useAccount();
  if (!web3Context) {
    return null;
  }
  const { connect, isLoading, web3 } = web3Context;

  return (
    <nav className="bg-white border-gray-200 dark:bg-indigo-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="https://img.icons8.com/ios-filled/50/000000/monzo--v1.png"
            className="h-8 mr-1"
            width="24"
            height="24"
            alt="just M"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Place
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden
           hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
           dark:hover:bg-indigo-800 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-[#000000] md:dark:bg-indigo-800 dark:border-indigo-800">
            <li>
              <Link href={`/`}>
                <span className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href={`/marketplace`}>
                <span className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Marketplace
                </span>
              </Link>
            </li>
            <li>
              <Link href={`/about`}>
                <span className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  About
                </span>
              </Link>
            </li>
            <li>
              {isLoading ? (
                <button
                  onClick={connect}
                  disabled={true}
                  className="px-5 py-1 border rounded-lg border-indigo-800 tect-base font-medium text-white hover:text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Loading...
                </button>
              ) : web3 != null ? (
                account.data ? (
                  <div>
                    <span className="pl-5 py-1 border rounded-lg border-indigo-800 tect-base font-medium text-[#5bff3a]  bg-indigo-800 hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed">
                      Connected to
                    </span>
                    {account.data.isAdmin ? (
                      <span className="pl-2 border rounded-lg border-indigo-800 tect-base font-medium text-white  bg-indigo-800 hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed">
                        Admin
                      </span>
                    ) : (
                      <span className="pl-2 border rounded-lg border-indigo-800 tect-base font-medium text-white  bg-indigo-800 hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed">
                        {account.data.substring(0, 5)}...
                        {account.data.substring(
                          account.data.length - 4,
                          account.data.length,
                        )}
                      </span>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={connect}
                    className="px-5 py-1 border rounded-lg border-indigo-800 tect-base font-medium text-white hover:text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Connect to Wallet
                  </button>
                )
              ) : (
                <button
                  onClick={() =>
                    window.open("https://metamask.io/download.html", "_blank")
                  }
                  className="px-5 py-1 border rounded-lg border-indigo-800 tect-base font-medium text-white hover:text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Install Metamask
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
