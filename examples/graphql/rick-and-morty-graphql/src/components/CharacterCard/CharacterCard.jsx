import { Link } from "react-router-dom";
import "./styles.css";

const CharacterCard = ({ character }) => (
  <Link to={`/detail/${character.id}`} className="characterCard">
    <article className="characterCard">
      <div className="characterImagen">
        <img src={character.image} alt="Blue Footprint Guy" />
      </div>
      <div className="characterContent">
        <div className="section">
          <h2>{character.name}</h2>
          <span className="status">
            <span
              className={`status__icon ${
                character.status === "Dead" ? "status__dead" : "status__alive"
              }`}
            ></span>
            {character.status} - {character.species}
          </span>
        </div>
        <div className="section">
          <span className="text-gray">Last known location:</span>
          {character.origin.name}
        </div>
        <div className="section">
          <span className="text-gray">First seen in:</span>
          {character.location.name}
        </div>
      </div>
    </article>
  </Link>
);

export default CharacterCard;
