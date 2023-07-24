import React from "react";
import styles from "./Header.styles.scss";

export const Header = () => {
  return (
    <h1 className={styles.header} data-testid="testid">
      <p>React and Webpack</p>
    </h1>
  );
};
