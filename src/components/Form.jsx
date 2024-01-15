import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState("");

  const navigate = useNavigate();

  function fetchData() {
    axios
      .get("https://659efd125023b02bfe8929a0.mockapi.io/Fakebooks")
      .then((res) => setData(res.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://659efd125023b02bfe8929a0.mockapi.io/Fakebooks/${id}`)
      .then(() => {
        fetchData();
      });
  };

  const handleEdit = (id, title, author) => {
    localStorage.setItem("id", id);
    localStorage.setItem("title", title);
    localStorage.setItem("author", author);
    navigate("/edit");
  };

  const handleDetail = (id, title, author, image) => {
    localStorage.setItem("id", id);
    localStorage.setItem("title", title);
    localStorage.setItem("author", author);
    localStorage.setItem("image", image);
    navigate(`/book/:${id}`);
  };
  const Search = data.filter((item) => {
    return item.author.toLowerCase().includes(info.toLowerCase());
  });
  return (
    <div
      style={{
        backgroundColor: "darkcyan",
        height: "100vw",
        overflow: "hidden",
      }}
    >
      <center>
        <h2>SEARCH BY AUTHOR</h2>
        <br />
        <input
          type="text"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          style={{
            border: "2px solid black",
            borderRadius: "0.3rem",
            color: "gold",
            height: "2vw",
            paddingLeft: "10px",
            width: "16vw",
          }}
        />
        <br />
        <br />
        <Link to="/add">
          <button
            style={{
              width: "10vw",
              height: "3vw",
              borderRadius: "0.3rem",
              backgroundColor: "red",
              color: "white",
            }}
          >
            ADD YOUR BOOK
          </button>
        </Link>
      </center>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {Search.map((item) => {
          return (
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
                  <h2>{item.title}</h2>
                </div>
                <div>
                  <h3>{item.author}</h3>
                </div>
                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: "18vw",
                    height: "18vw",
                    borderRadius: "0.3rem",
                  }}
                />
                <br />
                <div>
                  <button
                    onClick={() => handleEdit(item.id, item.title, item.author)}
                    style={{
                      width: "5vw",
                      height: "3vw",
                      borderRadius: "0.3rem",
                      backgroundColor: "green",
                      color: "white",
                    }}
                  >
                    Edit
                  </button>
                  &nbsp;&nbsp;
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{
                      width: "5vw",
                      height: "3vw",
                      borderRadius: "0.3rem",
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    Delete
                  </button>
                  &nbsp;&nbsp;
                  <button
                    onClick={() =>
                      handleDetail(item.id, item.title, item.author, item.image)
                    }
                    style={{
                      width: "5vw",
                      height: "3vw",
                      borderRadius: "0.3rem",
                      backgroundColor: "blue",
                      color: "white",
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Form;
