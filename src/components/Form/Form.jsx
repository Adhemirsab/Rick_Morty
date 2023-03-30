import React from "react";
import validation from "./validation";
import styles from "./Form.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({
      ...userData,
      [property]: value,
    });

    setErrors(
      validation({
        ...userData,
        [property]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };
  return (
    <div className={styles.container}>
      <form className={styles.containerForm} onSubmit={handleSubmit}>
        <div className={styles.containerFormPoster}>
          <img src="../../assets/removido.png" alt="" />
        </div>

        <div className={styles.containerFormLogin}>
          <h1>Login</h1>
          <h5>Please sign in to continue</h5>
          <div className={styles.inputWrapper}>
            <label htmlFor="username"></label>
            <AiOutlineMail className={styles.inpuIconUser} />
            <input
              className={styles.inputWrapperUser}
              type="text"
              name="username"
              onChange={handleInputChange}
              value={userData.username}
              placeholder="user123@email.com"
            />
            {errors.username && (
              <p style={{ color: "red" }}>{errors.username}</p>
            )}
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="password"></label>
            <RiLockPasswordLine className={styles.inpuIconPassword} />
            <input
              className={styles.inputWrapperPassword}
              type="password"
              name="password"
              onChange={handleInputChange}
              value={userData.password}
              placeholder="PASSWORD"
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>
        </div>
        <button className={styles.containerButton} type="submit">
          LOGIN
        </button>
        <p>Forgot Password?</p>
        <p className={styles.bottom}>
          Don't have an account? <span>Sing up</span>
        </p>
      </form>
    </div>
  );
}
export default Form;
