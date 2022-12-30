import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getChainData } from "src/redux/actions/chainActions";
import { getLaunchpadData } from "src/redux/actions/launchpadAction";
import Loader from "@/components/common/loader";
import Link from "next/link";

import Faq from "@/components/common/faq";
import Card from "@/components/common/card";
export default function Example() {
  const launchpadData = useSelector((state) => state?.launchpads);

  const dispatch = useDispatch();

  const fetchData = async () => {
    axios.get("http://localhost:1337/api/chains").then((res) => dispatch(getChainData(res.data)));
    axios.get("http://localhost:1337/api/launchpads?populate[tokenInfo][populate]=*").then((res) => {
      console.log(res);
      dispatch(getLaunchpadData(res.data));
    });
    axios.get("http://localhost:1337/api/token-infos").then((res) => dispatch(getChainData(res.data)));
  };

  useEffect(() => {
    console.log("@crot", launchpadData);
  }, [launchpadData]);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="isolate">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Announcing our next round of funding.{" "}
                    {/* <a href="#" className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a> */}
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">Trusted Platform for Crypto Launchpad</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  Launching qualified projects on the crosschain Blockchain. Whitelist your address to get early-access to promising
                  projects.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <Link
                    href="/apply-project"
                    className="inline-block rounded-lg bg-orange-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-600 hover:bg-orange-700 hover:ring-orange-700"
                  >
                    Apply project
                  </Link>
                  <a href="#" className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-light-900">
                    Join Community
                  </a>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="content-center flex-wrap py-4 flex justify-center">
              {/* <img
              className="mx-1"
              src={"../assets/home/bsc-scan.svg"}
              alt="bsc scan logo"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                padding: "1rem",
                borderRadius: "50px",
              }}
            /> */}
              <span
                className="mx-2 my-3 rounded"
                style={{
                  color: "white",
                  background: "rgba(255, 255, 255, 0.1)",
                  padding: "12px 20px",
                }}
              >
                Token Contract:
              </span>
              <span
                className="mx-2 my-3 rounded"
                onClick={() => navigator.clipboard.writeText("0x93a72ce957adaf60c74a5c7815ce7b3d0a7e6b48")}
                style={{
                  color: "white",
                  background: "rgba(255, 255, 255, 0.1)",
                  padding: "12px 20px",
                }}
              >
                {/* {truncateWalletAddress('0x1234567890987654321', 6)} */}
                {"0x93a72ce957adaf60c74a5c7815ce7b3d0a7e6b48"}
                {/* <img
                className="rounded"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  marginLeft: ".75em",
                  cursor: "pointer",
                }}
                src={"../assets/home/copy.svg"}
                alt="copy icon"
              /> */}
              </span>
            </div>
          </div>
          {launchpadData.loading ? <Loader /> : <Card item={launchpadData.launchpads} />}

          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <Faq />
          </div>
        </div>
      </main>
    </div>
  );
}
