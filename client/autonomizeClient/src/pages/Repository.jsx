import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllRepoByUsername } from "../api/api.js";
import RepoComp from "../component/RepoComp/RepoComp.jsx";
import styles from "./Repository.module.css";

function Repository() {
  const params = useParams();
  const username = params.username;
  const navigate = useNavigate();

  const [userRepos, setUserRepos] = useState([]);

  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    const repos = getAllRepoByUsername(username);
    repos
      .then((data) => {
        if (!data) {
          setUserRepos([]);
        } else {
          setUserRepos(data);
        }
        setisLoading(false);
      })
      .catch((err) => {
        setisLoading(false);
        console.log(err);
      });
  }, []);

  const followersURL = userRepos[0]?.owner.followers_url;

  const handleRouteToFollowers = () => {
    navigate(`/users/${username}/followers`, { state: { followersURL } });
  };
  return (
    <div className={styles.main__container}>
      <div className={styles.user__info}>
        <h1 className={styles.username}> Repositories of {username} </h1>
        <div className={styles.sub__userInfo}>
          <div></div>
          <button className={styles.btn} onClick={handleRouteToFollowers}>
            Followers
          </button>
        </div>
      </div>
      <div className={styles.repo_container}>
        {userRepos.length > 0 ? (
          userRepos.map((repo) => {
            //console.log(repo);
            return (
              <RepoComp
                key={repo.id}
                repo={repo}
                image={repo.owner.avatar_url}
                name={repo.name}
                desc={repo.description || "Click and find out!"}
              />
            );
          })
        ) : userRepos.length === 0 && !isLoading ? (
          <p>No Repos Found !</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Repository;
