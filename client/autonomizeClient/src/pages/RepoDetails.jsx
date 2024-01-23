import React, { useState, useEffect } from "react";
import { getRepoById } from "../api/api";
import { useLocation } from "react-router-dom";

function RepoDetails({}) {
  const location = useLocation();

  const [repo, setRepo] = useState(location.state.data);
  //console.log(repo);

  return (
    <div>
      <h1> Repo Details</h1>
      <h2>{repo.description}</h2>
    </div>
  );
}

export default RepoDetails;
