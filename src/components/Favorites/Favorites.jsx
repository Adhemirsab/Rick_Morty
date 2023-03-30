import { useSelector } from "react-redux";
import Card from "../Card/Card";

function Favorites(props) {
  const myFavorites = useSelector((state) => state.myFavorites);
  console.log(myFavorites);
  return (
    <>
      {myFavorites.map((character, index) => {
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
    </>
  );
}

export default Favorites;
