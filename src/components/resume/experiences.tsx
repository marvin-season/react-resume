import React from "react";
import experiences from "@/components/resume/storage/experiences.tsx";
import {
  AppWindow,
  AppWindowMac,
  Building,
  Building2,
  ExternalLink,
  FlagTriangleRight,
  Folder,
  GitBranch,
} from "lucide-react";

export default function Experiences() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">
        🤵🏻 {experiences.title}
      </h2>
      {experiences.items.map((experience, index) => <>
        <div className="text-xl font-bold text-[#222] flex gap-2 py-4">
          <Building2/>
          <span>{experience.company}</span>
        </div>
        <div key={index} className="draw-container mb-6 mt-2 p-4 bg-card rounded-lg">
          <div className={"flex items-center justify-between py-1"}>
            <span className="text-gray-500">{experience.title}</span>
            <span className="text-gray-500">{experience.date}</span>
          </div>
          <div className={"draw-body"}>
            {experience.projects.map((project, idx) => (
              <div key={idx} className="mb-6">
                <div className={"mt-2"}>
                  <div className="text-lg text-[#333] font-bold flex gap-2 items-center">
                    <span>项目.{project.name}</span>
                    { project.link && <a href={project.link} className={"text-link"}>
                      <ExternalLink className={"w-4"}/>
                    </a> }
                  </div>
                  <p className="text-gray-500 text-sm pt-1">{project.description}</p>
                </div>
                <div className="mt-2">
                  {project.responsibilities.map((responsibility, i) => (
                    <div key={i} className="pt-2">
                      <div className={"flex gap-2 items-center font-semibold text-[#444] text-[17px]"}>
                        <AppWindowMac className={"w-5"}/>
                        <span className={""}>{responsibility.area}</span>
                      </div>
                      <div className={""}>
                        {responsibility.stack.map((stack, j) => (
                          <div key={j} className="text-link text-sm">
                            {stack}
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 space-y-1">
                        {responsibility.tasks.map((task, k) => (
                          <div key={k} className="">
                            <div className={"mb-4 pt-2"}>
                              <div className={"flex gap-2 items-center"}>
                                {task?.icon}
                                <span className={"font-semibold text-gray-600 text-sm"}>{task.feature}</span>
                              </div>
                              <div className={"mb-3 pt-1 flex gap-2 flex-wrap"}>
                                {task.details.map((detail, i) => (
                                  <div key={i} className={"text-sm"}>
                                    {i+1}.{detail}
                                  </div>
                                ))}
                              </div>
                            </div>
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
