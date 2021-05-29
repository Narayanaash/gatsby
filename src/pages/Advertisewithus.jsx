import React from 'react'
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import Enquirebox from '../components/Enquirebox'

export default function Advertisewithus() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Advertise With Us | Jungo Tv</title>
            </Helmet>
            <section className="pageCover blackBg">
                <div className="pageCover__box lazyBg">
                    <div className="overlay overlay--20"></div>
                    <img src="/images/about/cover.jpg" alt="Jungo TV" className="pageCover__img" />
                    <div className="wrapper wrapper--large">
                        <div className="breadcrumb breadcrumbTopPadding">
                            <ul className="breadcrumb__list d-flex">
                                <li className="breadcrumb__item">
                                    <Link to="/" className="breadcrumb__link">Home</Link>
                                </li>
                                <li className="breadcrumb__item">
                                    <Link to="javascript:void(0);" className="breadcrumb__link">Advertise With Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="wrapper wrapper--small">
                        <h1 className="absolute absolute__center"><span className="">ADVERTISE WITH US</span></h1>
                    </div>
                </div>
            </section>

            <section className="aboutAdvertise blackBg margin__top__pages">
                <div className="paddingTopBottom">
                    <div className="wrapper wrapper--small">
                        <p className="">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className="">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <img src="/images/advertise/1.jpg" alt="" className="aboutAdvertise__img " />
                    </div>
                </div>
            </section>

            <section className="ourOfferings blackBg zIndex">
                <div className="paddingTopBottom">
                    <div className="wrapper wrapper--small">
                        <h2 className="ourOfferings__h2 title ">OUR OFFERINGS</h2>
                        <ul className="ourOfferings__list d-flex paddingTop">
                            <li className="ourOfferings__item ">
                                <div className="ourOfferings__text">Video On Demand</div>
                            </li>
                            <li className="ourOfferings__item ">
                                <div className="ourOfferings__text">Seasonal Content Collection</div>
                            </li>
                            <li className="ourOfferings__item ">
                                <div className="ourOfferings__text">Native Mrec</div>
                            </li>
                            <li className="ourOfferings__item ">
                                <div className="ourOfferings__text">Video Intelligence</div>
                            </li>
                            <li className="ourOfferings__item ">
                                <div className="ourOfferings__text">Contextual Content Collection</div>
                            </li>
                            <li className="ourOfferings__item ">
                                <div className="offerings__text">Native Pause</div>
                            </li>
                            <li className="ourOfferings__item ">
                                <div className="ourOfferings__text">Video Splash Ad</div>
                            </li>
                            <li className="ourOfferings__item ">
                                <div className="ourOfferings__text">Sponsorship Of Premium Titles</div>
                            </li>
                            <li className="ourOfferings__item ">
                                <div className="ourOfferings__text">Overlay Leaderboard</div>
                            </li>
                            <li className="ourOfferings__item ">
                                <div className="ourOfferings__text">Programmatic Accessibility</div>
                            </li>
                            <li className="ourOfferings__item ">
                                <div className="ourOfferings__text">Native Compact</div>
                            </li>
                            <li class="ourOfferings__item ">
                                <div class="ourOfferings__text">Social Posts</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="enquireNow blackBg">
                <div class="paddingTopBottom ">
                    <div class="wrapper wrapper--small">
                        <Enquirebox/>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
