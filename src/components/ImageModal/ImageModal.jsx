import Modal from "react-modal";

export default function ImageModal({ isOpen, closeModal, imageUrl }) {
  const handleCloseModal = () => {
    console.log("Закриття модалки");
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true} // Закриваємо модалку при кліці на бекдропі
      contentLabel="Large Image Modal"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
          cursor: "pointer",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          border: "none",
          background: "transparent",
        },
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
        onClick={handleCloseModal} // Клік на бекдропі закриває модалку
      >
        <img
          src={imageUrl}
          alt="Selected"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    </Modal>
  );
}
