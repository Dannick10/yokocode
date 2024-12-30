import { ILanguages } from "@/interfaces/LanguageInterface";
import { FaLink } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
type ISettings = {
  InputSettings: string;
  SetInputSettings: (value: string) => void;
  viewSettings: boolean;
  Language: ILanguages;
  viewLanguange: string;
  SetviewSettings: (value: boolean) => void;
  SetviewLanguage: (value: string) => void;
  pushExternal: (language: string, value: string) => void;
  popExternal: (language: string, value: string) => void;
  RemoveExternalLinks: (language: string) => string;
};

const Settings = ({
  InputSettings,
  SetInputSettings,
  SetviewSettings,
  viewSettings,
  Language,
  viewLanguange,
  SetviewLanguage,
  pushExternal,
  popExternal,
  RemoveExternalLinks,
}: ISettings) => {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-30 flex justify-center items-center text-white">
      <div className="bg-zinc-900 border-2 border-zinc-200  lg:w-[500px] w-5/6 h-[500px] rounded-lg overflow-hidden">
        <header className="border-b mx-2 p-2 rounded-t-lg flex items-center justify-between  px-2 py-3">
          <h1 className="text-center font-bold text-sm">YokoCode</h1>
          <span
            className="cursor-pointer"
            onClick={() => SetviewSettings(!viewSettings)}
          >
            <IoClose />
          </span>
        </header>

        <main className="flex h-full">
          <nav className=" min-w-32">
            <ul>
              {Object.values(Language).map((language) => (
                <li
                  key={language.mode}
                  className="cursor-pointer"
                  onClick={() => {
                    SetviewLanguage(language.mode)
                    SetInputSettings("")
                  }}
                >
                  <p
                    className={`text-white px-4 py-2 font-bold transition-all
                  ${
                    language.mode == viewLanguange &&
                    "border-r-2 bg-zinc-200 text-zinc-900"
                  }
                  ${language.mode !== viewLanguange && "opacity-60"}
                  `}
                  >
                    {language.mode}
                  </p>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 w-full flex flex-col gap-4">
            <div className="flex gap-2 flex-col">
              <label htmlFor="external" className="text-sm">
                {viewLanguange} Links externos
              </label>
              <div className="w-full flex flex-col max-w-sm">
                <div className="flex  items-center border-b border-zinc-300 py-2 bg-zinc-200 rounded-md">
                  <input
                    id="external"
                    name="external"
                    className="appearance-none bg-transparent border-none w-full text-zinc-950 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    aria-label="Full name"
                    value={InputSettings}
                    autoComplete="off"
                    placeholder="inserte suas bibliotecas"
                    onChange={(e) => SetInputSettings(e.target.value)}
                  />
                </div>
                <button
                  className=" flex items-center justify-center gap-2 text-zinc-950 text-sm bg-zinc-200 py-1 px-2 rounded my-2"
                  type="button"
                  onClick={() => {
                    pushExternal(viewLanguange, InputSettings)
                    SetInputSettings("")
                  }}
                >
                  ADD <FaLink />
                </button>
              </div>
            </div>

            <div className=" h-full overflow-auto">
              <h3>Instalados</h3>
              <ul className="flex flex-col gap-2">
                {Language[viewLanguange as keyof ILanguages]?.external?.map(
                  (link: string) => (
                    <div  className="flex gap-2 mt-2" key={link}>
                    <li
                      key={link}
                      className=" gap-2 max-w-[250px] bg-zinc-200 rounded-md text-zinc-950 p-1 h-6 px-2 overflow-hidden"
                      >
                      <p>{RemoveExternalLinks(link)}</p>
                    </li>
                      <button className="text-red-500 text-xl" onClick={() => popExternal(viewLanguange, link)}>
                        <FaWindowClose />
                      </button>
                      </div>
                  )
                )}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Settings;
