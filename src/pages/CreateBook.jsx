import { React, useState } from "react";
import Backbtn from "../components/Backbtn";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateBook() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token"); //retrieve the token
    // console.log(token);
    if (!token) {
      navigate("/signin");
      return;
    }
  const handleBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios
      .post("http://localhost:3000/api/v1/books", data,{
        headers: {
          Authorization: `Bearer ${token}`  // Add token here
        }
      })
      .then(() => {
        setLoading(false);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        alert('enter valid information');
        setLoading(false);
      });
  };
  return (
    <div className="p-4">
      <Backbtn />
      <h1 className="text-3xl my-4 text-sky-900">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-700 rounded-xl w-[600px] p-4 mx-auto font-mono capitalize">
        <div className="my-4">
          <label className="text-xl mr-4 text-blue-950">title</label>
          <input
            type="text"
            value={title} //value matlab input box mein ya jo likhewa hai wo dikhata ab title khali hai toh kuch nai aata
            onChange={(e) => setTitle(e.target.value)} //This is an event handler that listens for changes in the input field. When the user types something, the onChange event is triggered. ab input mein kuch b likho wo sidha title mein chalejata
            className="border-2 border-gray-300 px-4 py-2 w-full rounded-lg"
          />
          <label className="text-xl mr-4 text-blue-950">author</label>
          <input
            type="text"
            value={author} //value matlab input box mein ya jo likhewa hai wo dikhata ab title khali hai toh kuch nai aata
            onChange={(e) => setAuthor(e.target.value)} //This is an event handler that listens for changes in the input field. When the user types something, the onChange event is triggered. ab input mein kuch b likho wo sidha title mein chalejata
            className="border-2 border-gray-300 px-4 py-2 w-full rounded-lg"
          />
          <label className="text-xl mr-4 text-blue-950">publish year</label>
          <input
            type="number"
            value={publishYear} //value matlab input box mein ya jo likhewa hai wo dikhata ab title khali hai toh kuch nai aata
            onChange={(e) => setPublishYear(e.target.value)} //This is an event handler that listens for changes in the input field. When the user types something, the onChange event is triggered. ab input mein kuch b likho wo sidha title mein chalejata
            className="border-2 border-gray-300 px-4 py-2 w-full rounded-lg"
          />
          <button className="p-2 mt-2 rounded-lg bg-sky-600 text-white font-semibold capitalize" onClick={handleBook}>create book</button>
        </div>
      </div>
    </div>
  );
}

export default CreateBook;
