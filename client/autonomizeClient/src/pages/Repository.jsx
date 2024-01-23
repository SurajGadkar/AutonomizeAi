import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllRepoByUsername } from "../api/api.js";
import RepoComp from "../component/RepoComp/RepoComp.jsx";

function Repository() {
  const params = useParams();
  const username = params.username;

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

  //console.log(userRepos);
  return (
    <div>
      <div>
        <h1>{username}</h1>
        <p>Some Useful Info</p>
        <button>Back</button>
      </div>
      <div>
        {userRepos.length > 0 ? (
          userRepos.map((repo) => {
            console.log(repo);
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
