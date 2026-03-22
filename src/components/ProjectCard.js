import ImageCard from "./ImageCard";

function ProjectCard({ title, description, link, images }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{description}</p>

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
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;