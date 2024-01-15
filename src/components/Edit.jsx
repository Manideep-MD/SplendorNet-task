import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(`https://659efd125023b02bfe8929a0.mockapi.io/Fakebooks/${id}`, {
        title: title,
        author: author,
      })
      .then(() => {
        alert("Book Updated Sucessfully");
        navigate("/");
      });
  };

  useEffect(() => {
    setAuthor(localStorage.getItem("author"));
    setTitle(localStorage.getItem("title"));
    setId(localStorage.getItem("id"));
  }, []);
  return (
    <div
      style={{
        backgroundColor: "darkcyan",
        height: "50vw",
        overflow: "hidden",
      }}
    >
      <center>
        <h1>EDIT YOUR BOOK</h1>
        <form onSubmit={(e) => handleEdit(e)}>
          <br />
          <label>TITLE</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              border: "2px solid black",
              borderRadius: "0.3rem",
              fontSize: "large",
              height: "2vw",
              paddingLeft: "10px",
              width: "16vw",
            }}
          />
          <br />
          <br />
          <br />
          <label>AUTHOR</label>
          <br />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{
              border: "2px solid black",
              borderRadius: "0.3rem",
              fontSize: "large",
              height: "2vw",
              paddingLeft: "10px",
              width: "16vw",
            }}
          />
          <br />
          <br />
          <button
            type="submit"
            style={{
              width: "8vw",
              height: "3vw",
              borderRadius: "0.3rem",
              backgroundColor: "gold",
              color: "black",
            }}
          >
            Update
          </button>
        </form>
      </center>
    </div>
  );
};
export default Edit;
