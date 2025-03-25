import React from "react";
import baseInfo from "@/components/resume/storage/baseinfo.tsx";
export default function BaseInfo() {
  const { items, title } = baseInfo
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          🧑‍💻 {title}
        </h2>
        <div className={"grid grid-cols-3 gap-4 text-[15px] p-4 bg-card hover-transition"}>
          {items.map((item, idx) => (
            <div key={idx}>
              <span className={"text-gray-500 mr-2"}>{item.label}:</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
