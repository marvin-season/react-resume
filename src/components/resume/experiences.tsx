import React from "react";
import experiences from "@/components/resume/storage/experiences.ts";

export default function Experiences() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">
        {experiences.title}
      </h2>
      {experiences.items.map((experience, index) => (
        <div key={index} className="mb-6 p-4 bg-card rounded-lg">
          <div className={"flex justify-between"}>
            <p>
              <span className="text-xl font-semibold">{experience.title}</span>
              <span className="text-xl text-gray-600">
                {experience.company}
              </span>
            </p>
            <span className="text-gray-500 mb-4">{experience.date}</span>
          </div>

          {experience.projects.map((project, idx) => (
            <div key={idx} className="mb-6">
              <h4 className="text-xl font-semibold">{project.name}</h4>
              <p className="text-gray-700">{project.description}</p>
              <div className="list-disc pl-5 mt-2">
                {project.responsibilities.map((responsibility, i) => (
                  <div key={i} className="text-gray-700">
                    <strong>{responsibility.area}:</strong>
                    <div className="mt-2 pl-4 space-y-1">
                      {responsibility.stack.map((stack, j) => (
                        <div key={j} className="text-gray-600">
                          {stack}
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 pl-4 space-y-1">
                      {responsibility.tasks.map((task, k) => (
                        <div key={k} className="text-gray-600">
                          {typeof task === "string" ? (
                            task
                          ) : (
                            <div>
                              <div className={"font-bold"}>
                                {task.feature}
                              </div>
                              <div>
                                {task.details.map((detail, i) => (
                                  <div key={i} className={"text-sm"}>{detail}</div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
