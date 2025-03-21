import { Github } from "lucide-react";
import React from "react";

export default {
  title: "马文澍-Web开发工程师",
  university: "武汉科技大学",
  links: [
    { type: "phone", label: "📞 15623192717", href: "tel:+8615623192717" },
    { type: "email", label: "📧 2764876579@qq.com", href: "mailto:2764876579@qq.com" },
    {
      type: "website",
      label: "🌐 fuelstack.icu",
      href: "http://fuelstack.icu",
    },
    {
      type: "github",
      label: <div className={"flex items-center"}><Github height={16}/>marvin-season</div>,
      href: "https://github.com/marvin-season?tab=repositories",
    },
  ],
};
