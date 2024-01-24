import axios from "axios";

const url = "https://api.github.com";

export const getUsersfromGithub = async (username) => {
  try {
    return await axios
      .get(`${url}/users/${username}`)
      .then((res) => (res = res.data));
  } catch (err) {
    console.log("Try with a different user ", err.message);
    alert("Try with a different user ", err.message);
  }
};

export const getRepoDatabyUsername = async (username) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

export const getRepositoryList = async () => {
  try {
    return await axios
      .get(`${url}/repositories`)
      .then((res) => (res = res.data));
  } catch (err) {
    console.log(err);
  }
};

export const getAllRepoByUsername = async (username) => {
  if (!username) {
    console.log("No Username provided...");
    return;
  }

  const urlString = `${url}/users/${username}/repos`;

  try {
    //returns an array
    return await axios.get(urlString).then((res) => (res = res.data));
  } catch (err) {
    console.log(err);
  }
};

export const getRepoById = (repoId) => {
  return repos.filter((repo) => repo.id === repoId);
};
