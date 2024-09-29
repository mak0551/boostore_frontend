import { React, useState, useEffect } from "react";
import Backbtn from "../components/Backbtn";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function DeleteBook() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const deleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://bookstore-backend-t7gr.onrender.com/api/v1/books/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, // Add token here
      })
      .then(() => {
        setLoading(false);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        alert("unauthorised");
        alert(err.message);
        setLoading(false);
      });
  };
  return (
    <div className="p-4">
      <Backbtn />
      <h1 className="text-3xl my-4 font-mono capitalize text-sky-900">
        delete book
      </h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-700 rounded-xl mx-auto p-8 w-[600px]">
        <h1 className="capitalize text-blue-950 font-semibold">
          are you sure you want to delete this book?
        </h1>
        <button
          className="text-white bg-red-600 mt-4 p-4 rounded-xl capitalize font-semibold "
          onClick={deleteBook}
        >
          yes delete it
        </button>
      </div>
    </div>
  );
}

export default DeleteBook;
