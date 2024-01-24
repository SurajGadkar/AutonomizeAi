import React, { useState } from "react";
import { getUsersfromGithub } from "../../api/api";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    getUsersfromGithub(input)
      .then((res) => {
        if (res) {
          navigate(`/repositories/${input}`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.banner}>Enter Github Username </h1>
      <div className={styles.search__container}>
        <input
          className={styles.search}
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your github username"
        />
        <button className={styles.btn} onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
