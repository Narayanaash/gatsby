import { graphql, Link } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { Swiper, SwiperSlide } from "swiper/react"
import Img from "gatsby-image"
import SwiperCore, { Autoplay, Navigation} from "swiper/core"
import "swiper/swiper.scss"
import Layout from "../components/Layout"

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

SwiperCore.use([Autoplay, Navigation]);

export default function Home({ data }) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Jungo Tv</title>
      </Helmet>
      <div className="homePage loading">
        <section className="hero blackBg">
          <div className="hero__box">
            <div className="overlay"></div>
            <Img fluid={data.hero.childImageSharp.fluid} alt="Jungo TV" />
            <div className="wrapper wrapper--small">
              <h1 className="absolute absolute__center"><span className="showDiv delay0-5">WE DELIVER YOUR PASSION</span></h1>
            </div>
          </div>
        </section>
        <section className="aboutHead margin__top__pages">
          <div className="paddingTopBottom">
            <div className="wrapper wrapper--small">
              <h2 className="aboutHead__h2 text-center mb-0 showDiv">By delivering the best content in an individual’s niche interest, we enable fans to expand their knowledge</h2>
            </div>
          </div>
        </section>
        <section className="offerings blackBg zIndex">
          <div className="paddingTopBottom">
            <div className="wrapper wrapper--small">
              <h2 className="offerings__h2 title showDiv">OFFERINGS</h2>
              <p className="sub__title showDiv">Our mission at Jungo TV is to create the most extensive collection of entertainment in key passion verticals that are typically underserved by mainstream media companies</p>
              <div className="row relative">
                <div className="col-6 col-sm-12">
                  <ul className="offerings__list">
                    <li className="offerings__item d-flex showDiv" data-bg="/images/offerings/broadcast.jpg">
                      <img src="/images/icons/broadcast.png" alt="" className="offerings__icon" />
                      <div className="offerings__text transition">BROADCAST</div>
                    </li>
                    <li className="offerings__item d-flex showDiv" data-bg="/images/offerings/devices.jpg">
                      <img src="/images/icons/devices.png" alt="" className="offerings__icon" />
                      <div className="offerings__text transition">DEVICES</div>
                    </li>
                    <li className="offerings__item d-flex showDiv" data-bg="/images/offerings/dth.jpg">
                      <img src="/images/icons/dth.png" alt="" className="offerings__icon" />
                      <div className="offerings__text transition">DTH</div>
                    </li>
                    <li className="offerings__item d-flex showDiv" data-bg="/images/offerings/mobile-application.jpg">
                      <img src="/images/icons/mobile-application.png" alt="" className="offerings__icon" />
                      <div className="offerings__text transition">MOBILE APPLICATION</div>
                    </li>
                    <li className="offerings__item d-flex showDiv" data-bg="/images/offerings/movie-production.jpg">
                      <img src="/images/icons/movie-production.png" alt="" className="offerings__icon" />
                      <div className="offerings__text transition">MOVIE PRODUCTION</div>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-12">
                  <ul className="offerings__list">
                    <li className="offerings__item d-flex showDiv" data-bg="/images/offerings/syndication.jpg">
                      <img src="/images/icons/syndication.png" alt="" className="offerings__icon" />
                      <div className="offerings__text transition">SYNDICATION</div>
                    </li>
                    <li className="offerings__item d-flex showDiv" data-bg="/images/offerings/ott.jpg">
                      <img src="/images/icons/ott.png" alt="" className="offerings__icon" />
                      <div className="offerings__text transition">OTT</div>
                    </li>
                    <li className="offerings__item d-flex showDiv" data-bg="/images/offerings/inflight.jpg">
                      <img src="/images/icons/inflight.png" alt="" className="offerings__icon" />
                      <div className="offerings__text transition">INFLIGHT</div>
                    </li>
                    <li className="offerings__item d-flex showDiv" data-bg="/images/offerings/studio.jpg">
                      <img src="/images/icons/studio.png" alt="" className="offerings__icon" />
                      <div className="offerings__text transition">STUDIO</div>
                    </li>
                    <li className="offerings__item d-flex showDiv" data-bg="/images/offerings/home-entertainment.jpg">
                      <img src="/images/icons/home-entertainment.png" alt="" className="offerings__icon" />
                      <div className="offerings__text transition">HOME ENTERTAINMENT</div>
                    </li>
                  </ul>
                </div>
                <div className="offerings__hover__img d-flex"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="latest blackBg">
          <div className="paddingTopBottom">
            <div className="wrapper wrapper--small">
              <h2 className="latest__h2 title showDiv">LATEST</h2>
            </div>
            <div className="latest__sliders wrapper wrapper--fluid">
              <div className="swiper--top showDiv">
                <Swiper slidesPerView={3.5} centeredSlides={true} autoplay navigation loop={true}>
                  {data.latest.nodes.map(image => (
                    <SwiperSlide key={image.id}>
                      <Link to="#!">
                        <div className="overlay">
                          <div className="d-flex">WATCH NOW<span className="playIcon"></span></div>
                        </div>
                      </Link>
                      <div className="latest__box">
                        <Img fluid={image.childImageSharp.fluid} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="swiper--bottom showDiv">
                <Swiper slidesPerView={3.5} centeredSlides={true} autoplay navigation loop={true}>
                  {data.latest.nodes.reverse().map(image => (
                    <SwiperSlide key={image.id}>
                      <Link to="#!">
                        <div className="overlay">
                          <div className="d-flex">WATCH NOW<span className="playIcon"></span></div>
                        </div>
                      </Link>
                      <div className="latest__box">
                        <Img fluid={image.childImageSharp.fluid} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section className="aboutUsBanner blackBg">
          <div className="paddingTopBottom">
            <Link to="/AboutUs">
              <div className="aboutUsBanner__box parallax showDiv" style={{backgroundImage: "url("+"/images/about.jpg"+")"}}>
                <div className="overlay overlay--left">
                  <div className="wrapper wrapper--small d-flex">
                    <div className="mobSelfEnd">
                      <h2 className="aboutUsBanner__h2 title">ABOUT US</h2>
                      <p>While others do a good job of catering to the mainstream audience, opportunities for Jungo TV came to follow what we believe and what we are good at</p>
                      <span className="cta cta--underline cta--arrow">Learn More</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="watchAnywhere blackBg">
          <div className="paddingTop">
            <div className="wrapper wrapper--fluid text-center">
              <h2 className="watchAnywhere__h2 title showDiv">WATCH ANYWHERE. EVERYWHERE.</h2>
              <p className="showDiv">Jungo TV is the market leader in passion-centric programming, reaching over 2 billion views monthly and entertaining audiences globally across all devices</p>
              <img src="/images/mockup.jpg" alt="" className="watchAnywhere__mockup paddingTopBottom showDiv" />
            </div>
            <div className="wrapper wrapper--fluid">
              <div className="brands paddingTop--small">
                  <ul className="brands__list d-flex">
                    <li className="brands__item showDiv">
                      <img src="/images/brands/fire.png" alt="" className="brands__img" />
                    </li>
                    <li className="brands__item showDiv">
                      <img src="/images/brands/samsung.png" alt="" className="brands__img" />
                    </li>
                    <li className="brands__item showDiv">
                      <img src="/images/brands/philips.png" alt="" className="brands__img" />
                    </li>
                    <li className="brands__item showDiv">
                      <img src="/images/brands/lg.png" alt="" className="brands__img" />
                    </li>
                    <li className="brands__item showDiv">
                      <img src="/images/brands/vizio.png" alt="" className="brands__img" />
                    </li>
                    <li className="brands__item showDiv">
                      <img src="/images/brands/tcl.png" alt="" className="brands__img" />
                    </li>
                    <li className="brands__item showDiv">
                      <img src="/images/brands/apple-tv.png" alt="" className="brands__img" />
                    </li>
                    <li className="brands__item showDiv">
                      <img src="/images/brands/roku.png" alt="" className="brands__img" />
                    </li>
                    <li className="brands__item showDiv">
                      <img src="/images/brands/appstore.png" alt="" className="brands__img" />
                    </li>
                    <li className="brands__item showDiv">
                      <img src="/images/brands/playstore.png" alt="" className="brands__img" />
                    </li>
                    <li className="brands__item showDiv">
                      <img src="/images/brands/web.png" alt="" className="brands__img" />
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </section>
        <section className="insights blackBg">
          <div className="paddingTopBottom">
            <div className="insights__box relative parallax showDiv" style={{backgroundImage: "url("+"/images/insights.jpg"+")"}}>
              <Link to="#!">
                <div className="overlay overlay--right"></div>
                <div className="wrapper wrapper--small d-flex">
                  <div className="left">
                    <h2 className="insights__h2 title">JUNGO INSIGHTS</h2>
                  </div>
                  <div className="right">
                    <h3>Collecting Data<br/>An Ethical Primer.</h3>
                    <p>Jungo enables fans to expand their knowledge, and deep dive into a world with content, creators, and fans who also share the same passion.</p>
                    <span className="cta cta--underline cta--arrow">Learn More</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="news blackBg">
          <div className="paddingTopBottom">
            <div className="wrapper wrapper--small">
              <h2 className="offerings__h2 title showDiv">NEWS</h2>
              <div className="news__slider paddingTop paddingTop--50">
                <div className="swiper--news">
                  <Swiper slidesPerView={3} navigation>
                      <SwiperSlide>
                        <div className="news__box showDiv showDivRight">
                          <Link to="/Newslisting">
                            <img src="/images/news/1.jpg" alt="Jungo TV News" className="news__img" />
                            <div className="news__date">04 MARCH 2021</div>
                            <div className="news__topic">SOCIAL IMPACT</div>
                            <h4 className="news__h4">Investing in the Next Generation of Women Storytellers</h4>
                            <div className="showDiv"><span className="cta cta--underline cta--arrow">Read More</span></div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="news__box showDiv showDivRight">
                          <Link to="/Newslisting">
                            <img src="/images/news/2.jpg" alt="Jungo TV News" className="news__img" />
                            <div className="news__date">04 MARCH 2021</div>
                            <div className="news__topic">INNOVATION</div>
                            <h4 className="news__h4">How Many Stories Are Left Untold, Every Day?</h4>
                            <div className="showDiv"><span className="cta cta--underline cta--arrow">Read More</span></div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="news__box showDiv showDivRight">
                          <Link to="/Newslisting">
                            <img src="/images/news/3.jpg" alt="Jungo TV News" className="news__img" />
                            <div className="news__date">04 MARCH 2021</div>
                            <div className="news__topic">ENTERTAINMENT</div>
                            <h4 className="news__h4">Investing in the Next Generation of Women Storytellers</h4>
                            <div className="showDiv"><span className="cta cta--underline cta--arrow">Read More</span></div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="news__box showDiv showDivRight">
                          <Link to="/Newslisting">
                            <img src="/images/news/1.jpg" alt="Jungo TV News" className="news__img" />
                            <div className="news__date">04 MARCH 2021</div>
                            <div className="news__topic">SOCIAL IMPACT</div>
                            <h4 className="news__h4">Investing in the Next Generation of Women Storytellers</h4>
                            <div className="showDiv"><span className="cta cta--underline cta--arrow">Read More</span></div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="news__box showDiv showDivRight">
                          <Link to="/Newslisting">
                            <img src="/images/news/2.jpg" alt="Jungo TV News" className="news__img" />
                            <div className="news__date">04 MARCH 2021</div>
                            <div className="news__topic">SOCIAL IMPACT</div>
                            <h4 className="news__h4">Investing in the Next Generation of Women Storytellers</h4>
                            <div className="showDiv"><span className="cta cta--underline cta--arrow">Read More</span></div>
                          </Link>
                        </div>
                      </SwiperSlide>
                  </Swiper>
                </div>
                <div className="swiper-button-next" data-async="assets/img/icons/next-red.png"></div>
                <div className="swiper-button-prev"></div>
              </div>
              <Link to="/Newslisting" className="btn btn--red showDivRight">VIEW ALL</Link>
            </div>
          </div>
        </section>
        <section className="watchNow blackBg">
          <div className="paddingTop">
            <div className="watchNow__box relative lazyload showDiv" style={{backgroundImage: "url("+"/images/watch-now.jpg"+")"}}>
              <div className="wrapper wrapper-small">
                <Link to="#!">
                  <div className="overlay"></div>
                  <h2 className="watchNow__h2 title absolute absolute__center"><span>WATCH N<span>O</span> W</span></h2>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
query Images {
  hero: file(relativePath: {eq: "hero.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000,quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }

  latest: allFile(filter: {relativeDirectory: {eq: "latest"}}) {
    nodes {
      id
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
}
`