export default {
  title: '工作经历',
  items: [
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
          name: "爱问学",
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
  ]
}