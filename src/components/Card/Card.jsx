import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import styles from "./Card.module.css";
import { AiOutlineCloseSquare } from "react-icons/ai";
function Card(props) {
  console.log(props);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      props.deleteFavorite(props.id);
      setIsFav(false);
    } else {
      setIsFav(true);
      const person = {
        id: props.id,
        gender: props.gender,
        image: props.image,
        name: props.name,
        species: props.species,
      };
      props.addFavorite(person);
    }
  };

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div className={styles.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={props.onClose} className={styles.containerClose}>
        {" "}
        <AiOutlineCloseSquare />
      </button>
      {/* <input onClick={props.onClose} className = {styles.containerClose} type="button" value="delete"/> */}
      <div className={styles.containerImg}>
        <img className={styles.containerImgRick} src={props.image} alt="" />
      </div>
      <div className={styles.containerText}>
        <Link to={`/detail/${props.id}`}>
          <h2 className={styles.containerTextTitle}>{props.name}</h2>
        </Link>
        <h2 className={styles.containerTextTitle}>{props.species}</h2>
        <h2 className={styles.containerTextTitle}>Gender: {props.gender}</h2>
      </div>
      <button className={styles.containerButton}>Detalles</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (person) => dispatch(addFavorite(person)),
    deleteFavorite: (id) => dispatch(deleteFavorite(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
