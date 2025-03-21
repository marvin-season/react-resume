import React from "react";
import experiences from "@/components/resume/storage/experiences.ts";

export default function Experiences() {
  return (
    <>
      {experiences.map((experience, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-2xl font-semibold">{experience.title}</h3>
          <h4 className="text-xl text-gray-600">{experience.company}</h4>
          <p className="text-gray-500 mb-4">{experience.date}</p>
          {experience.projects.map((project, idx) => (
            <div key={idx} className="mb-6">
              <h4 className="text-xl font-semibold">{project.name}</h4>
              <p className="text-gray-700">{project.description}</p>
              <ul className="list-disc pl-5 mt-2">
                {project.responsibilities.map((responsibility, i) => (
                  <li key={i} className="text-gray-700">
                    <strong>{responsibility.area}:</strong>
                    <ul className="mt-2 pl-4 space-y-1">
                      {responsibility.stack.map((stack, j) => (
                        <li key={j} className="text-gray-600">
                          {stack}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-2 pl-4 space-y-1">
                      {responsibility.tasks.map((task, k) => (
                        <li key={k} className="text-gray-600">
                          {"task"}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
