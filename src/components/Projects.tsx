import "../css/Projects.css";
import Card from "./Card.tsx";
import { cardData } from "../data/cardData.tsx";

function Projects() {
  return (
    <>
      <div className="header">
        <h2>Projects Portfolio</h2>
      </div>
      <hr className="hor-line" />
      <div className="card-coll">
        {cardData.map((card) => (
          <Card
            key={card.id}
            description={card.description}
            image={card.image}
            label={card.label}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
