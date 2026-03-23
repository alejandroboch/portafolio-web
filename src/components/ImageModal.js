function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={image.src} alt={image.alt} />
        <p>{image.label}</p>
      </div>
    </div>
  );
}

export default ImageModal;