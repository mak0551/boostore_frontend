import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
export default function Bookmodel({ item, onclose }) {
  return (
    <div
      className="fixed bg-black bg-opacity-10 top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center"
      onClick={onclose}
    >
      <div
        className="w-[600px] max-w-full h-fit bg-white rounded-xl p-4 flex flex-col relative"
        onClick={(event) => event.stopPropagation()}
      >
        {" "}
        {/*ye stoppropagation kya karta boletoh ab ek parent elem k upper child elem rehta na ab dono mein onclick event hai child ku click kare toh parent element ka onclick event b uss ka kaam karta ab child k upper click kare toh khali child ka onclick event work karna bolteh stoppropagation use karna  */}
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-blue-900 cursor-pointer"
          onClick={onclose}
        />
        <h2 className="w-fit px-4 py-1 bg-blue-500 text-white rounded-lg">
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
        <p className="text-blue-950 font-mono">
          Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Possimus voluptates nostrum magni quod quibusdam
          laudantium quam praesentium ipsum natus totam veniam explicabo,
          perferendis harum ipsam deleniti eligendi, accusantium sunt corrupti
          quas esse impedit minima. Provident necessitatibus, eius deserunt
          dolores modi enim possimus voluptatum corrupti!.
        </p>
      </div>
    </div>
  );
}
