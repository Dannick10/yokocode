"use client";

import Ace from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

import { useEditor } from "@/hooks/useEditor";

export default function Home() {
  const { changeLanguage, output, Languages, viewLanguange, setViewLanguage } =
    useEditor();

  return (
    <div className="bg-zinc-200 text-black flex flex-col h-screen">
      <div className="flex flex-col  py-2 bg-gray-950">
        <div className="flex px-2 gap-2">
          {Object.values(Languages).map((language) => (
            <div key={language.mode}>
              <p
                className={`text-white rounded-sm font-bold cursor-pointer transition-all px-9 min-w-10  ${
                  viewLanguange !== language.mode && "opacity-15"
                }
                ${
                  language.color == "orange"
                    ? "bg-orange-500"
                    : language.color == "blue"
                    ? "bg-blue-500"
                    : "bg-yellow-500"
                }
                `}
                onClick={() => setViewLanguage(language.mode)}
              >
                {language.mode}
              </p>
            </div>
          ))}
        </div>

        <div  className="flex h-full items-start ">
        {Object.values(Languages).map((language) => (
          <>
            {language.mode === viewLanguange && (
              <Ace
              key={language.mode}
              mode={language.mode}
              theme="monokai"
              value={language.value}
              onChange={(value) => changeLanguage(language.mode, value)}
              name={language.mode}
              editorProps={{ $blockScrolling: true }}
              enableLiveAutocompletion={true}
              enableBasicAutocompletion={true}
              enableSnippets={true}
              width="100%"
              height="300px"
              />
            )}
          </>
          ))}
          </div>
      </div>
      
      <div className="h-full w-full ">
        <iframe
          srcDoc={output}
          title="output"
          sandbox="allow-scripts"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
