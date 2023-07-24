import React from "react";
import { Header } from "./components/Header";
import styles from "./style.scss";

const App = () => {
  return (
    <div className={styles.content}>
      <Header />
      <img src="assets/cat.jpeg" alt="cat" />
      <div className={styles.img} />
    </div>
  );
};

export default App;
