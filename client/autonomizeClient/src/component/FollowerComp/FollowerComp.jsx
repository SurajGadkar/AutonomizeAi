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
      <img className={styles.image} src={image} alt="follower-image" />
      <h3 className={styles.name}>{name}</h3>
    </div>
  );
}

export default FollowerComp;
