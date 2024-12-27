import { useEffect, useState } from "react";

interface valuesLanguages {
    mode: string;
    value: string;
    color: string
}
interface Languages {
    html: valuesLanguages;
    css: valuesLanguages;
    javascript: valuesLanguages;
}
export const useEditor = () => {

    const [Languages,SetLanguages] = useState<Languages>({
        html: {
            mode: "html",
            value: "",
            color: "orange"
        },
        css: {
            mode: "css",
            value: "",
            color: "blue"
        },
        javascript: {
            mode: "javascript",
            value: "",
            color: "yellow"
        }
    });

    const cleanLanguange = (language: string) => {
        SetLanguages((prev) => {
            return {
                ...prev,
                [language as keyof Languages]: {
                    ...prev[language as keyof Languages],
                    value: "",
                },
            };
        })
    
    }

    const changeLanguage = (language: string, value: string) => {
        SetLanguages((prev) => ({
            ...prev,
            [language as keyof Languages]: {
                ...prev[language as keyof Languages],
                value,
            },
        }))    }

    const [output, setOutput] = useState("");
    const [viewLanguange, setViewLanguage] = useState<string>("html");

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

    return {
        output,
        Languages,
        changeLanguage,
        viewLanguange,
        setViewLanguage,
        cleanLanguange
    }
}