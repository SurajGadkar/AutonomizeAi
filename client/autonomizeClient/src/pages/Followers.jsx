import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import FollowerComp from "../component/FollowerComp/FollowerComp";
import styles from "./Followers.module.css";

function Followers() {
  const location = useLocation();
  const url = location.state.followersURL;

  const [followers, setFollowers] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    getFollowers();
  }, []);

  //console.log(followers);
  const getFollowers = async () => {
    setisLoading(true);
    try {
      await axios
        .get(url)
        .then((res) => (res = res.data))
        .then((data) => setFollowers(data))
        .then(() => setisLoading(false));
    } catch (err) {
      console.log(err);
      setisLoading(false);
    }
  };

  return (
    <div className={styles.main__container}>
      {" "}
      <h2>Your Followers </h2>
      <div className={styles.repo__container}>
        {followers.length > 0 &&
          !isLoading &&
          followers.map((user) => {
            return (
              <FollowerComp
                key={user.id}
                name={user.login}
                image={user.avatar_url}
                user={user}
              />
            );
          })}

        {!followers.length && !isLoading && <p>No followers found!</p>}

        {isLoading && <p>Loading ...</p>}
      </div>
    </div>
  );
}

export default Followers;
