import { Link } from "gatsby"
import React from "react"
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="homePage loading">
        <section className="hero blackBg">
          <div className="hero__box">
            <div className="overlay"></div>
            <img src="/images/hero.jpg" alt="Jungo TV" className="hero__img" />
            <div className="wrapper wrapper--small">
              <h1 className="absolute absolute__center"><span className="showDiv delay0-5">WE DELIVER YOUR PASSION</span></h1>
            </div>
          </div>
        </section>
        <section class="aboutHead margin__top__pages">
          <div class="paddingTopBottom">
            <div class="wrapper wrapper--small">
              <h2 class="aboutHead__h2 text-center mb-0 showDiv">By delivering the best content in an individual’s niche interest, we enable fans to expand their knowledge</h2>
            </div>
          </div>
        </section>
        <section class="offerings blackBg zIndex">
          <div class="paddingTopBottom">
            <div class="wrapper wrapper--small">
              <h2 class="offerings__h2 title showDiv">OFFERINGS</h2>
              <p class="sub__title showDiv">Our mission at Jungo TV is to create the most extensive collection of entertainment in key passion verticals that are typically underserved by mainstream media companies</p>
              <div class="row relative">
                <div class="col-6 col-sm-12">
                  <ul class="offerings__list">
                    <li class="offerings__item d-flex showDiv" data-bg="/images/offerings/broadcast.jpg">
                      <img src="/images/icons/broadcast.png" alt="" class="offerings__icon" />
                      <div class="offerings__text transition">BROADCAST</div>
                    </li>
                    <li class="offerings__item d-flex showDiv" data-bg="/images/offerings/devices.jpg">
                      <img src="/images/icons/devices.png" alt="" class="offerings__icon" />
                      <div class="offerings__text transition">DEVICES</div>
                    </li>
                    <li class="offerings__item d-flex showDiv" data-bg="/images/offerings/dth.jpg">
                      <img src="/images/icons/dth.png" alt="" class="offerings__icon" />
                      <div class="offerings__text transition">DTH</div>
                    </li>
                    <li class="offerings__item d-flex showDiv" data-bg="/images/offerings/mobile-application.jpg">
                      <img src="/images/icons/mobile-application.png" alt="" class="offerings__icon" />
                      <div class="offerings__text transition">MOBILE APPLICATION</div>
                    </li>
                    <li class="offerings__item d-flex showDiv" data-bg="/images/offerings/movie-production.jpg">
                      <img src="/images/icons/movie-production.png" alt="" class="offerings__icon" />
                      <div class="offerings__text transition">MOVIE PRODUCTION</div>
                    </li>
                  </ul>
                </div>
                <div class="col-6 col-sm-12">
                  <ul class="offerings__list">
                    <li class="offerings__item d-flex showDiv" data-bg="/images/offerings/syndication.jpg">
                      <img src="/images/icons/syndication.png" alt="" class="offerings__icon" />
                      <div class="offerings__text transition">SYNDICATION</div>
                    </li>
                    <li class="offerings__item d-flex showDiv" data-bg="/images/offerings/ott.jpg">
                      <img src="/images/icons/ott.png" alt="" class="offerings__icon" />
                      <div class="offerings__text transition">OTT</div>
                    </li>
                    <li class="offerings__item d-flex showDiv" data-bg="/images/offerings/inflight.jpg">
                      <img src="/images/icons/inflight.png" alt="" class="offerings__icon" />
                      <div class="offerings__text transition">INFLIGHT</div>
                    </li>
                    <li class="offerings__item d-flex showDiv" data-bg="/images/offerings/studio.jpg">
                      <img src="/images/icons/studio.png" alt="" class="offerings__icon" />
                      <div class="offerings__text transition">STUDIO</div>
                    </li>
                    <li class="offerings__item d-flex showDiv" data-bg="/images/offerings/home-entertainment.jpg">
                      <img src="/images/icons/home-entertainment.png" alt="" class="offerings__icon" />
                      <div class="offerings__text transition">HOME ENTERTAINMENT</div>
                    </li>
                  </ul>
                </div>
                <div class="offerings__hover__img d-flex"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
