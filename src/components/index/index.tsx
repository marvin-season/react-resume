import React from "react";
import { data } from "@/components/index/resume.ts";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="text-center py-6 border-b-4 border-blue-600 mb-6">
        <h1 className="text-4xl font-bold text-blue-600">
          {data.header.title}
        </h1>
        <p className="text-xl text-gray-600">{data.header.university}</p>
        <div className="flex justify-center gap-6 mt-4">
          {data.header.contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.label}
            </a>
          ))}
        </div>
      </header>

      {data.advantages.map((section, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            {section.title}
          </h2>
          {section.items.map((item, idx) => (
            <div key={idx} className="mb-6 p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <ul className="list-disc pl-5">
                {item.details.map((detail, i) => (
                  <li key={i} className="text-gray-700">
                    {typeof detail === "string" ? (
                      detail
                    ) : (
                      <>
                        {detail.description}
                        {detail.links && (
                          <ul className="mt-2 pl-4 space-y-1">
                            {detail.links.map((link, j) => (
                              <li key={j}>
                                <a
                                  href={link.href}
                                  className="text-blue-500 hover:underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {link.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}

      {data.experiences.map((experience, index) => (
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
    </div>
  );
};

export default Resume;
export const Index = () => {
  return (
    <>
      <Resume></Resume>
    </>
  );
};
