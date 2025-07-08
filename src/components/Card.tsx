import "../css/Card.css";
//import { cardData } from '../data/cardData.tsx';

interface CardProps {
  image: string;
  description: string;
  label: string;
}

function Card({ image, description, label }: CardProps) {
  return (
    <>
      <div className="card">
        <img src={image} />
        <h3>{description}</h3>
        <p>{label}</p>
      </div>
    </>
  );
}

export default Card;
