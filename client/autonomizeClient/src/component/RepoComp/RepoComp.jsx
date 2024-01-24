import React from "react";
import styles from "./RepoComp.module.css";
import { useNavigate } from "react-router-dom";
import { MdVerified } from "react-icons/md";

function RepoComp({ id, image, name, desc, repo }) {
  const username = repo.owner.login;
  const navigate = useNavigate();

  const handleReRoute = () => {
    navigate(`/repositories/${username}/${repo.id}`, { state: { data: repo } });
  };

  return (
    <div className={`${styles.container}`} onClick={handleReRoute}>
      <div className={`${styles.image__container}`}>
        <img className={`${styles.image}`} src={image} alt="repo-img" />
      </div>
      <div className={`${styles.desc__container}`}>
        <h3 className={`${styles.name}`}>
          {name} {"  "}
          <MdVerified />
        </h3>
        <p className={`${styles.desc}`}> {desc}</p>
      </div>
    </div>
  );
}

export default RepoComp;
