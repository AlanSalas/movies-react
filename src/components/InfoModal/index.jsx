import React from "react";
import { Modal, Fade, Backdrop } from "@mui/material";
import { InfoModalContainer } from "../styled/InfoModal";

const InfoModal = ({ children, open, handleCloseModal }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <InfoModalContainer>{children}</InfoModalContainer>
      </Fade>
    </Modal>
  );
};

export default InfoModal;
