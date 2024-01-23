import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { useLocation } from "react-router-dom";

function Followers() {
  const location = useLocation();
  const url = location.state.followersURL;

  useEffect(() => {
    getFollowers();
  }, []);

  const getFollowers = async () => {
    try {
      await axios
        .get(url)
        .then((res) => (res = res.data))
        .then((data) => console.log(data));
    } catch (err) {
      console.log(err);
    }
  };
  return <div>Followers</div>;
}

export default Followers;
