import React from "react";
import Checkbox from "./checkbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import  Sign  from "../../hooks/Usesignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const {loading,signin}=Sign();
  const handleCheck=(gender)=>{
        setInputs({...inputs,gender});
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
   await signin(inputs);
}


  return (
    <div className="flex justify-center items-center min-w-80 mx-auto">
      <div className="w-full p-6 rounded-lg text-white shadow-md bg-clip-padding  backdrop-filter backdrop-blur-lg bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          Sign Up
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="john due"
              required
              className="w-full input input-bordered h-10 bg-gray-800"
              value={inputs.fullName}
                onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
                value={inputs.username}
                required
                autoComplete="new-username"
                onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })}
              className="w-full input input-bordered h-10 bg-gray-800"
            />
          </div>
          <Checkbox onCheckboxChange={handleCheck} selectedgender={inputs.gender} />

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
                value={inputs.password}
                required
                autoComplete="new-password"
                onChange={(e) =>  
                setInputs({ ...inputs, password: e.target.value })}
              className="w-full input input-bordered h-10 bg-gray-800"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              required
              autoComplete="new-password"
              placeholder="Confirm  password"
                value={inputs.confirmPassword}
                onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              className="w-full input input-bordered h-10 bg-gray-800"
            />
          </div>

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-3 text-black inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-soft btn-md mt-2 ">
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-b-2 rounded-full border-blue-500"
                  viewBox="0 0 24 24"
                ></svg>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
