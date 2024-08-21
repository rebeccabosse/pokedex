import React from "react";
import { Routes, Route } from "react-router-dom";

import Button from "../Types/Button";
import PageType from "../Types/PageType";
import Home from "../Home";
function RouteConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type" element={<PageType />} />
      </Routes>
    </>
  );
}
export default RouteConfig;
