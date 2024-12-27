"use client";

import Ace from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import { IoMdSettings } from "react-icons/io";
import { useEditor } from "@/hooks/useEditor";
import useTheme from "@/hooks/useTheme";
import Console from "@/components/Console";

export default function Home() {
  const {
    changeLanguage,
    output,
    Languages,
    viewLanguange,
    setViewLanguage,
    mobile,
    divConsoleRef,
    outputConsole,
    setOutputConsole,
    viewConsole,
     setViewConsole,
  } = useEditor();

  const { theme } = useTheme();

  return (
    <div className="bg-zinc-200 text-black flex flex-col h-screen">
      <div className="flex flex-col  py-2 bg-zinc-900">
        <p className="text-white px-2">{theme}</p>
        <div className="flex justify-between items-center  gap-2 bg-zinc-950 mx-2 px-2">
          <div className="flex gap-2 md:justify-around flex-1">
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
            <IoMdSettings  />
          </div>
        </div>

        <div className="flex h-full items-start px-2">
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
                  height="300px"
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

      <div
          className={`flex flex-col justify-end items-center  bottom-0 left-0 bg-black transition-all rounded  ${viewConsole && "fixed w-full bottom-0"}`}
          >
          <div className="text-sm  flex justify-between items-center w-full py-2 px-8">
            <div>
              <button
                className="bg-zinc-200 text-zinc-900 min-w-32 p-1 rounded-md"
                onClick={() => {
                  setViewConsole(!viewConsole);
                }}
                >
                Console
              </button>
            </div>
       
            <div className="flex gap-4">
              {viewConsole && (
                <button
                  className="bg-zinc-200 text-zinc-900 p-1 min-w-32 rounded-md"
                  onClick={() => setOutputConsole([])}
                >
                  Limpar console
                </button>
              )}
            </div>
          </div>

          {viewConsole && (
            <Console consoleOutput={outputConsole} divConsoleRef={divConsoleRef} />
          )}
        </div>
    </div>
      
  );
}
