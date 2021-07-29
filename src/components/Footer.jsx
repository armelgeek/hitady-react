import React from 'react'

import DarkModeToggle from "react-dark-mode-toggle";
export default function Footer({ isDarkMode, toggleDarkMode,setLanguage,getLanguage }) {
    const changeLanguage =(lang)=>{
        setLanguage(lang);
        window.localStorage.setItem('lang',lang);
    }
    return (
    <div className="flex p-2 flex-row flex-grow justify-between">
        <div>        
            <DarkModeToggle
                onChange={toggleDarkMode}
                checked={isDarkMode}
                size={60}
            />
        </div>
        <div>
            <button className={`btn btn-${ getLanguage() =='fr' ? 'primary':''} mr-2`} onClick={() => changeLanguage('fr')}>FR</button>
            <button  className={`btn btn-${ getLanguage() =='en' ? 'primary':''}`}  onClick={() => changeLanguage('en') }>EN</button>
        </div>
    </div>
    )
}
