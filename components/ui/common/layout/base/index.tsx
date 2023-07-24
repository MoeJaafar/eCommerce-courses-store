import { Web3Provider } from "@/components/providers";
import { Navbar, Footer } from "@/components/ui/common";
import { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Web3Provider>
      <div className="bg-[#ffffff] overflow-hidden">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4">
          <div className="fit">{children}</div>
        </div>
        <Footer />
      </div>
    </Web3Provider>
  );
}
