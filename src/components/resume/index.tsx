import React from "react";
import Header from "@/components/resume/header.tsx";
import Advantage from "@/components/resume/advantage.tsx";
import Experiences from "@/components/resume/experiences.tsx";
import PersonalCharacteristics from "@/components/resume/personalCharacteristic.tsx";
import BaseInfo from "@/components/resume/baseinfo.tsx";

const Resume = () => {
  return (
    <div className="m-4 max-w-4xl mx-auto py-6 px-16 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <Header/>
      <BaseInfo/>
      <Advantage/>
      <Experiences/>
      <PersonalCharacteristics/>
    </div>
  );
};

export default Resume;
