import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import FollowerComp from "../component/FollowerComp/FollowerComp";

function Followers() {
  const location = useLocation();
  const url = location.state.followersURL;

  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    getFollowers();
  }, []);

  //console.log(followers);
  const getFollowers = async () => {
    try {
      await axios
        .get(url)
        .then((res) => (res = res.data))
        .then((data) => setFollowers(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {" "}
      {followers.length > 0 && (
        <div>
          {followers.map((user) => {
            return (
              <FollowerComp
                key={user.id}
                name={user.login}
                image={user.avatar_url}
                user={user}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Followers;
