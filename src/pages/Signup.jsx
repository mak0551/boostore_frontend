import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://bookstore-backend-t7gr.onrender.com/api/v1/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert("Signup successful!");
        // window.location.href = "/signin"; // Navigate to the signin page
        navigate("/signin"); // Navigate to the signin page
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("Error during signup");
    }
  };

  return (
    <div className="flex w-[100%] h-[100vh] bg-zinc-100 justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border border-[1.5px] border-zinc-400 bg-white flex flex-col p-12 max-md:p-4 max-md:py-16 rounded-xl items-center justify-center"
      >
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          className="border-[1px] border-zinc-500 bg-zinc-200 font-mono px-2 my-0.5 rounded-mg h-10 w-[280px]"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          className="border-[1px] border-zinc-500 bg-zinc-200 font-mono px-2 my-0.5 rounded-mg h-10 w-[280px]"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border-[1px] border-zinc-500 bg-zinc-200 font-mono px-2 my-0.5 rounded-mg h-10 w-[280px]"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-[1px] border-zinc-500 bg-zinc-200 font-mono px-2 my-0.5 rounded-mg h-10 w-[280px]"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="my-5 bg-blue-400 hover:bg-blue-500 text-white font-mono font-medium py-2 px-4 w-[280px] rounded-md tracking-tighter"
        >
          Sign up
        </button>
        <span className="font-mono tracking-tighter	">
          already have an account?{" "}
          <Link to={"/signin"} className="text-red-900">
            SignIn
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Signup;
