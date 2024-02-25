import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [formData, setformData] = useState({});
  const [errorMessage, seterrorMessage] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    // console.log(e.target.value);
    setformData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return seterrorMessage("please fill out all the fields");
    }
    try {
      setloading(true);
      seterrorMessage(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        seterrorMessage(data.message);
      }
      setloading(false);
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      seterrorMessage(error.message);
      setloading(false);
    }
  };

  console.log(formData);
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
            this is a demo project. you can signin with your email and password
            or with the google
          </p>
        </div>

        {/* right side */}
        <div className=" flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <Label value="your Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value="your Password" />
              <TextInput
                type="password"
                placeholder=""
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              gradientDuoTone="purpleToPink"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className=" pl-3">Loading...</span>
                </>
              ) : (
                "sign up"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Dont have a account? </span>
            <Link to="/signup" className=" text-blue-500">
              Sign up
            </Link>
          </div>
          {errorMessage && (
            <Alert className=" mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
