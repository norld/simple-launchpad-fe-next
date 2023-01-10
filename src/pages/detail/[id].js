import { useRouter } from "next/router";
import { useState, useEffect, Fragment } from "react";
import { classNames, getEllipsisTxt } from "../../helpers/formatters";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  ArrowLongLeftIcon,
  CheckIcon,
  HandThumbUpIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import { BASE_API_URL } from "src/configs/constants";
import { contractABI } from "src/configs/abis/contractABI";
import { erc20ABI } from "src/configs/abis/ERC20ABI";
import { ProcessNotify } from "src/components/common/notification";
import { useContractWrite, useAccount, useContractRead } from "wagmi";
import { toast } from "react-toastify";
import { ethers } from "ethers";
import LPDButton from "src/components/button/primaryButton";
import ConnectModal from "src/components//common/connectModal";

export default function Example() {
  const router = useRouter();
  const { id } = router.query;
  const { address, isConnected } = useAccount();
  const launchpadData = useSelector((state) => state?.launchpads);
  const [selectedLaunchpad, setSelectedLaunchpad] = useState();
  const [statusContract, setStatusContract] = useState();
  const [allowance, setAllowance] = useState(0);
  const [donateValue, setDonateValue] = useState(0);
  const infiniteNumber = "93289328938293829839283928392839283928398293829382938293829382983298329";

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const approve = useContractWrite({
    mode: "recklesslyUnprepared",
    address: selectedLaunchpad && selectedLaunchpad.tokenInfo.tokenAddress,
    abi: erc20ABI,
    functionName: "approve",
    onSuccess: (tx) => {
      setAllowance(infiniteNumber);
      toast(<ProcessNotify hash={tx.hash} />);
    },
  });

  const getAllowance = useContractRead({
    address: selectedLaunchpad && selectedLaunchpad.tokenInfo.tokenAddress,
    abi: erc20ABI,
    args: [address, "0xF6dc2941BcB9dda792808Ac0dF2133b98c001c78"],
    functionName: "allowance",
    enabled: false,
  });

  const refetchShit = async () => {
    await getAllowance.refetch();
    getAllowance.data && setAllowance(getAllowance.data.toString());
  };

  const purchase = useContractWrite({
    mode: "recklesslyUnprepared",
    address: selectedLaunchpad && selectedLaunchpad.poolAddress,
    abi: contractABI,
    functionName: "purchase",
    onSuccess: (tx) => {
      console.log("@success", tx);
      toast(<ProcessNotify hash={tx.hash} />);
    },
  });

  const claimRewards = useContractWrite({
    mode: "recklesslyUnprepared",
    address: selectedLaunchpad && selectedLaunchpad.poolAddress,
    abi: contractABI,
    functionName: "claimRewards",
  });

  const eventTypes = {
    applied: { icon: UserIcon, bgColorClass: "bg-gray-400" },
    advanced: { icon: HandThumbUpIcon, bgColorClass: "bg-orange-500" },
    completed: { icon: CheckIcon, bgColorClass: "bg-green-500" },
  };
  const timeline = [
    {
      id: 1,
      type: selectedLaunchpad && selectedLaunchpad.verifiedAt ? eventTypes.completed : eventTypes.advanced,
      content: "Applied to",
      target: "Developer",
      date: selectedLaunchpad && moment(selectedLaunchpad.verifiedAt).format("DD MMMM YYYY"),
      datetime: "2020-09-20",
    },
    {
      id: 2,
      type: statusContract && statusContract === 0 ? eventTypes.advanced : eventTypes.completed,
      content: "Prepare the contract by",
      target: "Deployer",
      date: "",
      datetime: "",
    },
    {
      id: 3,
      type: statusContract && statusContract === 0 ? eventTypes.applied : statusContract === 1 ? eventTypes.advanced : eventTypes.completed,
      content: "Crowdfunding",
      target: "",
      date: "",
      datetime: "",
    },
    {
      id: 4,
      type: statusContract && statusContract === 2 ? eventTypes.completed : eventTypes.applied,
      content: "Launchpad End",
      target: "",
      date: selectedLaunchpad && moment(selectedLaunchpad.endDate).format("DD MMMM YYYY"),
      datetime: "2020-10-04",
    },
  ];

  useEffect(() => {
    console.log("@launchpadData", launchpadData);
    if (!launchpadData.loading) {
      const filterLaunchpad = launchpadData.launchpads.data.filter((data) => data.id == id);

      console.log("@filterLaunchpad", filterLaunchpad);
      setSelectedLaunchpad(...filterLaunchpad);
    }
  }, [launchpadData.launchpads]);

  useEffect(() => {
    console.log("@selectedLaunchpad", selectedLaunchpad);
    if (selectedLaunchpad) {
      refetchShit();
      const dateNow = Math.floor(new Date().getTime() / 1000);
      const startDate = Math.floor(new Date(selectedLaunchpad.launchDate).getTime() / 1000);
      const endDate = Math.floor(new Date(selectedLaunchpad.endDate).getTime() / 1000);
      console.log("@dateNow", dateNow, startDate, endDate);
      if (dateNow < startDate) {
        console.log("@cum");
        setStatusContract(0);
      } else if (dateNow > startDate && dateNow < endDate) {
        console.log("@cort");
        setStatusContract(1);
      } else if (dateNow > endDate) {
        console.log("@cumaa");
        setStatusContract(2);
      }
    }
  }, [selectedLaunchpad]);
  return (
    selectedLaunchpad && (
      <>
        <div className="min-h-full">
          <main className="py-10">
            {/* Page header */}
            <div className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img className="h-16 w-16 rounded-full" src={BASE_API_URL + selectedLaunchpad.tokenInfo.tokenLogo.url} alt="" />
                    <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedLaunchpad.tokenInfo.tokenName}</h1>
                  <p className="text-sm font-medium text-gray-500 dark:text-white">
                    Applied on {moment.utc(selectedLaunchpad.createdAt).format("MMMM DD, YYYY hh:mm")} (UTC)
                  </p>
                </div>
              </div>
              <div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  {statusContract && statusContract === 0
                    ? "Comming Soon"
                    : statusContract === 1
                    ? "On Sale"
                    : statusContract === 2
                    ? "Ended"
                    : "Unavailable"}
                </button>
              </div>
            </div>

            <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2 lg:col-start-1">
                {/* Description list*/}

                <section aria-labelledby="applicant-information-title">
                  <div className="bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                      <h2 id="applicant-information-title" className="text-lg font-medium leading-6 text-gray-900">
                        Pool Info
                      </h2>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">All information about pool here.</p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Presale Start Time</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {moment.utc(selectedLaunchpad.startDate).format("MMMM DD, YYYY hh:mm")} (UTC)
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Presale End Time</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {moment.utc(selectedLaunchpad.endDate).format("MMMM DD, YYYY hh:mm")} (UTC)
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Soft Cap</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedLaunchpad.softcap}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Hard Cap</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedLaunchpad.hardcap}</dd>
                        </div>

                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Price Liquidity</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedLaunchpad.tokenInfo.tokenForLiquidity}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Price Sale</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedLaunchpad.tokenInfo.tokenForPresale}</dd>
                        </div>

                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">Whitepaper</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                              <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                <div className="flex w-0 flex-1 items-center">
                                  <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                  <span className="ml-2 w-0 flex-1 truncate">{selectedLaunchpad.linkWhitepaper}</span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <a href={selectedLaunchpad.linkWhitepaper} className="font-medium text-blue-600 hover:text-blue-500">
                                    Visit
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </dd>
                        </div>

                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">Website</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                              <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                <div className="flex w-0 flex-1 items-center">
                                  <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                  <span className="ml-2 w-0 flex-1 truncate">{selectedLaunchpad.linkWebsite}</span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <a href={selectedLaunchpad.linkWebsite} className="font-medium text-blue-600 hover:text-blue-500">
                                    Visit
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <a
                        href={selectedLaunchpad.linkContract}
                        className="block bg-gray-50 px-4 py-4 text-center text-sm font-medium text-gray-500 hover:text-gray-700 sm:rounded-b-lg"
                      >
                        Go to contract
                      </a>
                    </div>
                  </div>
                </section>

                <section aria-labelledby="applicant-information-title">
                  <div className="bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                      <h2 id="applicant-information-title" className="text-lg font-medium leading-6 text-gray-900">
                        Token Detail
                      </h2>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">all information basic at here.</p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">Token</dt>
                        <dd className="mt-1 text-sm text-gray-900">{selectedLaunchpad.tokenInfo.tokenAddress}</dd>
                      </div>

                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 pt-8">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Blockchain</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedLaunchpad.tokenInfo.chain.chainName}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Token Decimals</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedLaunchpad.tokenInfo.tokenDecimal}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Total Supply</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedLaunchpad.tokenInfo.tokenTotalSupply}</dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">About</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedLaunchpad.tokenInfo.tokenDescription}</dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <a
                        href={selectedLaunchpad.tokenInfo.tokenLink}
                        className="block bg-gray-50 px-4 py-4 text-center text-sm font-medium text-gray-500 hover:text-gray-700 sm:rounded-b-lg"
                      >
                        Go to contract
                      </a>
                    </div>
                  </div>
                </section>
              </div>

              <section aria-labelledby="timeline-title" className="lg:col-span-1 lg:col-start-3">
                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                  <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
                    Timeline Status
                  </h2>

                  {/* Activity Feed */}
                  <div className="mt-6 flow-root">
                    <ul role="list" className="-mb-8">
                      {timeline.map((item, itemIdx) => (
                        <li key={item.id}>
                          <div className="relative pb-8">
                            {itemIdx !== timeline.length - 1 ? (
                              <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-3">
                              <div>
                                <span
                                  className={classNames(
                                    item.type.bgColorClass,
                                    "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                                  )}
                                >
                                  <item.type.icon className="h-5 w-5 text-white" aria-hidden="true" />
                                </span>
                              </div>
                              <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                <div>
                                  <p className="text-sm text-gray-500">
                                    {item.content}{" "}
                                    <a href="#" className="font-medium text-gray-900">
                                      {item.target}
                                    </a>
                                  </p>
                                </div>
                                <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                  <time dateTime={item.datetime}>{item.date}</time>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="justify-stretch mt-6 flex flex-col">
                    {statusContract && statusContract === 1 && isConnected ? (
                      <>
                        {parseInt(allowance) > 0 && (
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            onChange={(e) => {
                              setDonateValue(e.target.value);
                            }}
                            autoComplete="family-name"
                            className="mb-3 block w-full rounded-md dark:text-dark border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                          />
                        )}
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                          onClick={() => {
                            const val = ethers.utils.parseUnits(donateValue, selectedLaunchpad.tokenInfo.tokenDecimal);
                            parseInt(allowance) > 0
                              ? purchase.write({
                                  recklesslySetUnpreparedArgs: [val.toString()],
                                })
                              : approve.write({
                                  recklesslySetUnpreparedArgs: [selectedLaunchpad.poolAddress, infiniteNumber],
                                });
                          }}
                        >
                          {parseInt(allowance) > 0 ? "Donate" : "Unlock"}
                        </button>
                      </>
                    ) : statusContract === 2 && isConnected ? (
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                        onClick={() => claimRewards.write()}
                      >
                        Claim
                      </button>
                    ) : (
                      <>
                        <LPDButton
                          title={"Please Connect your Wallet"}
                          loading={false}
                          cb={() => {
                            handleOpen();
                          }}
                        />

                        <ConnectModal handleClose={handleClose} open={open} />
                      </>
                    )}
                  </div>
                </div>

                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6 mt-5">
                  <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
                    Information
                  </h2>

                  <dl>
                    <div className="py-5 sm:grid sm:grid-cols-2 sm:gap-4">
                      <dt className="text-sm font-medium text-gray-500">Minimum Buy</dt>
                      <dd className="mt-1 text-right text-sm text-gray-900 sm:col-span-1 sm:mt-0">{selectedLaunchpad.minContribution}</dd>
                    </div>
                    <div className="py-5 sm:grid sm:grid-cols-2 sm:gap-4">
                      <dt className="text-sm font-medium text-gray-500">Maximum Buy</dt>
                      <dd className="mt-1 text-right text-sm text-gray-900 sm:col-span-1 sm:mt-0">{selectedLaunchpad.maxContribution}</dd>
                    </div>
                    <div className="py-5 sm:grid sm:grid-cols-2 sm:gap-4">
                      <dt className="text-sm font-medium text-gray-500">My Contribution</dt>
                      <dd className="mt-1 text-right text-sm text-gray-900 sm:col-span-1 sm:mt-0">3</dd>
                    </div>
                  </dl>
                </div>
              </section>
            </div>
          </main>
        </div>
      </>
    )
  );
}
