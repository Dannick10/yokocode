import { IconType } from "react-icons";
import { ILanguages } from "./LanguageInterface";

export type Itemplates = {
  [key: string]: () => ILanguages;
};

export type template = {
  stack: string;
  svg: IconType;
};
