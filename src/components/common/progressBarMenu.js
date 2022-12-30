import { React, useEffect, useState } from "react";

function ProgressBarMenu(props) {
  console.log("@product", props, props.item);
  const [currentPurchase, setCurrentPurchase] = useState("0");

  // const setPrice = async () => {
  //   try {
  //     if (props.poolAddress) {
  //       const currencyContract = new window.$web3.eth.Contract(abi, item.attributes.ExchangeToken);
  //       if (currencyContract) {
  //         const _totalRaise = await currencyContract.methods.balanceOf(item.attributes.PoolAddress).call();

  //         const currentPool = toSmallUnit(Number(_totalRaise), Number(item.attributes.ExchangeDecimal));
  //         setCurrentPurchase(Number(props.hardcap) - Number(currentPool));
  //       }
  //     }
  //   } catch (error) {
  //     setCurrentPurchase(0);
  //   }
  // };
  // useEffect(() => {
  //   setPrice();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="progressInfo pt-3">
      <div>
        <p className="progressPercentage">
          Progress: {(((Number(props.item.hardcap) - Number(currentPurchase)) / Number(props.item.hardcap)) * 100).toFixed("2")}%
        </p>
      </div>
      <div className="">
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          {/* <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={`width: "${((Number(props.item.hardcap) - Number(currentPurchase)) / Number(props.item.hardcap)) * 100}%"`}
          ></div> */}
        </div>
      </div>
      <div className="currentProgress">
        <div>
          {(Number(props.item.hardcap) - Number(currentPurchase)).toLocaleString()} / {Number(props.item.hardcap).toLocaleString()}{" "}
        </div>
      </div>
    </div>
  );
}

export default ProgressBarMenu;
