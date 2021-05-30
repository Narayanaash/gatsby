import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from "gatsby-image"
import React, { useState} from 'react'

const Navbar = (props) => {
    
    const data = useStaticQuery(graphql`
        query Logo {
            file(relativePath: {eq: "logo.png"}) {
                childImageSharp {
                    fluid(maxWidth: 500,quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    const { nav, showNav } = props
    return (
        <header className={`header transition ${nav ? 'open' : ''}`}>
            <div className="wrapper wrapper--large d-flex">
                <div className="header__logo">
                    <Link to="/" className="header__logo__link">
                        <Img className="header__logo__img" fluid={data.file.childImageSharp.fluid} alt="Jungo TV" title="Jungo TV" />
                    </Link>
                </div>
                <nav className="nav">
                    <Link to="/" className="header__logo__link mobile">
                        <img className="header__logo__img mobile" src="/images/logo.png" alt="Jungo TV" title="Jungo TV" />
                    </Link>
                    <ul className="nav__list d-flex">
                        <li className="nav__item">
                            <Link to="/AboutUs" className="nav__link">ABOUT US</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/Ourofferings" className="nav__link">OUR OFFERINGS</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/Newsroom" className="nav__link">NEWSROOM</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/Advertisewithus" className="nav__link nav--btn">ADVERTISE WITH US</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/" className="nav__link nav--btn last--right">WATCH</Link>
                        </li>
                    </ul>
                </nav>
                <div onClick={() => showNav(false)} className="overlay mobile"></div>
                <label id="hamMenu" className="mobile" htmlFor="ham">
                    <input onClick={() => showNav(!nav)} type="checkbox" checked={nav} id="ham"/> 
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
        </header>
    )
}

export default Navbar

