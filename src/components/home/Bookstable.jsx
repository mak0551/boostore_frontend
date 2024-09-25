import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

function Bookstable({ books }) {
  return (
    <table className="w-full border-seperate border-spacing-2 ">
      <thead>
        <tr className="text-blue-950 text-xl">
          <th className="border border-slate-600 rounded-md font-mono">No</th>
          <th className="border border-slate-600 rounded-md font-mono">
            Title
          </th>
          <th className="border border-slate-600 rounded-full max-md:hidden font-mono">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden font-mono">
            Publish Year
          </th>
          <th className="border border-slate-600 rounded-md font-mono">
            Operations
          </th>
        </tr>
      </thead>
      <tbody className="text-sky-800 ">
        {books.map((book, index) => (
          <tr key={book._id} className="h-8 font-mono font-semibold capitalize">
            <td className="border border-slate-600 rounded-md text-center font-bold">
              {index + 1}
            </td>
            <td className="border border-slate-600 rounded-md text-center">
              {book.title}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.author}
            </td>
            <td className="border border-slate-600 rounded-md text-center max-md:hidden">
              {book.publishYear}
            </td>
            <td className="border border-slate-600 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-green-800 text-2xl" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-yellow-800 text-2xl" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-red-800 text-2xl" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Bookstable;
