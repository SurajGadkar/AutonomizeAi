import React, { useState } from "react";
import { getUsersfromGithub } from "../../api/api";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    getUsersfromGithub(input)
      .then((res) => {
        if (res) {
          navigate(`/repositories/${input}`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your github username"
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default Search;
