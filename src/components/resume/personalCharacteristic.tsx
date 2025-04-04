import React from "react";
import { personalCharacteristics } from "@/components/resume/storage";

export default function PersonalCharacteristics() {
  return <>

    <h2 className="text-2xl font-semibold text-blue-500 mb-4">
      🤩 {personalCharacteristics.title}
    </h2>
    <div className={"mb-6 p-4 bg-card rounded-lg hover-transition"}>
      {
        personalCharacteristics.items.map((person, index) => (
          <div key={index} className={"text-gray-500 text-sm"}>
            {person}
          </div>
        ))
      }
    </div>
  </>
}