import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  const navigate = useNavigate();
  const back = () => {
    navigate("/home");
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <>
      <button onClick={back}>Home</button>
      <h2>{character.name}</h2>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      {/* <h2>{origin.name}</h2>  */}
      <img src={character.image} alt="" />
    </>
  );
}

export default Detail;
