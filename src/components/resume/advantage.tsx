import React from "react";
import advantages from "@/components/resume/storage/advantages";

export default function Advantage() {
  return <>
    {
      advantages.map((advantage, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            {advantage.title}
          </h2>
          {advantage.items.map((item, idx) => (
            <div key={idx} className="mb-6 p-4 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <div className="list-disc pl-5">
                {item.details.map((detail, i) => (
                  <div key={i} className="text-gray-700">
                    {typeof detail === "string" ? (
                      detail
                    ) : (
                      <>
                        <span>{detail.description}</span>
                        <div className="mt-2 pl-4 space-y-1 flex items-end gap-2">
                          {detail.links?.map((link, j) => (
                            <div key={j}>
                              <a
                                href={link.href}
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.label}
                              </a>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      ))
    }
  </>;
}
