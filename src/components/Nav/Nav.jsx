import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
function Nav(props) {
  return (
    <div className={styles.container}>
      <SearchBar onSearch={props.onSearch} />
      <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
      <Link to="/favorites">favorites</Link>
    </div>
  );
}

export default Nav;
