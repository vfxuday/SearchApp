import React from "react";
import Pubcard from "../component/Pubcard";
import TitleSearch from "../component/TitleSearch";
import { Pubdata } from "../Pubdata";

function Home() {
  const filtered = Pubdata.filter((item) => {
    return item.recent === true;
  });
  return (
    <>
      <TitleSearch />
      <h3 className="mx-3">Recent Added</h3>
      <Pubcard pubdata={filtered} />
    </>
  );
}

export default Home;
