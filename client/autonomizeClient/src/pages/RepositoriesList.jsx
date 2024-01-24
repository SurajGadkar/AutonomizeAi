import React, { useState, useEffect } from "react";
import { getRepositoryList } from "../api/api";
import RepoComp from "../component/RepoComp/RepoComp";
import styles from "./RepositoryList.module.css";

function RepositoriesList() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    getRepositoryList()
      .then((res) => (res = res.slice(0, 30)))
      .then((res) => setRepos(res))
      .then(setisLoading(false));
  }, []);

  return (
    <div className={styles.main__container}>
      {repos.length > 0 &&
        !isLoading &&
        repos.map((repo) => {
          return (
            <RepoComp
              key={repo.id}
              repo={repo}
              image={repo.owner.avatar_url}
              name={repo.name}
              desc={repo.description || "Click and find out!"}
            />
          );
        })}
      {isLoading && <p>Loading ...</p>}
    </div>
  );
}

export default RepositoriesList;
