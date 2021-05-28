import React from 'react'
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from '../components/Layout'

export default function AboutUs() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us | Jungo Tv</title>
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
                            <Link to="javascript:void(0);" className="breadcrumb__link">About Us</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="wrapper wrapper--small">
                    <h1 className="absolute absolute__center"><span className=" delay0-5">ABOUT US</span></h1>
                    </div>
                </div>
            </section>
            <section className="aboutJungo blackBg margin__top__pages">
                <div className="paddingTopBottom">
                    <div className="wrapper wrapper--small">
                        <div className="row">
                            <div className="col-6 col-sm-12 aboutJungo__left">
                                <div className="aboutJungo__text">
                                    <p>Jungo</p>
                                    <p><i>Verb (Latin)</i></p>
                                    <p>{`{/ˈjun.ɡoː/, [ˈjʊŋɡoː]}`}</p>
                                    <p>Our mission is to create the most extensive 
                                    free collection of entertainment in key passion 
                                    verticals that are typically underserved.</p>
                                </div>
                                <img src="/images/about/as1.jpg" alt="" className="aboutJungo__img marginTop--50" />
                            </div>
                            <div className="col-6 col-sm-12 aboutJungo__right">
                                <img src="/images/about/as2.jpg" alt="" className="aboutJungo__img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ourValues blackBg zIndex">
                <div className="paddingTopBottom">
                    <div className="wrapper wrapper--fluid">
                        <div className="row sm-reverse">
                            <div className="col-5 col-sm-12 ourValues__left Left">
                                <img src="/images/about/values.jpg" alt="" className="ourValues__img" />
                            </div>
                            <div className="col-7 col-sm-12 ourValues__right">
                                <div>
                                    <h2 className="ourValues__h2 title">OUR VALUES</h2>
                                    <div className="row">
                                    <div className="col-6 col-xs-12">
                                        <div className="ourValues__box paddingTopBottom--40 ">
                                        <h3 className="">01</h3>
                                        <h4 className="">Inclusion and Diversity</h4>
                                        <p className="">We celebrate differences, our power lies in our ability to be unified.</p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-xs-12">
                                        <div className="ourValues__box paddingTopBottom--40 ">
                                        <h3 className="">02</h3>
                                        <h4 className="">Integrity</h4>
                                        <p className="">We uphold the highest standards of integrity in all of our actions.</p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-xs-12">
                                        <div className="ourValues__box paddingTopBottom--40  pb-0">
                                        <h3 className="">03</h3>
                                        <h4 className="">Personal Accountability</h4>
                                        <p className="">We are personally accountable for delivering on our commitments.</p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-xs-12">
                                        <div className="ourValues__box paddingTopBottom--40  pb-0">
                                        <h3 className="">04</h3>
                                        <h4 className="">Quality</h4>
                                        <p className="">We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="leadership blackBg">
                <div className="paddingTopBottom">
                    <div className="wrapper wrapper--small">
                    <h2 className="leadership__h2 title mb-0 showDiv">LEADERSHIP</h2>
                    <div className="row">
                        <div className="col-3 col-sm-4 col-xs-6">
                            <div className="leadership__box paddingTop showDiv">
                                <div className="lazyContainer" style={{paddingBottom: '141.85%'}}>
                                    <img src="/images/about/leader1.jpg" alt="" className="leadership__img" />
                                </div>
                                <h4 className="leadership__h4">Ben Hirons</h4>
                                <div className="leadership__designation">FOUNDER & CEO</div>
                                <Link href="#!" className="leadership__social__link">
                                    <img src="/images/icons/linkedin.png" alt="LinkedIn" className="leadership__social__img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-3 col-sm-4 col-xs-6">
                            <div className="leadership__box paddingTop showDiv">
                                <div className="lazyContainer" style={{paddingBottom: '141.85%'}}>
                                    <img src="/images/about/leader2.jpg" alt="" className="leadership__img" />
                                </div>
                                <h4 className="leadership__h4">Ben Hirons</h4>
                                <div className="leadership__designation">FOUNDER & CEO</div>
                                <Link href="#!" className="leadership__social__link">
                                    <img src="/images/icons/linkedin.png" alt="LinkedIn" className="leadership__social__img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-3 col-sm-4 col-xs-6">
                            <div className="leadership__box paddingTop showDiv">
                                <div className="lazyContainer" style={{paddingBottom: '141.85%'}}>
                                    <img src="/images/about/leader3.jpg" alt="" className="leadership__img" />
                                </div>
                                <h4 className="leadership__h4">Ben Hirons</h4>
                                <div className="leadership__designation">FOUNDER & CEO</div>
                                <Link href="#!" className="leadership__social__link">
                                    <img src="/images/icons/linkedin.png" alt="LinkedIn" className="leadership__social__img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-3 col-sm-4 col-xs-6">
                            <div className="leadership__box paddingTop showDiv">
                                <div className="lazyContainer" style={{paddingBottom: '141.85%'}}>
                                    <img src="/images/about/leader4.jpg" alt="" className="leadership__img" />
                                </div>
                                <h4 className="leadership__h4">Ben Hirons</h4>
                                <div className="leadership__designation">FOUNDER & CEO</div>
                                <Link href="#!" className="leadership__social__link">
                                    <img src="/images/icons/linkedin.png" alt="LinkedIn" className="leadership__social__img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-3 col-sm-4 col-xs-6">
                            <div className="leadership__box paddingTop showDiv">
                                <div className="lazyContainer" style={{paddingBottom: '141.85%'}}>
                                    <img src="/images/about/leader5.jpg" alt="" className="leadership__img" />
                                </div>
                                <h4 className="leadership__h4">Ben Hirons</h4>
                                <div className="leadership__designation">FOUNDER & CEO</div>
                                    <Link href="#!" className="leadership__social__link">
                                    <img src="/images/icons/linkedin.png" alt="LinkedIn" className="leadership__social__img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-3 col-sm-4 col-xs-6">
                            <div className="leadership__box paddingTop showDiv">
                                <div className="lazyContainer" style={{paddingBottom: '141.85%'}}>
                                    <img src="/images/about/leader6.jpg" alt="" className="leadership__img" />
                                </div>
                                <h4 className="leadership__h4">Ben Hirons</h4>
                                <div className="leadership__designation">FOUNDER & CEO</div>
                                    <Link href="#!" className="leadership__social__link">
                                        <img src="/images/icons/linkedin.png" alt="LinkedIn" className="leadership__social__img" />
                                    </Link>
                                </div>
                            </div>
                        <div className="col-3 col-sm-4 col-xs-6">
                            <div className="leadership__box paddingTop showDiv">
                                <div className="lazyContainer" style={{paddingBottom: '141.85%'}}>
                                    <img src="/images/about/leader7.jpg" alt="" className="leadership__img" />
                                </div>
                                <h4 className="leadership__h4">Ben Hirons</h4>
                                <div className="leadership__designation">FOUNDER & CEO</div>
                                    <Link href="#!" className="leadership__social__link">
                                        <img src="/images/icons/linkedin.png" alt="LinkedIn" className="leadership__social__img" />
                                    </Link>
                                </div>
                            </div>
                        <div className="col-3 col-sm-4 col-xs-6">
                            <div className="leadership__box paddingTop showDiv">
                                <div className="lazyContainer" style={{paddingBottom: '141.85%'}}>
                                    <img src="/images/about/leader8.jpg" alt="" className="leadership__img" />
                                </div>
                                <h4 className="leadership__h4">Ben Hirons</h4>
                                <div className="leadership__designation">FOUNDER & CEO</div>
                                    <Link href="#!" className="leadership__social__link">
                                        <img src="/images/icons/linkedin.png" alt="LinkedIn" className="leadership__social__img" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="watchNow blackBg">
                <div className="paddingTopBottom showDiv">
                    <div className="watchNow__box relative" style={{backgroundImage: "url("+"/images/about/abg.jpg"+")"}}>
                    <div className="wrapper wrapper-small">
                        <Link to="#!">
                            <div className="overlay d-flex justify-center">
                                <div className="playIcon"></div>
                            </div>
                        </Link>
                    </div>
                    </div>
                </div>
            </section>
            <section className="ourPartners blackBg">
                <div className="paddingTopBottom">
                    <div className="wrapper wrapper--small">
                        <h2 className="ourPartners__h2 title showDiv">OUR PARTNERS</h2>
                        <ul className="ourPartners__list d-flex paddingTop--50">
                            <li className="ourPartners__item showDiv">
                                <img src="/images/partners/1.png" alt="" className="ourPartners__img" />
                            </li>
                            <li className="ourPartners__item showDiv">
                                <img src="/images/partners/2.png" alt="" className="ourPartners__img" />
                            </li>
                            <li className="ourPartners__item showDiv">
                                <img src="/images/partners/3.png" alt="" className="ourPartners__img" />
                            </li>
                            <li className="ourPartners__item showDiv">
                                <img src="/images/partners/4.png" alt="" className="ourPartners__img" />
                            </li>
                            <li className="ourPartners__item showDiv">
                                <img src="/images/partners/5.png" alt="" className="ourPartners__img" />
                            </li>
                                <li className="ourPartners__item showDiv">
                                <img src="/images/partners/6.png" alt="" className="ourPartners__img" />
                            </li>
                            <li className="ourPartners__item showDiv">
                                <img src="/images/partners/7.png" alt="" className="ourPartners__img" />
                            </li>
                            <li className="ourPartners__item showDiv">
                                <img src="/images/partners/8.png" alt="" className="ourPartners__img" />
                            </li>
                            <li className="ourPartners__item showDiv">
                                <img src="/images/partners/9.png" alt="" className="ourPartners__img" />
                            </li>
                            <li className="ourPartners__item showDiv">
                                <img src="/images/partners/10.png" alt="" className="ourPartners__img" />
                            </li>
                            <li className="ourPartners__item showDiv">
                                <img src="/images/partners/11.png" alt="" className="ourPartners__img" />
                            </li>
                            <li className="ourPartners__item showDiv">
                                <img src="/images/partners/12.png" alt="" className="ourPartners__img" />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
