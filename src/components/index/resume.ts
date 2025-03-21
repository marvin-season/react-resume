export const data = {
    header: {
        title: "马文澍-Web开发工程师",
        university: "武汉科技大学",
        contactInfo: [
            { type: "phone", label: "📞 15623192717", href: "tel:+8615623192717" },
            { type: "email", label: "📧 Mail", href: "mailto:2764876579@qq.com" },
            { type: "website", label: "🌐 fuelstack.icu", href: "http://fuelstack.icu" },
            {
                type: "github",
                label: "📥 GitHub: marvin-season",
                href: "https://github.com/marvin-season?tab=repositories",
            },
        ],
    },
    advantages: [
        {
            title: "核心优势",
            items: [
                {
                    title: "开发经验",
                    details: [
                        "4年 Web开发实际经验",
                        "1年 Java 后端开发经验",
                        "1年 小程序开发实践经验",
                    ],
                },
                {
                    title: "技术探索",
                    details: [
                        {
                            description: "前端工程化与模块化实践：Vite(Rollup) + Babel + Mono-Repo",
                            links: [
                                { label: "👌 AIO-Modal", href: "https://www.npmjs.com/package/aio-modal" },
                                { label: "🚀 Babel", href: "https://github.com/marvin-season/i18n-ast" },
                            ],
                        },
                        {
                            description: "文档网站搭建与知识管理",
                            links: [
                                { label: "🌐 WebSite", href: "http://fuelstack.icu" },
                                { label: "🌐 github pages", href: "https://marvin-season.github.io/danny-website/" },
                            ],
                        },
                        {
                            description: "富文本编辑器定制开发经验与优化",
                            links: [
                                { label: "🌐 AI 智能书写demo", href: "http://ai.fuelstack.icu" },
                                { label: "📥 GitHub", href: "https://github.com/marvin-season/ai-novel" },
                            ],
                        },
                        {
                            description: "精通 React 技术栈：React Hooks、Next.js 及其生态",
                            links: [
                                {
                                    label: "🪜 React原理",
                                    href: "https://jser.pro/ddir/rie?reactVersion=18.3.1&snippetKey=hq8jm2ylzb9u8eh468",
                                },
                                {
                                    label: "🪜 SSR ISR ...",
                                    href: "https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering",
                                },
                            ],
                        },
                        "跨平台开发实践：Electron 与 UniApp",
                        "熟悉 Vue 3/2 与 UniApp 开发",
                        {
                            description: "工具库与组件库的开发、优化与维护",
                            links: [
                                { label: "shadcn/", href: "https://ui.shadcn.com/" },
                            ],
                        },
                        {
                            description: "CMS 内容管理系统的开发与自托管",
                            links: [
                                {
                                    label: "Strapi self-host",
                                    href: "https://github.com/marvin-season/strapi-non-commerical-starter",
                                },
                            ],
                        },
                        {
                            description: "错误追踪与监控系统开发",
                            links: [
                                { label: "sentry-react demo", href: "https://github.com/marvin-season/sentry-react" },
                            ],
                        },
                        {
                            description: "Web 性能优化与用户体验改进",
                            links: [
                                {
                                    label: "好的用户体验是最重要的",
                                    href: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Fundamentals",
                                },
                            ],
                        },
                        "后端开发实践：Express 与 SpringBoot",
                    ],
                },
                {
                    title: "知识的专业性与系统性",
                    details: [
                        "计算机科学背景：本科信息安全专业，转向软件开发方向",
                        "重点本科院校：武汉科技大学（湖北高校排名前八）",
                        "计算机体系化学习：操作系统、网络安全、数据结构与算法、数据库及高级编程语言（C/C++/Java）",
                    ],
                },
            ],
        },
    ],
    experiences: [
        {
            title: "Web开发工程师",
            company: "神州数码",
            date: "2023.06 - 至今",
            projects: [
                {
                    name: "神州问学",
                    description: "综合平台解决方案，包括官网、管理系统和学习平台",
                    responsibilities: [
                        {
                            area: "管理后台开发",
                            stack: [
                                "Vue2, ECharts, ElementUI, VueRouter",
                            ],
                            tasks: [
                                "基于 Vue2 开发管理后台系统",
                                "实现角色权限管理功能",
                                "开发资源监控模块",
                                "优化数据模块管理",
                            ],
                        },
                        {
                            area: "租户端开发",
                            stack: [
                                "React.js, React-Router, Redux, ShadcnUI, TailwindCSS, Tank-Query, ReactFlow, React-Windows, Fetch, Vite",
                            ],
                            tasks: [
                                {
                                    feature: "AI聊天系统",
                                    details: [
                                        "实现流式聊天接口",
                                        "设计并开发多角色聊天组件",
                                        "开发富文本输入系统",
                                        "实现多媒体消息面板",
                                    ],
                                },
                                {
                                    feature: "文档处理",
                                    details: [
                                        "实现 PDF 渲染与交互功能",
                                        "开发 Excel 数据解析与虚拟化显示",
                                        "设计 Markdown 渲染与高亮系统",
                                    ],
                                },
                                {
                                    feature: "国际化方案",
                                    details: [
                                        "基于 Vite 和 Babel 开发插件，利用 transform hook 访问 TSX 文件并修改 AST，最终反编译回源代码",
                                        "开发自动化国际化字符提取工具",
                                        "实现 CSV 导出和配置生成",
                                        "标准化国际化流程",
                                    ],
                                },
                                {
                                    feature: "新用户引导",
                                    details: [
                                        "设计并实现新用户引导方案",
                                        "开发高阶组件",
                                        "实现引导位置算法",
                                    ],
                                },
                                {
                                    feature: "工作流系统",
                                    details: [
                                        "设计并实现工作流模型",
                                        "设计流程图数据结构",
                                        "开发工作流组件",
                                    ],
                                },
                                {
                                    feature: "性能优化",
                                    details: [
                                        "优化组件性能",
                                        "实现资源懒加载和数据虚拟化",
                                        "优化打包体积和实现代码分割",
                                    ],
                                },
                                {
                                    feature: "业余技能",
                                    details: [
                                        "个人使用 Docker 和 Docker-Compose",
                                        "Nginx 部署个人网站",
                                        "使用 Github Actions 实现 CI/CD",
                                        "使用 Github Pages 部署静态网站",
                                    ],
                                },
                            ],
                        },
                        {
                            area: "官网开发",
                            stack: ["Next.js, TailwindCSS, ShadcnUI, SSR, ISR, Strapi-CMS"],
                            tasks: [
                                {
                                    feature: "CMS 系统",
                                    details: [
                                        "部署开源 Strapi-CMS",
                                        "进行模型设计和 E-R 实体创建",
                                    ],
                                },
                                {
                                    feature: "官网开发",
                                    details: [
                                        "使用 Next.js 开发响应式官网",
                                        "进行 SEO 优化",
                                        "实现 ISR/SSR 预渲染",
                                    ],
                                },
                            ],
                        },
                        {
                            area: "独立应用开发维护",
                            stack: ["React.js, ShadcnUI, TailwindCSS, Vite"],
                            tasks: [
                                "入门生成型应用",
                                "基础对话型应用",
                                "强化增强型应用(Web与H5)",
                                "综合智能体应用(Web与H5)",
                            ],
                        },
                    ],
                },
                {
                    name: "爱问学 项目",
                    description: "基于大语言模型的智能问答系统",
                    responsibilities: [
                        {
                            area: "架构设计",
                            stack: ["ExpressJs, React18, Prisma, PostgresSQL, RAG, TailwindCSS"],
                            tasks: [
                                "使用 Node.js 和 Express 开发后端服务",
                                "搭建并开发 Prisma 和 PostgresSQL 环境",
                                "使用 React18 开发前端应用",
                                "集成 Ollama 实现本地大模型部署",
                                "实现 RAG 检索增强与工具调用特性",
                                "开发富文本编辑器与 AI 智能书写系统",
                                "支持 DeepSeek-R1 深度思考功能",
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: "Web开发工程师",
            company: "武汉兆日科技有限责任公司",
            date: "2022.7-2023.6",
            projects: [
                {
                    name: "巨实惠",
                    description: "电商平台",
                    responsibilities: [
                        {
                            area: "小程序开发",
                            stack: ["Vue2, UniApp, Vuex, VantUI"],
                            tasks: [
                                "实现商品管理系统",
                                "开发购物车和订单系统",
                            ],
                        },
                        {
                            area: "管理后台开发",
                            stack: ["React.js, AntDesign, React-Router, Redux"],
                            tasks: [
                                "用户管理系统",
                                "首页装修系统-低代码",
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: "Java开发工程师",
            company: "健康星球国际科技有限公司",
            date: "2021.6-2022.5",
            projects: [{
                name: "健康星球",
                description: "健康星球是一款健康管理软件",
                responsibilities: [
                    {
                        area: "接口开发",
                        stack: ["SpringBoot, Mybatis, MySQL"],
                        tasks: [
                            "会员模块接口开发",
                            "优惠券模块接口开发",
                            "会员信息统计",
                            "优惠券配发",
                            "收银台打印小票功能",
                        ],
                    },
                    {
                        area: "前端开发",
                        stack: ["Vue2, ElementUI"],
                        tasks: [
                            "会员管理系统",
                            "优惠券管理系统",
                        ],
                    },
                ],
            }],
        },
    ],
    personalCharacteristics: [
        "对新技术有强烈的好奇心，喜欢尝试新事物",
        "具有良好的团队合作精神，能够快速融入团队",
        "对待工作认真负责，有较强的自我驱动力",
        "具有较强的学习能力和解决问题的能力",
    ]
};