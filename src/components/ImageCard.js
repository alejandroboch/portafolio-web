function ImageCard({ src, alt, label }) {
  return (
    <div className="image-card">
      <img src={src} alt={alt} />
      <p>{label}</p>
    </div>
  );
}

export default ImageCard;