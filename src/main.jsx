import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { writeStorage, deleteFromStorage } from '@rehooks/local-storage';
import { useLocalStorage } from '@rehooks/local-storage';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { setDefaultLanguage, setDefaultTranslations } from 'react-multi-lang'

import en from './translations/en.json'
import fr from './translations/fr.json'

const themes = {
  light: 'public/light.css',
  dark: 'public/dark.css',
};
const useThemeDetector = () => {
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e => {
    setIsDarkTheme(e.matches);
  });

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", (e) => {
      mqListener(e);
    });
    return () => darkThemeMq.removeEventListener("change", (e) => {
      mqListener(e);
    });;
  }, []);
  return isDarkTheme;
}

setDefaultTranslations({fr, en})

const Root = () => {
  const isDarkTheme = useThemeDetector();
  const [defaultTheme, setDefaultTheme] = useState("");
  const chargerLanguage = () =>{
    if (!window.localStorage.getItem('lang')) {
        setDefaultLanguage('fr')
    } else {
      let lang = window.localStorage.getItem('lang');
      setDefaultLanguage(lang);
    }
  }

  useEffect(() => {
    if (!window.localStorage.getItem('theme')) {
      if (isDarkTheme) {
        setDefaultTheme("dark");
        window.localStorage.setItem("theme", "dark")
      } else {
        setDefaultTheme("light");
        window.localStorage.setItem("theme", "light");
      }
    } else {
      let theme = window.localStorage.getItem('theme');
      setDefaultTheme(theme);
    }

    //changement de langue
    chargerLanguage();
  }, [])
  return (
    < Provider store={store} >
        <ThemeSwitcherProvider defaultTheme={defaultTheme} themeMap={themes}>
            <App />
        </ThemeSwitcherProvider>
    </Provider >
  )
}
ReactDOM.render(
  <Root />, document.getElementById('root')
)

