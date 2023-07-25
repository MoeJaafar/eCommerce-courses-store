import { useEthPrice } from "@/components/providers/web3/hooks/useEthPrice";
import Image from "next/image";

export default function EthRates() {
  const { eth } = useEthPrice();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 py-4">
      <div className="flex items-stretch text-center">
        <div className="p-5 md:p-10 border drop-shadow rounded-md bg-indigo-800 w-full md:w-auto">
          <div className="flex items-center self-center justify-center">
            <p className="text-gray-100 text-2xl md:text-3xl lg:text-4xl">1</p>
            <Image
              height="35"
              width="35"
              src="/small-eth.webp"
              alt="small eth"
            />
            <span className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
              = {eth.data}$
            </span>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-100">
            Current eth Price
          </p>
        </div>
      </div>
      <div className="flex items-stretch text-center">
        <div className="p-5 md:p-10 border drop-shadow rounded-md bg-indigo-800 w-full md:w-auto">
          <div className="flex items-center justify-center">
            <span className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
              {eth.perItem}
            </span>
            <Image
              layout="fixed"
              height="35"
              width="35"
              src="/small-eth.webp"
              alt="small eth"
            />
            <span className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
              = 15$
            </span>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-100">
            Price per course
          </p>
        </div>
      </div>
    </div>
  );
}
