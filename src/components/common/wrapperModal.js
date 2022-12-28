import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { IconButton, Stack } from "@mui/material";
import { Close } from "@mui/icons-material";
import { classNames } from "@/helpers/formatters";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 500,
  bgcolor: "#1e2632",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  maxHeight: 700,
  overflowY: "scroll",
};

export default function ModalWrapper({ children, open, handleClose, title = "Modal title", onCloseCallback, additionalTextClasses = [] }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Stack direction="row" alignItems={"center"} justifyContent="space-between">
            <p className={classNames("text-white font-bold text-lg", ...additionalTextClasses)}>{title}</p>
            <IconButton onClick={onCloseCallback} className="rounded-full hover:bg-main">
              <Close className="text-white" />
            </IconButton>
          </Stack>
          {children}
        </Box>
      </Fade>
    </Modal>
  );
}
