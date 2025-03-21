import React from "react";
import Header from "@/components/resume/header.tsx";
import Advantage from "@/components/resume/advantage.tsx";
import Experiences from "@/components/resume/experiences.tsx";

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
