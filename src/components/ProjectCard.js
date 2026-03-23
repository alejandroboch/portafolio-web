import ImageCard from "./ImageCard";

function ProjectCard({ title, description, link, images, onImageClick }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p style={{ textAlign: "justify" }}>{description}</p>

      <a href={link} target="_blank" rel="noopener noreferrer">Ver código</a>

      <div className="images">
        {images.map((img, index) => (
          <ImageCard
            key={index}
            {...img}
            onClick={() => onImageClick({ ...img, images })}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;

