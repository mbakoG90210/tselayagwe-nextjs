import React from "react";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Header({ }: Props) {
  return (
    <header>
      <div className="hero min-h-screen bg-accent">
        <BackgroundCircles />
        <div className="hero-content text-center">
          <div className="max-w-md z-20">
            <h1 className="text-5xl font-bold text-gray-100">
              INVEST IN THE FARM VALUE CHAIN
            </h1>
            <h3 className="my-5 text-3xl font-bold text-gray-100">
              Tselayagwe Agro-Industrial Network
            </h3>
            <button className="btn btn-primary mt-4">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
