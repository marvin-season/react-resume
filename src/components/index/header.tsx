import React from "react";
import header from "@/components/index/storage/header";

export default function Header() {
  return (
    <header className="text-center py-6 border-b-4 border-blue-600 mb-6">
      <h1 className="text-4xl font-bold text-blue-600">{header.title}</h1>
      <p className="text-xl text-gray-600">{header.university}</p>
      <div className="flex justify-center gap-6 mt-4">
        {header.contactInfo.map((contact, index) => (
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
  );
}
