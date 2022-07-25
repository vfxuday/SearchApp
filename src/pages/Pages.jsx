import React from "react";
import Home from "./Home";
import Congress from "./Congress";
import Searched from "./Searched";
import Detailspage from "./Detailspage";
import Navigation from "../component/Navigation";
import { Route, Routes, Navigate } from "react-router-dom";

function Pages() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Congress />} />
        <Route path="/:name/:id" element={<Detailspage />} />
        <Route path="/searched/:search" element={<Searched />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default Pages;
