import React, { useState } from "react";
import advantages from "@/components/resume/storage/advantages";
import { ChevronRight } from "lucide-react";
// 获取数组元素类型
type ElementType<T> = T extends (infer U)[] ? U : never;

function AdvantageItem({
  item,
}: {
  item: ElementType<typeof advantages>["items"][0];
}) {
  return (
    <>
      <div className="draw-container advantage mb-6 p-4 bg-card rounded-lg shadow-[inset_1px_1px_20px_rgba(0,0,0,0.05)]">
        <div
          className={"draw-header flex justify-between cursor-pointer"}
        >
          <h3 className="text-xl font-semibold">{item.title}</h3>
        </div>
        <div className={`draw-body`}>
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
    </>
  );
}

export default function Advantage() {
  return (
    <>
      {advantages.map((advantage, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            💪 {advantage.title}
          </h2>
          {advantage.items.map((item, idx) => (
            <AdvantageItem key={idx} item={item}></AdvantageItem>
          ))}
        </section>
      ))}
    </>
  );
}
