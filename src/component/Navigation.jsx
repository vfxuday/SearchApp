import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Pubdata } from "../Pubdata";
import Hamburger from "hamburger-react";

function Navigation() {
  const unique = [...new Set(Pubdata.map((item) => item.congressName))];

  const [isOpen, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(false);
  };

  return (
    <>
      <div className="mainNav">
        <div className="logoText">
          <NavLink to={"/"}>
            COMPANY<span>UKG</span>
          </NavLink>
        </div>
        <Hamburger className="ham" toggled={isOpen} toggle={setOpen} />
        <div
          className="hambarger"
          style={isOpen ? { right: "0%" } : { right: "-40%" }}
        >
          <ul className="list">
            <li>
              <NavLink to={"/"} onClick={handleClick}>
                <h3>Home</h3>
              </NavLink>
            </li>
            {unique.map((item, i) => (
              <li key={1 + i} onClick={handleClick}>
                <NavLink to={"/" + item.toLowerCase()}>
                  <h3>{item}</h3>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navigation;
