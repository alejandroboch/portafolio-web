function ImageCard({ src, alt, label, onClick }) {
  return (
    <div className="image-card" onClick={onClick}>
      <img src={src} alt={alt} />
      <p>{label}</p>
    </div>
  );
}

export default ImageCard;