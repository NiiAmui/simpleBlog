"use client";
import React, { useState } from "react";
import HeroImage from "@/public/blogHero.jpg";
import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";

function Auth() {
  const [currentView, setcurrentView] = useState(false);

  return (
    <div className="Authentication flex min-h-screen">
      {/* Form which has the login or registration details */}
      <section className="leftContainer  flex flex-col mt-[7%] mb-[10%] items-center w-full lg:w-[40%] lg:pl-[15px]">
        <p>Some Logo</p>

        {/* the toggler between login and register */}
        <div
          onClick={() => setcurrentView((prev) => !prev)}
          className="selectorContainer w-[300px] rounded-[5px] flex justify-between bg-gray-200 p-2 relative mt-10"
        >
          <button
            className={`h-[47px] w-[142px] font-medium z-10 rounded-[5px] bg-white text-gray-700  transition-all duration-500 ease-in-out ${
              currentView && " translate-x-[100%]"
            }`}
          >
            {!currentView && (
              <p className="transition-all delay-300">Sign In</p>
            )}
            {currentView && <p className="transition-all delay-500">Sign Up</p>}
          </button>
          {/* Sign in Text */}
          <p className=" absolute top-[33%] left-8 font-medium text-gray-400 cursor-pointer">
            Sign In
          </p>
          {/* Sign Up Text */}
          <p className=" absolute top-[33%] font-medium right-8 text-gray-400 cursor-pointer">
            Sign Up
          </p>
        </div>
        {/* authentication forms */}
        <div className="mt-5 w-[70%] transition-all duration-500 ease-in-out">
          {!currentView && <LoginForm />}
          {currentView && <RegisterForm />}
        </div>
      </section>

      {/* Hero section which has the hero images */}
      <section className="rightContainer flex-col justify-center sticky top-0 h-screen hidden lg:flex w-full">
        {/* <img src={HeroImage} alt="" className="w-[377px]" /> */}
        <Image
          src={HeroImage}
          className="min-h-[100%] bg-cover"
          alt="heroImage"
        />
      </section>
    </div>
  );
}

export default Auth;
