import React from "react";
import { Routes, Route } from "react-router-dom";

import Button from "../Types/Button";
function RouteConfig() {
  return (
    <>
      <Routes>
        <Route path=":type/:id" element={<Button />} />
      </Routes>
    </>
  );
}
export default RouteConfig;
