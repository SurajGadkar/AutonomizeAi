import React from "react";
import Search from "../component/Search/Search";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.banner}>Welcome to Repository</h1>
      <Search />
    </div>
  );
}

export default Home;
