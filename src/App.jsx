import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Details from "./components/Details";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/book/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
