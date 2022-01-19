import React from "react"
import Footer from './Footer'
import Inshorts from '../icons/inshorts.jpg'
import Public from '../icons/public.png'
import Google from '../icons/google.png'
import { clsx } from './helpers'
import '../styles/signin.css'

const logoMap = {
    'Inshorts': Inshorts,
    "Public App": Public
}
const GoogleAuthUI = (props) => {
        const { 
            app = "Inshorts",
            logo,
            authPath= '/auth/google' , 
            FooterProps,
            title, 
            heading = "Welcome, Sign in to continue!", 
            classes = {}
        } = props
        return <div className={clsx("signin-wrapper", classes.root)}>
            <div className={"main-container"}>
                <div className={clsx("image", classes.logo)} >
                    <img src={logo || logoMap[app]} alt="app" style={{ height: '100%' }} />
                </div>
                <div className={"content"} >
                    <h2 className={clsx("content-title", classes.title)}>{title}</h2>
                    <div className={clsx("heading", classes.heading)} >{heading}</div>
                </div>
                <a href={authPath} className={clsx("signin-button", classes.signButton)}>
                    <img className="google-icon" src={Google} alt="google" />
                    <span>
                        Sign in with Google
                    </span>
                </a>
            </div>
            <Footer app={app} {...FooterProps} />
        </div>
}
export default GoogleAuthUI
