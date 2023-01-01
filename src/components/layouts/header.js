/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import Account from "../account";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { BASE_URL } from "src/configs/constants";
import LPDButton from "src/components/button/primaryButton";
import ConnectModal from "src/components/common/connectModal";

const navigation = [
  { name: "Listing", href: "#product-list" },
  { name: "FAQ", href: "#faq" },
];
const Header = () => {
  const { isConnected, address } = useAccount();
  console.log("BASE_URL", BASE_URL);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openConnectModal, setOpenConnectModal] = useState(false);
  const linkLogo = BASE_URL + "/logo.png";
  const router = useRouter();
  return (
    <div className="px-6 pt-6 lg:px-8">
      <div>
        <nav className="flex h-9 items-center justify-between" aria-label="Global">
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only"> Trusted Platform for Crypto Launchpad</span>
              <img className="h-9" src={linkLogo} alt="" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-light-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-semibold text-light-900 hover:text-light-900">
                {item.name}
              </a>
            ))}
          </div> */}
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <Account />
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto dark:bg-dark px-6 py-6 lg:hidden">
            <div className="flex h-9 items-center justify-between">
              <div className="flex">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Launchpad</span>
                  <img className="h-8" src="logo.png" alt="" />
                </Link>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-light-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-light-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-light-900 hover:bg-gray-400/10"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
};

export default Header;
