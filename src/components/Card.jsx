import './Card.css';

const Card = ({ character }) => {
    return (
      <div className="FlashCard">
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
      </div>
    );
  };
  
export default Card;