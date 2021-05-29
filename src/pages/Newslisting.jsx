import React from 'react'
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'

export default function Newslisting() {
    return (
         <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>News Listing | Jungo Tv</title>
            </Helmet>
            <section className="pageCover blackBg">
                <div className="pageCover__box lazyBg">
                    <div className="overlay overlay--20"></div>
                    <img src="/images/news/cover.jpg" alt="Jungo TV" className="pageCover__img " />
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
                            <Link to="javascript:void(0);" className="breadcrumb__link">News</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="wrapper wrapper--small">
                    <h1 className="absolute absolute__center"><span className="">NEWSROOM</span></h1>
                    </div>
                </div>
            </section>

            <section className="news news--listing blackBg margin__top__pages zIndex">
                <div className="paddingTopBottom">
                    <div className="wrapper wrapper--small">
                    <h2 className="offerings__h2 title ">NEWS</h2>
                    <div className="paddingTop paddingTop--50">
                        <div className="row">
                        <div className="col-4 col-sm-6 col-xs-12">
                            <div className="news__box paddingBottom ">
                            <Link to="/Newsinner">
                                <img src="/images/news/1.jpg" alt="Jungo TV News" className="news__img" />
                                <div className="news__date ">04 MARCH 2021</div>
                                <div className="news__topic ">SOCIAL IMPACT</div>
                                <h4 className="news__h4 ">Investing in the Next Generation of Women Storytellers</h4>
                                <div className=""><span className="cta cta--underline cta--arrow">Read More</span></div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-4 col-sm-6 col-xs-12">
                            <div className="news__box paddingBottom ">
                            <Link to="/Newsinner">
                                <img src="/images/news/2.jpg" alt="Jungo TV News" className="news__img" />
                                <div className="news__date ">04 MARCH 2021</div>
                                <div className="news__topic ">INNOVATION</div>
                                <h4 className="news__h4 ">How Many Stories Are Left Untold, Every<br/>Day?</h4>
                                <div className=""><span href="/Newsinner" className="cta cta--underline cta--arrow">Read More</span></div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-4 col-sm-6 col-xs-12">
                            <div className="news__box paddingBottom ">
                            <Link to="/Newsinner">
                                <img src="/images/news/3.jpg" alt="Jungo TV News" className="news__img" />
                                <div className="news__date ">04 MARCH 2021</div>
                                <div className="news__topic ">ENTERTAINMENT</div>
                                <h4 className="news__h4 ">Investing in the Next Generation of Women Storytellers</h4>
                                <div className=""><span href="/Newsinner" className="cta cta--underline cta--arrow">Read More</span></div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-4 col-sm-6 col-xs-12">
                            <div className="news__box news__box--noimg paddingBottom ">
                            <Link to="/Newsinner">
                                <div className="news__date ">04 MARCH 2021</div>
                                <div className="news__topic ">SOCIAL IMPACT</div>
                                <h3 className="news__h3">Investing in the Next Generation of Women Storytellers</h3>
                                <div className=""><span href="/Newsinner" className="cta cta--underline cta--arrow">Read More</span></div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-4 col-sm-6 col-xs-12">
                            <div className="news__box paddingBottom ">
                            <Link to="/Newsinner">
                                <img src="/images/news/2.jpg" alt="Jungo TV News" className="news__img" />
                                <div className="news__date ">04 MARCH 2021</div>
                                <div className="news__topic ">INNOVATION</div>
                                <h4 className="news__h4 ">How Many Stories Are Left Untold, Every<br/>Day?</h4>
                                <div className=""><span href="/Newsinner" className="cta cta--underline cta--arrow">Read More</span></div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-4 col-sm-6 col-xs-12">
                            <div className="news__box paddingBottom ">
                            <Link to="/Newsinner">
                                <img src="/images/news/3.jpg" alt="Jungo TV News" className="news__img" />
                                <div className="news__date ">04 MARCH 2021</div>
                                <div className="news__topic ">ENTERTAINMENT</div>
                                <h4 className="news__h4 ">Investing in the Next Generation of Women Storytellers</h4>
                                <div className=""><span href="/Newsinner" className="cta cta--underline cta--arrow">Read More</span></div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-4 col-sm-6 col-xs-12">
                            <div className="news__box paddingBottom ">
                            <Link to="/Newsinner">
                                <img src="/images/news/1.jpg" alt="Jungo TV News" className="news__img" />
                                <div className="news__date ">04 MARCH 2021</div>
                                <div className="news__topic ">SOCIAL IMPACT</div>
                                <h3 className="news__h4 ">Investing in the Next Generation of Women Storytellers</h3>
                                <div className=""><span href="/Newsinner" className="cta cta--underline cta--arrow">Read More</span></div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-4 col-sm-6 col-xs-12">
                            <div className="news__box news__box--noimg paddingBottom ">
                            <Link to="/Newsinner">
                                <div className="news__date ">04 MARCH 2021</div>
                                <div className="news__topic ">INNOVATION</div>
                                <h3 className="news__h3">How Many Stories Are Left Untold, Every<br/>Day?</h3>
                                <div className=""><span href="/Newsinner" className="cta cta--underline cta--arrow">Read More</span></div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-4 col-sm-6 col-xs-12">
                            <div className="news__box news__box--noimg paddingBottom ">
                            <Link to="/Newsinner">
                                <div className="news__date ">04 MARCH 2021</div>
                                <div className="news__topic ">ENTERTAINMENT</div>
                                <h3 className="news__h3">Investing in the Next Generation of Women Storytellers</h3>
                                <div className=""><span href="/Newsinner" className="cta cta--underline cta--arrow">Read More</span></div>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <Pagination/>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
