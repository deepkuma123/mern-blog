import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className=" min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side */}

        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className=" px-2 py-1 rounded-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Sahand's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5 font-semibold">
            this is a demo project. you can signup with your email and password
            or with the google
          </p>
        </div>

        {/* right side */}
        <div className=" flex-1">

        <form className="flex flex-col gap-4">
          <div className="">
            <Label value="your username" />
            <TextInput type="text" placeholder="" id="username" />
          </div>
          <div className="">
            <Label value="your Email" />
            <TextInput type="email" placeholder="name@company.com" id="username" />
          </div>
          <div className="">
            <Label value="your Password" />
            <TextInput type="password" placeholder="" id="username" />
            </div>
            <Button type="submit" gradientDuoTone='purpleToPink' >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account? </span>
            <Link to='/signin' className=" text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
