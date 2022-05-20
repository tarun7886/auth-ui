import React from "react";
import Company from '../icons/company.png'
import '../styles/footer.css'
import { clsx } from './helpers'

const Footer = ({ lang, app, path = "", position = 'static', visibleLangIndicator = false, footerClass, footerText }) => {
    const footerContent = footerText ? footerText : <span>{app} <img src={Company} className="company-icon" /> {new Date().getFullYear()}. All rights reserved.</span>
    return <footer className={clsx(`footer-container`, position, footerClass)}>
        <div className={"footer-content"} >
            {footerContent}
            <LanguageSelector key={1} path={path} lang={lang} visible={visibleLangIndicator} inline />
            <LanguageSelector key={2} path={path} lang={lang} visible={visibleLangIndicator} />
        </div>
    </footer>
}

export default Footer

const LanguageSelector = ({ path, lang, visible, inline }) => {
    if (!visible) return <span style={{display: 'none'}} ></span>
    return <div className={`language-selector visible ${inline ? 'inline' : ''}`}>
        <a className={`list-item ${lang === "en" && 'active'}`} href={`/en/${path}`}>
            English
            </a>
        <a className={`list-item ${lang === "hi" && 'active'}`} href={`/hi/${path}`}>
            Hindi
            </a>
    </div>
}