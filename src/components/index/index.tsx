import React from "react";
import Header from "@/components/index/header.tsx";
import Advantage from "@/components/index/advantage.tsx";
import Experiences from "@/components/index/experiences.tsx";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Header/>
      <Advantage/>
      <Experiences/>
    </div>
  );
};

export default Resume;
