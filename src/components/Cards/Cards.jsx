import Card from "../Card/Card";
import styles from "./Cards.module.css";

function Cards(props) {
  return (
    <div className={styles.container}>
      {props.characters.map((character, index) => {
        return (
          <Card
            key={index}
            onClose={() => props.onClose(character.id)}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            id={character.id}
          />
        );
      })}
    </div>
  );
}
export default Cards;
