import React from "react";
import styles from "./FollowerComp.module.css";
import { useNavigate } from "react-router-dom";

function FollowerComp({ id, name, image }) {
  const navigate = useNavigate();
  const handleFollowerRoute = () => {
    navigate(`/repositories/${name}`);
  };
  return (
    <div className={styles.container} onClick={handleFollowerRoute}>
      <div>
        <img className={styles.image} src={image} alt="follower-image" />
      </div>
      <div className={styles.name}>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default FollowerComp;
