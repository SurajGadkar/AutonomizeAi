import React, { useState, useEffect } from "react";
import { getRepositoryList } from "../api/api";

function RepositoriesList() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepositoryList()
      .then((res) => (res = res.slice(0, 15)))
      .then((res) => setRepos(res));
  }, []);
  //console.log(repos);
  return <div>RepositoriesList</div>;
}

export default RepositoriesList;
