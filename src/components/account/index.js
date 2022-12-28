import { classNames, getEllipsisTxt } from "../../helpers/formatters";
import React, { useEffect, useState } from "react";
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from "wagmi";
import { styled } from "@mui/material/styles";
import { tooltipClasses, Tooltip } from "@mui/material";
import AccountInfo from "../AccountInfo";
import { CHAIN_ID, NETWORK_NAME } from "src/constants";
import ModalWrapper from "../common/wrapperModal";
import { XCircleIcon } from "@heroicons/react/20/solid";
import ZenithButton from "../Button";
import { toast } from "react-toastify";
import ConnectModal from "../ConnectModal";

const CustomizedToolTip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(({ _ }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#191B1F",
  },
}));

function Account({ additionalClasses = [], width, renderView = true }) {
  const [connected, setConnected] = useState(false);
  const [openNetworkModal, setOpenNetworkModal] = useState(false);
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { error, isLoading, switchNetwork } = useSwitchNetwork({
    chainId: CHAIN_ID,
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const closeAndDisconnect = () => {
    setOpenNetworkModal(false);
    disconnect();
  };

  useEffect(() => {
    setConnected(isConnected);
  }, [isConnected]);

  useEffect(() => {
    if (chain) {
      if (chain.id !== CHAIN_ID) {
        setOpenNetworkModal(true);
      } else {
        setOpenNetworkModal(false);
      }
    }
  }, [chain]);

  useEffect(() => {
    if (error !== null) {
      setOpenNetworkModal(false);
      setOpen(false);
      disconnect();
      toast.error("Rejected by user. Disconnected", {
        icon: false,
      });
    }
  }, [error]);

  return !connected && renderView ? (
    <div style={width === "full" ? { width: "100%" } : { width }}>
      <button
        onClick={handleOpen}
        className={classNames(
          '"flex w-full justify-center rounded-xl border border-transparent bg-light py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-dark focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"',
          ...additionalClasses
        )}
      >
        Connect
      </button>

      <ConnectModal handleClose={handleClose} open={open} />
    </div>
  ) : (
    <div>
      {renderView && (
        <CustomizedToolTip title={<AccountInfo />} className="w-72">
          <div className="flex justify-between bg-[#191B1F] w-72 py-2 px-3 rounded-full relative place-items-center">
            <div>
              <p className="text-white text-start text-sm">{address !== "" || address !== undefined ? getEllipsisTxt(address, 6) : ""}</p>
            </div>
            <div>
              <button
                className="bg-red-50 text-red-800 p-2 text-sm rounded-xl hover:bg-red-200"
                onClick={() => {
                  disconnect();
                  setOpen(false);
                }}
              >
                Disconnect
              </button>
            </div>
          </div>
        </CustomizedToolTip>
      )}
      <ModalWrapper open={openNetworkModal} handleClose={closeAndDisconnect} onCloseCallback={closeAndDisconnect} title="Wrong network">
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Wrong network</h3>
              <div className="mt-2 text-sm text-red-700">
                <ul role="list" className="list-disc space-y-1 pl-5">
                  <li>Add {NETWORK_NAME} to your wallets</li>
                  <li>Switch your network to {NETWORK_NAME}</li>
                  <ZenithButton
                    title={"Change Network"}
                    loading={isLoading}
                    cb={() => {
                      try {
                        switchNetwork(CHAIN_ID);
                      } catch (error) {
                        disconnect();
                        setOpenNetworkModal(false);
                        setOpen(false);
                        toast(error.message || "Some Error Occured");
                      }
                    }}
                    disabled={!switchNetwork || chain?.id === CHAIN_ID}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </div>
  );
}

export default Account;
