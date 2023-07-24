import React from "react";
import styles from "./style.scss";

const App = () => {
  return (
    <h1 className={styles.content} data-testid="testid">
      <p>React and Webpack</p>
      <img src="assets/cat.jpeg" alt="cat" />
      <div className={styles.img} />
    </h1>
  );
};

export default App;
