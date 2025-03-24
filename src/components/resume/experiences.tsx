import React from "react";
import experiences from "@/components/resume/storage/experiences.ts";

export default function Experiences() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">
        🤵🏻 {experiences.title}
      </h2>
      {experiences.items.map((experience, index) => <>
        <div className="text-xl font-bold text-gray-700 flex gap-2">
          <span>{experience.company}</span>
          <span>✨</span>
        </div>
        <div key={index} className="draw-container mb-6 mt-2 p-4 bg-card rounded-lg">
          <div className={"flex justify-between"}>
            <div>
              <span className="text-gray-500">{experience.title}</span>
            </div>
            <span className="text-gray-500">{experience.date}</span>
          </div>
          <div className={"draw-body"}>
            {experience.projects.map((project, idx) => (
              <div key={idx} className="mb-6">
                <div className={"flex gap-2 items-center"}>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-gray-500">{project.description}</p>
                </div>
                <div className="mt-2">
                  {project.responsibilities.map((responsibility, i) => (
                    <div key={i} className="pt-2 pl-4 text-gray-700">
                      <strong className={"text-[17px]"}>{responsibility.area}:</strong>
                      {responsibility.stack.map((stack, j) => (
                        <div key={j} className="text-link text-sm">
                          {stack}
                        </div>
                      ))}
                      <div className="mt-2 space-y-1">
                        {responsibility.tasks.map((task, k) => (
                          <div key={k} className="text-gray-600 ml-8">
                            {typeof task === "string" ? (
                              task
                            ) : (
                              <div className={"mb-4 pt-2"}>
                                <div className={"font-bold"}>{task.feature}</div>
                                <div className={"mb-3 pt-1"}>
                                  {task.details.map((detail, i) => (
                                    <div key={i} className={"text-sm"}>
                                      {detail}
                                    </div>
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
        </div>
      </>)}
    </>
  );
}
