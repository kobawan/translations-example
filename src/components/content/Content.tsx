import React, { useContext } from "react";
import { LanguageContext, Lang } from "../../context";
import styles from "./Content.module.scss";
import { translations } from "../../translations";

const getFlagFromContext = (lang: Lang) => {
  switch(lang) {
    case Lang.en:
      return <span role="img" aria-label="british-flag">🇬🇧</span>;
    case Lang.pt:
      return <span role="img" aria-label="portuguese-flag">🇵🇹</span>;
    case Lang.se:
        return <span role="img" aria-label="swedish-flag">🇸🇪</span>;
    default:
      return null;
  }
}

export const Content: React.FC = () => {
  const lang = useContext(LanguageContext);
  const flag = getFlagFromContext(lang);

  return (
    <div className={styles.content}>
      <h1>{flag} {translations[lang].welcome} {flag}</h1>
      <span role="img" aria-label="koala" style={{ fontSize: "2em", }}>🐨</span>
    </div>
  );
};
