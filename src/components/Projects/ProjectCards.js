import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  const { imgPath, title, description, technologies = [] } = props;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body className="project-card-body">
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        {!!technologies.length && (
          <div className="project-tech-list">
            {technologies.map((tech, index) => (
              <div className="project-tech-badge" key={`${tech.name}-${index}`}>
                {tech.icon && (
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="project-tech-icon"
                  />
                )}
                <span className="project-tech-text">{tech.name}</span>
              </div>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
