import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Backbtn from "../components/Backbtn";
import Spinner from "../components/Spinner";
function ShowBook() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/api/v1/books/${id}`,{
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, // Add token here
      })
      .then((res) => {
        setBook(res.data);
        console.log(book);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4 ">
      <Backbtn />
      <h1 className="text-3xl my-4 text-sky-900">Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-900 rounded-xl w-full p-4 mt-2 font-mono capitalize text-blue-950">
          <div className="my-4">
            <span className="text-xl mr-4 text-blue-900">Id :</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-blue-900">Title :</span>
            <span>"{book.title}"</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-blue-900">Author :</span>
            <span>"{book.author}"</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-blue-900">publishYear :</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-blue-900">Created date :</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-blue-900">Updated date :</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowBook;
