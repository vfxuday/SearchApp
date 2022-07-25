import React from "react";
import Pubcard from "../component/Pubcard";
import { Pubdata } from "../Pubdata";
import { Link, useParams, Navigate } from "react-router-dom";
import TitleSearch from "../component/TitleSearch";
function Searched() {
  let params = useParams();
  const filtered = Pubdata.filter((item) => {
    return Object.values(item)
      .join("")
      .toLowerCase()
      .includes(params.search.toLowerCase());
  });

  if (filtered?.length > 0) {
    return (
      <div>
        <TitleSearch />
        <Pubcard pubdata={filtered} />
      </div>
    );
  } else {
    return (
      <>
        <TitleSearch />
        <h3 className="mt-4"> No match found</h3>
      </>
    );
  }
}

export default Searched;
