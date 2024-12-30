import { ILanguages } from "@/interfaces/LanguageInterface";
import { useEffect, useState } from "react";

export const useEditor = () => {
  const [Languages, SetLanguages] = useState<ILanguages>({
    html: {
      mode: "html",
      value: "",
      external: [],
    },
    css: {
      mode: "css",
      value: "",
      external: [],
    },
    javascript: {
      mode: "javascript",
      value: "",
      external: [],
    },
  });
  const [mobile, setMobile] = useState(false);
  const [output, setOutput] = useState<string>("");
  const [viewLanguange, setViewLanguage] = useState<string>("html");

  const pushExternal = (language: string, value: string) => {
    const formatLink = (link: string) => {
      if (!link) return "";
      if (link.includes("<link") || link.includes("<script")) return link;
      if (link.endsWith(".html")) return `<link href="${link}"/>`;
      if (link.endsWith(".css"))
        return `<link rel="stylesheet" href="${link}"/>`;
      if (link.endsWith(".js")) return `<script src="${link}"></script>`;
      return "";
    };

    const formattedLink = formatLink(value);
    if (!formattedLink) return;
  
    SetLanguages((prev) => ({
      ...prev,
      [language as keyof ILanguages]: {
        ...prev[language as keyof ILanguages],
        external: [
          ...(prev[language as keyof ILanguages].external || []),
          formattedLink,
        ],
      },
    }));
  };
  const popExternal = (language: string, value: string) => {
    if (!value) return;

    SetLanguages((prev) => ({
      ...prev,
      [language as keyof ILanguages]: {
        ...prev[language as keyof ILanguages],
        external: [
          ...(prev[language as keyof ILanguages].external || []).filter(
            (link) => link !== value
          ),
        ],
      },
    }));
  }

  const RemoveExternalLinks = (language: string) => {
    return language.replace(
      /<link href="|<link rel="stylesheet" href="|<script src="|<\/script>|<\/link>/g,
      ""
    );
  };


  const changeLanguage = (language: string, value: string) => {
    SetLanguages((prev) => ({
      ...prev,
      [language as keyof ILanguages]: {
        ...prev[language as keyof ILanguages],
        value,
      },
    }));
  };

  useEffect(() => {
    const combinedOutput = `
          <html>
            <head>
              ${Languages.html.external?.join("\n")}
              ${Languages.css.external?.join("\n")}
              <style>${Languages.css.value}</style>
           </head>
            <body>
            ${Languages.html.value}
            </body>
            ${Languages.javascript.external?.join("\n")}
            <script>
            ${Languages.javascript.value}
            </script>
          </html>
        `;

    setOutput(combinedOutput);
  }, [Languages]);

  const verifyMobile = (width: number) => {
    setMobile(width < 768);
  };

  const handleResizeOrLoad = () => {
    verifyMobile(window.innerWidth);
  };

  useEffect(() => {
    handleResizeOrLoad();
    window.addEventListener("resize", handleResizeOrLoad);
    window.addEventListener("load", handleResizeOrLoad);
    return () => {
      window.removeEventListener("resize", handleResizeOrLoad);
      window.removeEventListener("load", handleResizeOrLoad);
    };
  }, []);

  return {
    output,
    Languages,
    changeLanguage,
    viewLanguange,
    setViewLanguage,
    mobile,
    RemoveExternalLinks,
    pushExternal,
    popExternal,
  };
};
