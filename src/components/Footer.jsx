import { Link } from 'gatsby'
import React from 'react'

export default function Footer() {
    return (
        <footer className="footer blackBg paddingTopBottom">
            <div className="paddingTop footer__line">
                <div className="wrapper wrapper--small">
                    <div className="footer__logoAndSocial d-flex">
                        <Link to="/" className="footer__logo"><img className="footer__logo__img showDiv" src="/images/logo.png" alt="Jungo TV" title="Jungo TV" /></Link>
                        <div className="footer__social">
                            <ul className="footer__social__list d-flex">
                                <li className="footer__social__item showDiv">
                                    <Link to="#!" className="footer__social__link">
                                        <img className="footer__social__img" src="/images/icons/facebook-red.png" src="/images/icons/facebook.png" alt="Jungo TV on Facebook" />
                                        <img className="footer__social__redimg transition" src="/images/icons/facebook-red.png" alt="Jungo TV on Facebook" />
                                    </Link>
                                </li>
                                <li className="footer__social__item showDiv">
                                    <Link to="#!" className="footer__social__link">
                                        <img className="footer__social__img" src="/images/icons/instagram-red.png" src="/images/icons/instagram.png" alt="Jungo TV on Instagram" />
                                        <img className="footer__social__redimg transition" src="/images/icons/instagram-red.png" alt="Jungo TV on Instagram" />
                                    </Link>
                                </li>
                                <li className="footer__social__item showDiv">
                                    <Link to="#!" className="footer__social__link">
                                        <img className="footer__social__img" src="/images/icons/twitter-red.png" src="/images/icons/twitter.png" alt="Jungo TV on Twitter" />
                                        <img className="footer__social__redimg transition" src="/images/icons/twitter-red.png" alt="Jungo TV on Twitter" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <nav className="nav">
                            <ul className="nav__list d-flex">
                                <li className="nav__item showDiv">
                                    <Link to="/AboutUs" className="nav__link">ABOUT US</Link>
                                </li>
                                <li className="nav__item showDiv">
                                    <Link to="/" className="nav__link">OUR OFFERINGS</Link>
                                </li>
                                <li className="nav__item showDiv">
                                    <Link to="/" className="nav__link">NEWSROOM</Link>
                                </li>
                                <li className="nav__item showDiv">
                                    <Link to="/" className="nav__link nav--btn">ADVERTISE WITH US</Link>
                                </li>
                                <li className="nav__item showDiv">
                                    <Link to="/" className="nav__link nav--btn">WATCH</Link>
                                </li>
                            </ul>
                        </nav>
                    <div className="footer__enquiries">
                        <ul className="footer__enquiries__list d-flex">
                            <li className="footer__enquiries__item showDiv">
                                <div className="footer__enquiries__heading">General Inquiries</div>
                                <Link to="mailto:info@jungotv.com" className="footer__enquiries__link">info@jungotv.com</Link>
                            </li>
                            <li className="footer__enquiries__item showDiv">
                                <div className="footer__enquiries__heading">Media Inquiries</div>
                                <Link to="mailto:press@jungotv.com" className="footer__enquiries__link">press@jungotv.com</Link>
                            </li>
                            <li className="footer__enquiries__item showDiv">
                                <div className="footer__enquiries__heading">Advertising Inquiries</div>
                                <Link to="mailto:advertise@jungotv.com" className="footer__enquiries__link">advertise@jungotv.com</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__secondary__links">
                        <ul className="footer__secondary__links__list d-flex">
                            <li className="footer__secondary__item showDiv">
                                <Link to="javascript:void(0);" className="footer__secondary__link">© 2021 JUNGO TV</Link>
                            </li>
                            <li className="footer__secondary__item showDiv">
                                <Link to="#!" className="footer__secondary__link">TERMS OF SERVICE</Link>
                            </li>
                            <li className="footer__secondary__item showDiv">
                                <Link to="#!" className="footer__secondary__link">PRIVACY POLICY</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
