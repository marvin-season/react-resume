import { FileUser, Github, Notebook, Phone } from "lucide-react";
import React from "react";

export default {
  title: "Web开发工程师",
  university: "武汉科技大学",
  links: [
    {
      type: "website",
      label: (
        <div className={"flex items-center"}>
          <FileUser height={16} />
          在线简历
        </div>
      ),
      href: "http://resume.fuelstack.icu",
    },
    {
      type: "phone",
      label: (
        <div className={"flex items-center"}>
          <Phone height={16} />
          15623192717
        </div>
      ),
      href: "tel:+8615623192717",
    },
    {
      type: "email",
      label: "📧 2764876579@qq.com",
      href: "mailto:2764876579@qq.com",
    },
    {
      type: "website",
      label: (
        <div className={"flex items-center"}>
          <Notebook height={16} />
          博客
        </div>
      ),
      href: "http://fuelstack.icu",
    },
    {
      type: "github",
      label: (
        <div className={"flex items-center"}>
          <Github height={16} />
          marvin
        </div>
      ),
      href: "https://github.com/marvin-season?tab=repositories",
    },
  ],
};
