import { useEffect, useState } from "react";

function ImageModal({ image, onClose, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const gallery = images?.length ? images : image ? [image] : [];

  useEffect(() => {
    if (!image) return;
    if (images?.length) {
      const index = images.findIndex((img) => img.src === image.src);
      setCurrentIndex(index >= 0 ? index : 0);
    } else {
      setCurrentIndex(0);
    }
  }, [image, images]);

  useEffect(() => {
    if (image) document.body.classList.add("modal-open");
    else document.body.classList.remove("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, [image]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gallery]);

  if (!image) return null;

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextImage();
    if (touchStart - touchEnd < -50) prevImage();
  };

  const current = gallery[currentIndex];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="close-btn" onClick={onClose}>✖</button>

      {gallery.length > 1 && (
        <>
          <button className="nav-btn left" onClick={(e) => { e.stopPropagation(); prevImage(); }}>⬅</button>
          <button className="nav-btn right" onClick={(e) => { e.stopPropagation(); nextImage(); }}>➡</button>
        </>
      )}

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img src={current.src} alt={current.alt || ""} />
        <p>{current.label}</p>
      </div>
    </div>
  );
}

export default ImageModal;