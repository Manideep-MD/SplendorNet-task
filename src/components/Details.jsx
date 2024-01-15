import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Details = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setAuthor(localStorage.getItem("author"));
    setTitle(localStorage.getItem("title"));
    setImage(localStorage.getItem("image"));
  }, []);
  return (
    <center
      style={{
        backgroundColor: "darkcyan",
        height: "50vw",
        overflow: "hidden",
      }}
    >
      <h1>BOOK DETAILS</h1>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "22vw",
            height: "37vw",
            border: "2px solid black",
            margin: "13px",
            justifyContent: "center",
            backgroundColor: "papayawhip",
            alignItems: "center",
            borderRadius: "0.3rem",
            boxShadow: "4px 4px 4px 4px",
          }}
        >
          <div>
            <h2>{title}</h2>
          </div>
          <div>
            <h3>{author}</h3>
          </div>
          <img src={image} style={{ width: "18vw", height: "18vw" }} alt="" />
          <br />
          <br />
          <Link to="/">
            <button
              style={{
                width: "8vw",
                height: "3vw",
                borderRadius: "0.3rem",
                backgroundColor: "red",
                color: "white",
              }}
            >
              BACK
            </button>
          </Link>
        </div>
      </div>
    </center>
  );
};
export default Details;
