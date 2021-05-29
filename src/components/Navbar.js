import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <header className="header transition">
            <div className="wrapper wrapper--large d-flex">
                <div className="header__logo">
                    <Link to="/" className="header__logo__link">
                        <img className="header__logo__img" src="/images/logo.png" alt="Jungo TV" title="Jungo TV" />
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
                <div className="overlay mobile"></div>
                <label id="hamMenu" className="mobile" htmlFor="ham">
                    <input type="checkbox" id="ham"/> 
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
        </header>
    )
}
