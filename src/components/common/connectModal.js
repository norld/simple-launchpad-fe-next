/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ModalWrapper from "./wrapperModal";
import { DialogTitle, List, Stack } from "@mui/material";
import { AccountBalanceWallet } from "@mui/icons-material";
import { useConnect } from "wagmi";

const ConnectModal = ({ handleClose, open }) => {
  const { connect, connectors } = useConnect();

  return (
    <ModalWrapper handleClose={handleClose} open={open} className="rounded-2xl" onCloseCallback={handleClose} title="Connect Wallet">
      <List sx={{ pt: 0, py: 2, px: 4, borderRadius: 4, border: `1px solid white` }} className="bg-bgDark">
        <Stack direction={"row"} spacing={2} alignItems="center">
          <DialogTitle className="text-white">Choose wallets</DialogTitle>
          <AccountBalanceWallet className="text-white" />
        </Stack>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {connectors.map((connector) => (
            <div
              key={connector.id}
              onClick={() => {
                connect({ connector });
                handleClose();
              }}
              className="col-span-1 flex justify-center bg-bgDark hover:bg-border py-8 px-8 rounded-lg cursor-pointer"
            >
              <Stack direction={"column"} alignItems="center">
                {connector.name.replace(" ", "") === "MetaMask" ? (
                  <img className="max-h-12" src={`/img/wallets/mamax.png`} alt="Workcation" />
                ) : (
                  <img className="max-h-12" src={`/img/wallets/${connector.name.replace(" ", "")}.png`} alt="Workcation" />
                )}
                <p className="text-sm text-white text-center mt-2">{connector.name}</p>
              </Stack>
            </div>
          ))}
        </div>
      </List>
    </ModalWrapper>
  );
};

ConnectModal.propTypes = {};

export default ConnectModal;
