import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState({
    image: "",
  });
  const navigate = useNavigate();
  const urlregex = /^(ftp|http|https):\/\/[^ "]+$/;

  const handlePost = (e) => {
    e.preventDefault();
    axios
      .post("https://659efd125023b02bfe8929a0.mockapi.io/Fakebooks", {
        author: author,
        title: title,
        image: image,
      })
      .then(() => {
        alert("Your Book Added Sucessfully");
        navigate("/");
      });
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (title && author && image !== undefined) {
      if (image === undefined) {
        setError((error) => ({
          ...error,
          image: "* paste your image url",
        }));
      } else if (!urlregex.test(image)) {
        setError((error) => ({
          ...error,
          image: "* paste a valid image url",
        }));
      } else {
        setError((error) => ({ ...error, image: "" }));
        handlePost(e);
      }
    }
  };
  return (
    <div
      style={{
        backgroundColor: "darkcyan",
        height: "50vw",
        overflow: "hidden",
      }}
    >
      <center>
        <h1>ADD YOUR FAVOURITE BOOK</h1>
        <form onSubmit={(e) => handleForm(e)}>
          <br />
          <label>TITLE</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              border: "2px solid black",
              borderRadius: "0.3rem",
              height: "2vw",
              fontSize: "large",
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
            required
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
          <label>Image URL</label>
          <br />
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
          {error.image && <span style={{ color: "red" }}>{error.image}</span>}
          <br />
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
            ADD BOOK
          </button>
          &nbsp;&nbsp;
          <Link to="/">
            <button
              type="submit"
              style={{
                width: "8vw",
                height: "3vw",
                borderRadius: "0.3rem",
                backgroundColor: "red",
                color: "white",
              }}
            >
              HOME
            </button>
          </Link>
        </form>
      </center>
    </div>
  );
};
export default Add;
