import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/main.scss'

export default function Layout({ children }) {
    const [nav, showNav] = useState(false)
    return (
        <div className="layout">
            <Navbar nav={nav} showNav={showNav} />
            <div className="content">
            { children }
            </div>
            <Footer/>
        </div>
    )
}
