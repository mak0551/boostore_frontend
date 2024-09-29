import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

function Signin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    // or another way
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://bookstore-backend-t7gr.onrender.com/api/v1/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                alert('Signin successful!');
                // Store JWT token in localStorage (or sessionStorage)
                localStorage.setItem('token', result.token);
                console.log(result.token)
                // Navigate to the homepage or dashboard after signin
                navigate('/home')
            } else {
                alert(result.message);
            }
        } catch (error) {
            alert('Error during signin');
        }
    };
  return (
    <div className="flex w-[100%] h-[100vh] bg-zinc-100 justify-center items-center">
        <form onSubmit={handleSubmit} className="border border-[1.5px] border-zinc-400 bg-white flex flex-col p-12 max-md:p-2 max-md:py-16 rounded-xl items-center justify-center">
          <input
            type="email"
            name="email"
            placeholder="Email or username"
            onChange={handleChange} required
            className="border-[1px] border-zinc-500 bg-zinc-200 font-mono px-2 my-1 rounded-mg h-10 w-[300px]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange} required
            className="border-[1px] border-zinc-500 bg-zinc-200 font-mono px-2 my-1 rounded-mg h-10 w-[300px]"
          />
          <button
            type="submit"
            className="my-5 bg-blue-400 hover:bg-blue-500 text-white font-mono font-medium py-2 px-4 w-[300px] rounded-md"
          >
            Login
          </button>
          <span className="font-mono tracking-tighter	">
            Don't have an account?{" "}
            <Link to={"/"} className="text-red-900">
              Signup
            </Link>
          </span>
        </form>
    </div>
  );
}

export default Signin;
