import { useEffect, useState } from "react";

function ImageModal({ image, onClose, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const gallery = images || [image];
  const current = gallery[currentIndex];

  useEffect(() => {
    if (image && images) {
      const index = images.findIndex(img => img.src === image.src);
      setCurrentIndex(index);
    }
  }, [image, images]);

  useEffect(() => {
  if (image) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }

  return () => document.body.classList.remove("modal-open");
}, [image]);

  // 👉 TECLADO
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  if (!image) return null;

  const prevImage = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? gallery.length - 1 : prev - 1
  );
};

const nextImage = () => {
  setCurrentIndex((prev) =>
    prev === gallery.length - 1 ? 0 : prev + 1
  );
};
  // 👉 SWIPE (celular)
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextImage(); // swipe izquierda
    }

    if (touchStart - touchEnd < -50) {
      prevImage(); // swipe derecha
    }
  };



  return (
    <div className="modal-overlay" onClick={onClose}>
  
  <button className="close-btn" onClick={onClose}>✖</button>

  <div
    className="modal-content"
    onClick={(e) => e.stopPropagation()}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
  >
    {/* Flecha izquierda */}
    <button className="nav-btn left" onClick={prevImage}>⬅</button>

    <img src={current.src} alt={current.alt} />
    <p>{current.label}</p>

    {/* Flecha derecha */}
    <button className="nav-btn right" onClick={nextImage}>➡</button>
  </div>
</div>
  );
}

export default ImageModal;