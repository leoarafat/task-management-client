import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: "url('hero-image.jpg')", // Replace with your image URL
      }}
    >
      <div className="flex flex-col h-full justify-center items-center text-center bg-gray-900 bg-opacity-50">
        <h1 className="text-5xl text-white font-serif font-extrabold mb-4">
          Welcome to
        </h1>
        <h2 className="text-6xl text-blue-500 font-serif font-extrabold mb-6">
          Task Manager Application
        </h2>
        <p className="text-xl text-white mb-8">
          Your updated description goes here.
        </p>
        <Link
          href="/board"
          className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
