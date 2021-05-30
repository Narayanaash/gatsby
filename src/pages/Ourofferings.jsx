import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from '../components/Layout'
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Ourofferings({ data }) {
  return (
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Our Offerings | Jungo Tv</title>
        </Helmet>
        <section className="pageCover blackBg">
            <div className="pageCover__box lazyBg">
                <div className="overlay overlay--20"></div>
                <Img fluid={data.offerngcover.childImageSharp.fluid} alt="Jungo TV" className="pageCover__img" />
                <div className="wrapper wrapper--large">
                    <div className="breadcrumb breadcrumbTopPadding">
                        <ul className="breadcrumb__list d-flex">
                            <li className="breadcrumb__item">
                                <Link to="/" className="breadcrumb__link">Home</Link>
                            </li>
                            <li className="breadcrumb__item">
                                <Link to="javascript:void(0);" className="breadcrumb__link">Our Offerings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="wrapper wrapper--small">
                    <h1 className="absolute absolute__center"><span className="">OUR OFFERINGS</span></h1>
                </div>
            </div>
        </section>

        <section className="aboutHead blackBg margin__top__pages">
            <div className="paddingTopBottom">
                <div className="wrapper wrapper--small">
                    <h2 className="aboutHead__h2 text-center mb-0">Our mission is to create the<br/>most extensive free collection of<br/>entertainment in key passion verticals<br/>that are typically underserved</h2>
                </div>
            </div>
        </section>

        <section className="counters blackBg zIndex">
            <div className="paddingTopBottom">
                <div className="wrapper wrapper--small">
                    <ul className="counters__list d-flex justify-space-between">
                        <li className="counters__item text-center">
                            <div className="counters__number">2 Billion</div>
                            <div className="counters__text">MONTHLY  VIEWS</div>
                        </li>
                        <li className="counters__item text-center">
                            <div className="counters__number ">15 Milliom</div>
                            <div className="counters__text ">ACTIVE USERS</div>
                        </li>
                        <li className="counters__item text-center">
                            <div className="counters__number">20</div>
                            <div className="counters__text">CHANNEL NETWORKS</div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="offeringslisting blackBg">
            <div className="paddingTop">
                <div className="wrapper wrapper--small">
                    <div className="row">
                        <div className="col-6 col-sm-12">
                            <div className="offeringslisting__box squareBox relative ">
                                <img src="/images/our-offerings/1.jpg" alt="" className="offeringslisting__img absolute" />
                                <div className="offeringslisting__text absolute Up">
                                    <img src="/images/our-offerings/lcd.png" alt="" className="offeringslisting__icon" />
                                    <h3 className="offeringslisting__h3">Television Channels</h3>
                                    <p>Uniting audiences around the world to share their passion and unique interests.</p>
                                    <span href="#!" className="cta cta--underline cta--arrow">Get In Touch</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <div className="offeringslisting__box squareBox relative ">
                                <img src="/images/our-offerings/2.jpg" alt="" className="offeringslisting__img absolute" />
                                <div className="offeringslisting__text absolute Up">
                                    <img src="/images/our-offerings/speaker.png" alt="" className="offeringslisting__icon" />
                                    <h3 className="offeringslisting__h3">Advertisements</h3>
                                    <p>Uniting audiences around the world to share their passion and unique interests.</p>
                                    <span href="#!" className="cta cta--underline cta--arrow">Get In Touch</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <div className="offeringslisting__box squareBox relative ">
                                <img src="/images/our-offerings/3.jpg" alt="" className="offeringslisting__img absolute" />
                                <div className="offeringslisting__text absolute Up">
                                    <img src="/images/our-offerings/video.png" alt="" className="offeringslisting__icon" />
                                    <h3 className="offeringslisting__h3">Video On Demand</h3>
                                    <p>Uniting audiences around the world to share their passion and unique interests.</p>
                                    <Link to="#!" className="cta cta--underline cta--arrow">Get In Touch</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <div className="offeringslisting__box squareBox relative ">
                                <img src="/images/our-offerings/4.jpg" alt="" className="offeringslisting__img absolute" />
                                <div className="offeringslisting__text absolute Up">
                                    <img src="/images/our-offerings/phone.png" alt="" className="offeringslisting__icon" />
                                    <h3 className="offeringslisting__h3">Video Streaming App</h3>
                                    <p>Uniting audiences around the world to share their passion and unique interests.</p>
                                    <span href="#!" className="cta cta--underline cta--arrow">Get In Touch</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <div className="offeringslisting__box squareBox relative ">
                                <img src="/images/our-offerings/5.jpg" alt="" className="offeringslisting__img absolute" />
                                <div className="offeringslisting__text absolute Up">
                                    <img src="/images/our-offerings/youtube.png" alt="" className="offeringslisting__icon" />
                                    <h3 className="offeringslisting__h3">YouTube MCN</h3>
                                    <p>Uniting audiences around the world to share their passion and unique interests.</p>
                                    <span href="#!" className="cta cta--underline cta--arrow">Get In Touch</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <div className="offeringslisting__box squareBox relative ">
                                <img src="/images/our-offerings/6.jpg" alt="" className="offeringslisting__img absolute" />
                                <div className="offeringslisting__text absolute Up">
                                    <img src="/images/our-offerings/clapperboard.png" alt="" className="offeringslisting__icon" />
                                    <h3 className="offeringslisting__h3">Entertainment</h3>
                                    <p>Uniting audiences around the world to share their passion and unique interests.</p>
                                    <span href="#!" className="cta cta--underline cta--arrow">Get In Touch</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="news blackBg">
            <div className="paddingTopBottom">
                <div className="wrapper wrapper--small">
                    <h2 className="offerings__h2 title ">NEWS</h2>
                    <div className="news__slider paddingTop paddingTop--50">
                        <div className="swiper--news">
                            <Swiper slidesPerView={3}>
                                <SwiperSlide>
                                    <div className="news__box ">
                                        <Link to="/Newsinner">
                                            <img src="/images/news/1.jpg" alt="Jungo TV News" className="news__img" />
                                            <div className="news__date">04 MARCH 2021</div>
                                            <div className="news__topic">SOCIAL IMPACT</div>
                                            <h4 className="news__h4">Investing in the Next Generation of Women Storytellers</h4>
                                            <div className=""><span href="/Newsinner" className="cta cta--underline cta--arrow">Read More</span></div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="news__box ">
                                        <Link to="/Newsinner">
                                            <img src="/images/news/2.jpg" alt="Jungo TV News" className="news__img" />
                                            <div className="news__date">04 MARCH 2021</div>
                                            <div className="news__topic">INNOVATION</div>
                                            <h4 className="news__h4">How Many Stories Are Left Untold, Every Day?</h4>
                                            <div className=""><span href="/Newsinner" className="cta cta--underline cta--arrow">Read More</span></div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="news__box ">
                                        <Link to="/Newsinner">
                                            <img src="/images/news/3.jpg" alt="Jungo TV News" className="news__img" />
                                            <div className="news__date">04 MARCH 2021</div>
                                            <div className="news__topic">ENTERTAINMENT</div>
                                            <h4 className="news__h4">Investing in the Next Generation of Women Storytellers</h4>
                                            <div className=""><span href="/Newsinner" className="cta cta--underline cta--arrow">Read More</span></div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <Link to="/Newslisting" className="btn btn--red">VIEW ALL</Link>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export const query = graphql`
query offeringcover {

  offerngcover: file(relativePath: {eq: "aboutcover.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000,quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }

}
`