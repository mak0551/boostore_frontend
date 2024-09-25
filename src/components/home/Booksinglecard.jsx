import { React, useState } from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import Bookmodel from "./Bookmodel";

export default function Booksinglecard({ item }) {
  const [showmodel, setShowmodel] = useState(false);
  return (
    <div className="border-2 border-blue-900 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-blue-500 font-medium text-white rounded-lg">
        {item.publishYear}
      </h2>
      <h4 className="my-2 text-blue-900 font-mono">{item._id}</h4>
      <div className="flex justify-start items-center gap-2 ">
        <PiBookOpenTextLight className="text-2xl text-orange-900" />
        <h2 className="my-1 text-blue-900 font-mono capitalize">{item.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-2">
        <BiUserCircle className="text-sky-950 text-2xl " />
        <h2 className="my-1 text-sky-950 capitalize font-mono">'{item.author}'</h2>
      </div>
      <div className="flex justify-between items-center gap=2 mt-4 p-4">
        <BiShow
          className="text-3xl text-sky-800 hover:text-black   cursor-pointer"
          onClick={() => setShowmodel(!showmodel)}
        />
        <Link to={`/books/details/${item._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${item._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-800 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${item._id}`}>
          <MdOutlineDelete className="text-2xl text-red-800 hover:text-black" />
        </Link>
      </div>
      {showmodel ? (
        <Bookmodel item={item} onclose={() => setShowmodel(false)} />
      ) : (
        ""
      )}
    </div>
  );
}
