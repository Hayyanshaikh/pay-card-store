import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

const Home = () => {
  return <h1 className="text-3xl font-bold underline">Hello world! new diractory</h1>;
};

export default Home;
