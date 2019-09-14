import React, { useState } from "react";
import { LanguageContextProvider, Lang } from "../../context";
import styles from "./App.module.scss";
import { Content } from "../content/Content";

export const App: React.FC = () => {
  const [lang, setLang] = useState(Lang.en)
  const updateLang = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLang(e.currentTarget.name as Lang)
  }

  const renderButtons = () => {
    return Object.keys(Lang).map(language => (
      <button className={styles.langButton} name={language} onClick={updateLang}>
        {language.toUpperCase()}
      </button>
    ));
  }

  return (
    <LanguageContextProvider value={lang}>
      <div className={styles.app}>
        <header className={styles.header}>
          {renderButtons()}
        </header>
        <Content />
      </div>
    </LanguageContextProvider>
  );
};
