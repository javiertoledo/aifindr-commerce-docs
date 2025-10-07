// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "AIFindr Commerce Docs",
  tagline: "AIFindr Commerce Documentation",
  url: "https://docs.aifindr.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          routeBasePath: "docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/",
            to: "/docs/widget-config/api-reference",
          },
        ],
      },
    ],
  ],

  themeConfig:
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "AIFindr Commerce",
        logo: {
          alt: "AIFindr Commerce Logo",
          src: "https://framerusercontent.com/images/P9zJkZIvPqGLxQmLj4rgrJBt8uY.svg?scale-down-to=512",
          href: "/docs/widget-config/api-reference",
        },
        items: [
          {
            type: "doc",
            docId: "widget-reference",
            label: "Widget",
            position: "left",
          },
          {
            href: "https://github.com/javiertoledo/aifindr-commerce-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Docs",
      //       items: [
      //         {
      //           label: "Tutorial",
      //           to: "/docs/intro",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Community",
      //       items: [
      //         {
      //           label: "Stack Overflow",
      //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //         },
      //         {
      //           label: "Discord",
      //           href: "https://discordapp.com/invite/docusaurus",
      //         },
      //         {
      //           label: "Twitter",
      //           href: "https://twitter.com/docusaurus",
      //         },
      //       ],
      //     }
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        additionalLanguages: [
          "ruby",
          "csharp",
          "php",
          "java",
          "powershell",
          "json",
          "bash",
          "dart",
          "objectivec",
          "r",
        ],
      },
      languageTabs: [
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "bash",
          language: "curl",
          logoClass: "curl",
        },
        {
          highlight: "csharp",
          language: "csharp",
          logoClass: "csharp",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
        },
        {
          highlight: "ruby",
          language: "ruby",
          logoClass: "ruby",
        },
        {
          highlight: "php",
          language: "php",
          logoClass: "php",
        },
        {
          highlight: "java",
          language: "java",
          logoClass: "java",
          variant: "unirest",
        },
        {
          highlight: "powershell",
          language: "powershell",
          logoClass: "powershell",
        },
        {
          highlight: "dart",
          language: "dart",
          logoClass: "dart",
        },
        {
          highlight: "javascript",
          language: "javascript",
          logoClass: "javascript",
        },
        {
          highlight: "c",
          language: "c",
          logoClass: "c",
        },
        {
          highlight: "objective-c",
          language: "objective-c",
          logoClass: "objective-c",
        },
        {
          highlight: "ocaml",
          language: "ocaml",
          logoClass: "ocaml",
        },
        {
          highlight: "r",
          language: "r",
          logoClass: "r",
        },
        {
          highlight: "swift",
          language: "swift",
          logoClass: "swift",
        },
        {
          highlight: "kotlin",
          language: "kotlin",
          logoClass: "kotlin",
        },
        {
          highlight: "rust",
          language: "rust",
          logoClass: "rust",
        },
      ],
    } satisfies Preset.ThemeConfig,

};

export default async function createConfig() {
  return config;
}
