import React, { useState, useEffect } from "react";
import { getRepoById } from "../api/api";
import { useLocation } from "react-router-dom";

function RepoDetails({}) {
  const location = useLocation();

  const [repo, setRepo] = useState(location.state.data);
  console.log(repo);
  const image = repo.owner.avatar_url;
  return (
    <>
      {" "}
      {repo && (
        <div>
          <div>
            <img src={image} alt="repo-img" />
            <p>{repo.description}</p>
            <div>
              Categories
              {"Stars, forks, count etc..."}
            </div>
          </div>
          <div>
            <p>Application</p> <h2>{repo.name}</h2>
            <button> set a plan</button>
            <p>{repo.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default RepoDetails;
