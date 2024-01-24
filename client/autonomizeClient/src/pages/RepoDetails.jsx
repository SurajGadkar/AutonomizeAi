import React, { useState, useEffect } from "react";
import { getRepoById } from "../api/api";
import { useLocation } from "react-router-dom";
import styles from "./RepoDetails.module.css";
import { MdVerified } from "react-icons/md";

function DummyTag({ name }) {
  const buttonStyles = {
    height: "30px",
    width: "40px",
    fontSize: "0.6rem",
    border: "1px solid black",
    borderRadius: "0.2rem",
    margin: "2px 4px",
  };
  return <button style={buttonStyles}> {name}</button>;
}
function RepoDetails({}) {
  const location = useLocation();

  const [repo, setRepo] = useState(location.state.data);
  console.log(repo);
  const image = repo.owner.avatar_url;
  return (
    <>
      {repo && (
        <div className={styles.main__container}>
          <div className={styles.left}>
            <img className={styles.image} src={image} alt="repo-img" />
            <p className={styles.verified}>
              Verified by Github <MdVerified />
            </p>
            <p>{repo.description}</p>
            <div className={styles.categories__container}>
              <div className={styles.categories}>
                <DummyTag name="Paid" />
                <DummyTag name="Free" />
                <DummyTag name="Code review" />
                <DummyTag name="IDEs" />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <p>Application</p> <h1 className={styles.name}>{repo.name}</h1>
            <button className={styles.setplan__btn}> set a plan</button>
            <p>{repo.description || "Description is missing!"}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default RepoDetails;
