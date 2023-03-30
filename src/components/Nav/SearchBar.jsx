import { useState } from "react";
import styles from "./Nav.module.css";
function SearchBar(props) {
  const [character, setCharacter] = useState();

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };
  return (
    <div className={styles.search}>
      <input type="search" onChange={handleChange} />
      <button onClick={() => props.onSearch(character)}>AGREGAR</button>
    </div>
  );
}
export default SearchBar;
