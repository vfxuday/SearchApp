import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <>
      <form onSubmit={submitHandler} className="col-3">
        <div className="input-group mb-3 mt-4">
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type author name or congress name"
          />
        </div>
      </form>
    </>
  );
}

export default Search;
