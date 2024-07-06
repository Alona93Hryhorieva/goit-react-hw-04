import { useEffect } from "react";
import Modal from "react-modal";

// Modal.setAppElement("#root");

export default function ImageModal({ isOpen, closeModal, imageUrl }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Large Image Modal"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          background: "transparent",
        },
      }}
    >
      <img
        src={imageUrl}
        alt="Selected"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </Modal>
  );
}
