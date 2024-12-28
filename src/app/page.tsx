"use client";

import { IoMdSettings } from "react-icons/io";
import Ace from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import { useEditor } from "@/hooks/useEditor";

import useTheme from "@/hooks/useTheme";

export default function Home() {
  const {
    changeLanguage,
    output,
    Languages,
    viewLanguange,
    setViewLanguage,
    mobile,
  } = useEditor();

  const { theme } = useTheme();

  return (
    <div className="bg-zinc-200 text-black flex flex-col h-screen ">
      <div className="flex flex-col  py-2 bg-zinc-900">
        <p className="text-white px-2">{theme}</p>
        <div className="flex justify-between items-center  gap-2 bg-zinc-950 mx-2 px-2">
          <div className="flex gap-2 md:justify-around flex-1 ">
            {Object.values(Languages).map((language) => (
              <div key={language.mode}>
                <p
                  className={`text-white rounded-sm font-bold px-2 cursor-pointer w-24 text-center duration-200 transition-opacity ${
                    language.mode !== viewLanguange && mobile && "opacity-15 "
                  }
                ${
                  language.mobile === viewLanguange && mobile && "bg-zinc-800"
                }    
                `}
                  onClick={() => setViewLanguage(language.mode)}
                >
                  {language.mode}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-end cursor-pointer text-white hover:rotate-90 transition-all duration-100">
            <IoMdSettings />
          </div>
        </div>

        <div className="flex items-start px-2 min-h-[80px] h-[250px] max-h-[250px]  overflow-y-scroll resize-y">
          {Object.values(Languages).map((language) => (
            <>
              {language.mode === viewLanguange && mobile && (
                <Ace
                  key={language.mode}
                  mode={language.mode}
                  theme={theme}
                  value={language.value}
                  onChange={(value) => changeLanguage(language.mode, value)}
                  name={language.mode}
                  editorProps={{ $blockScrolling: true }}
                  enableLiveAutocompletion={true}
                  enableBasicAutocompletion={true}
                  enableSnippets={true}
                  width="100%"
                  height="100%"
                />
              )}
            </>
          ))}

          {Object.values(Languages).map((language) => (
            <>
              {!mobile && (
                <Ace
                  key={language.mode}
                  mode={language.mode}
                  theme={theme}
                  value={language.value}
                  onChange={(value) => changeLanguage(language.mode, value)}
                  name={language.mode}
                  editorProps={{ $blockScrolling: true }}
                  enableLiveAutocompletion={true}
                  enableBasicAutocompletion={true}
                  enableSnippets={true}
                  width="100%"
                  height="100%"
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
