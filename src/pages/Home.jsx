import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import Bookscard from "../components/home/Bookscard";
import Bookstable from "../components/home/Bookstable";
const Home = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]); // isku initially [] array bolna kyuki phir books ku map karre na toh array hona padhta
  const [loading, setLoading] = useState(false);
  const [showtype, setshowtype] = useState("table");
  useEffect(() => {
    setLoading(true);

    const token = localStorage.getItem("token"); //retrieve the token
    console.log(token);
    if (!token) {
      navigate("/signin");
      return;
    }

    //   // Fetch protected data from the server
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch("http://localhost:3000/api/v1/books", {
    //         method: "GET",
    //         headers: {
    //           Authorization: `Bearer ${token}`, // Include the token
    //           "Content-Type": "application/json",
    //         },
    //       });

    //       if (!response.ok) {
    //         // Handle errors (e.g., invalid token)
    //         throw new Error("Failed to fetch data");
    //       }

    //       const result = await response.json();
    //       setBooks(result);
    //       setLoading(false);
    //       // setData(result); // Set the fetched data in the state
    //     } catch (error) {
    //       alert(error.message);
    //       navigate("/signin"); // Redirect to signin if there's an error
    //     }
    //   };

    //   fetchData();
    // }, [navigate]);

    axios("https://bookstore-backend-t7gr.onrender.com/api/v1/books", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // console.log(res, "hello");
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(err.message); // navigate("/signin"); // Redirect to signin if there's an error
      });
  }, []);
  return (
    <div className="p-4 h-[100vh] w-full bg-zinc-100 ">
      <div className="flex justify-center items-center gap-1">
        <button
          className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-1 rounded-lg"
          onClick={() => setshowtype("table")}
        >
          Table
        </button>
        <button
          className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-1 rounded-lg"
          onClick={() => setshowtype("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8 font-mono font-medium text-sky-900">
          Books List
        </h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showtype === "table" ? (
        <Bookstable books={books} />
      ) : (
        <Bookscard books={books} />
      )}
    </div>
  );
};

export default Home;
