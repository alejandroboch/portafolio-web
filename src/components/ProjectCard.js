import { useState } from "react";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";

function ProjectCard({ title, description, link, images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="card">
      <h4>{title}</h4>
      <p style={{textAlign: "justify"}}>{description}</p>

      <a href={link} target="_blank" rel="noreferrer">
        Ver código
      </a>

      <div className="images">
        {images.map((img, index) => (
          <ImageCard
            key={index}
            src={img.src}
            alt={img.alt}
            label={img.label}
            onClick={() => setSelectedImage({ ...img, images })}
          />
        ))}
      </div>

      {/* MODAL */}
      <ImageModal
        image={selectedImage}
        images={images}
        onClose={() => setSelectedImage(null)}
        />
    </div>
  );
}

export default ProjectCard;