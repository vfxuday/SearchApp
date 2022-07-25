import React from "react";
import Search from "./Search";

function TitleSearch() {
  return (
    <div className="homediv">
      <div className="welcometxt">
        <h1 className="text-center" style={{ fontWeight: "bold" }}>
          Welcome to the Testing <br />
          UKG Knowledge Center
        </h1>
      </div>
      <Search />
    </div>
  );
}

export default TitleSearch;
