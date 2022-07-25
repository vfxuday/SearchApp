import React from "react";
import Pubcard from "../component/Pubcard";
import { Pubdata } from "../Pubdata";
import { Link, useParams, Navigate } from "react-router-dom";
import TitleSearch from "../component/TitleSearch";
function Congress() {
  let params = useParams();

  const filtered = Pubdata.filter((item) => {
    return item.congressName.toLowerCase() === params.name;
  });

  if (filtered?.length > 0) {
    return (
      <div>
        <TitleSearch />
        <Pubcard pubdata={filtered} />
      </div>
    );
  } else {
    return <Navigate to="/" replace />;
  }
}

export default Congress;
