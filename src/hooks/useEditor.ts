import { useEffect, useRef, useState } from "react";

interface IvaluesLanguages {
  mode: string;
  value: string;
}
interface ILanguages {
  html: IvaluesLanguages;
  css: IvaluesLanguages;
  javascript: IvaluesLanguages;
}
export const useEditor = () => {
  const [Languages, SetLanguages] = useState<ILanguages>({
    html: {
      mode: "html",
      value: "",
    },
    css: {
      mode: "css",
      value: "",
    },
    javascript: {
      mode: "javascript",
      value: "",
    },
  });
  const [mobile, setMobile] = useState(false);
  const [output, setOutput] = useState<string>("");
  const [viewLanguange, setViewLanguage] = useState<string>("html");
  const divConsoleRef = useRef<HTMLDivElement>(null);
  const [outputConsole, setOutputConsole] = useState<string[]>([]);
  const [viewConsole, setViewConsole] = useState<boolean>(false);

  const cleanLanguange = (language: string) => {
    SetLanguages((prev) => {
      return {
        ...prev,
        [language as keyof ILanguages]: {
          ...prev[language as keyof ILanguages],
          value: "",
        },
      };
    });
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
            <style>${Languages.css.value}</style>
            <body>${Languages.html.value}</body>
            <script>${Languages.javascript.value}</script>
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

  const redirectConsole = (
    setOutputConsole: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    console.log = (...args: string[]) => {
      setOutputConsole((prev) => {
        return [...prev, args.join(" ")];
      });
    };
  };

  const executeCode = (Languages: ILanguages, setOutputConsole: React.Dispatch<React.SetStateAction<string[]>>) => {
    redirectConsole(setOutputConsole);
    try {
        const jsCode = Languages.javascript.value;
        const execute = new Function(jsCode);
        execute()
    } catch (error: unknown) {
        if (error instanceof Error) {
         setOutputConsole((prev) => [...prev, `Error: ${error.message}`]);
        }
      } 
    }

    useEffect(() => {
        if (divConsoleRef.current) {
            divConsoleRef.current.scrollTop = divConsoleRef.current.scrollHeight;
          }
        executeCode(Languages, setOutputConsole);
    }, [Languages.javascript.value]);

  

  return {
    output,
    Languages,
    changeLanguage,
    viewLanguange,
    setViewLanguage,
    cleanLanguange,
    mobile,
    divConsoleRef,
    outputConsole,
    setOutputConsole,
    viewConsole, 
    setViewConsole,
  };
};
