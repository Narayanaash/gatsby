import React from 'react'
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from '../components/Layout'

export default function Presslisting() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Press Listing | Jungo Tv</title>
            </Helmet>
            <section className="pageCover blackBg">
                <div className="pageCover__box lazyBg">
                    <div className="overlay overlay--20"></div>
                    <img src="/images/news/cover.jpg" alt="Jungo TV" className="pageCover__img" />
                    <div className="wrapper wrapper--large">
                        <div className="breadcrumb breadcrumbTopPadding">
                            <ul className="breadcrumb__list d-flex">
                                <li className="breadcrumb__item">
                                    <Link to="/" className="breadcrumb__link">Home</Link>
                                </li>
                                <li className="breadcrumb__item">
                                    <Link to="/Newsroom" className="breadcrumb__link">Newsroom</Link>
                                </li>
                                <li className="breadcrumb__item">
                                    <Link to="javascript:void(0);" className="breadcrumb__link">Press Releases</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="wrapper wrapper--small">
                        <h1 className="absolute absolute__center"><span className="">NEWSROOM</span></h1>
                    </div>
                </div>
            </section>

            <section className="pressListing blackBg margin__top__pages zIndex">
                <div className="paddingTopBottom">
                    <div className="wrapper wrapper--small">
                        <h2 className="pressListing__h2 title mb-0">PRESS RELEASE</h2>
                        <div className="paddingTop--50">
                            <div className="pressListing__item">
                                <Link to="/Newsinner">
                                    <div className="pressListing__date">04 MARCH 2021</div>
                                    <h4 className="pressListing__h4">Investing in the Next Generation of Women Storytellers</h4>
                                </Link>
                            </div>
                            <div className="pressListing__item">
                                <Link to="/Newsinner">
                                    <div className="pressListing__date">04 MARCH 2021</div>
                                    <h4 className="pressListing__h4">How Many Stories Are Left Untold, Every Day?</h4>
                                </Link>
                            </div>
                            <div className="pressListing__item">
                                <Link to="/Newsinner">
                                    <div className="pressListing__date">04 MARCH 2021</div>
                                    <h4 className="pressListing__h4">Investing in the Next Generation of Women Storytellers</h4>
                                </Link>
                            </div>
                            <div className="pressListing__item">
                                <Link to="/Newsinner">
                                    <div className="pressListing__date">04 MARCH 2021</div>
                                    <h4 className="pressListing__h4">How Many Stories Are Left Untold, Every Day?</h4>
                                </Link>
                            </div>
                            <div className="pressListing__item">
                                <Link to="/Newsinner">
                                    <div className="pressListing__date">04 MARCH 2021</div>
                                    <h4 className="pressListing__h4">Investing in the Next Generation of Women Storytellers</h4>
                                </Link>
                            </div>
                            <div className="pressListing__item">
                                <Link to="/Newsinner">
                                    <div className="pressListing__date">04 MARCH 2021</div>
                                    <h4 className="pressListing__h4">How Many Stories Are Left Untold, Every Day?</h4>
                                </Link>
                            </div>
                            <div className="pressListing__item">
                                <Link to="/Newsinner">
                                    <div className="pressListing__date">04 MARCH 2021</div>
                                    <h4 className="pressListing__h4">Investing in the Next Generation of Women Storytellers</h4>
                                </Link>
                            </div>
                            <div className="pressListing__item">
                                <Link to="/Newsinner">
                                    <div className="pressListing__date">04 MARCH 2021</div>
                                    <h4 className="pressListing__h4">How Many Stories Are Left Untold, Every Day?</h4>
                                </Link>
                            </div>
                            <div className="pressListing__item">
                                <Link to="/Newsinner">
                                    <div className="pressListing__date">04 MARCH 2021</div>
                                    <h4 className="pressListing__h4">Investing in the Next Generation of Women Storytellers</h4>
                                </Link>
                            </div>
                            <div className="pressListing__item">
                                <Link to="/Newsinner">
                                    <div className="pressListing__date">04 MARCH 2021</div>
                                    <h4 className="pressListing__h4">How Many Stories Are Left Untold, Every Day?</h4>
                                </Link>
                            </div>
                            <div className="pressListing__item">
                                <Link to="/Newsinner">
                                    <div className="pressListing__date">04 MARCH 2021</div>
                                    <h4 className="pressListing__h4">Investing in the Next Generation of Women Storytellers</h4>
                                </Link>
                            </div>
                        </div>
                        {/* pagination */}
                    </div>
                </div>
            </section>
        </Layout>
    )
}
