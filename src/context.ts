import { createContext } from "react";

export enum Lang {
  en = "en",
  pt = "pt",
  se = "se",
}

export const LanguageContext = createContext<Lang>(Lang.en);

export const LanguageContextProvider = LanguageContext.Provider;
