import React from "react";
import header from "@/components/resume/storage/header";

export default function Header() {
  return (
    <header className="header text-center py-6 border-b-4 border-primary mb-6">
      <h1 className="text-4xl font-bold text-primary">{header.title}</h1>
      {/*<p className="text-xl text-gray-600 pt-6">{header.university}</p>*/}
      <div className="flex justify-center gap-6 mt-4 text-sm">
        {header.links.map((link, index) => (
          <a
            title={'点击跳转'}
            key={index}
            href={link.href}
            className="text-primary hover:underline hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
