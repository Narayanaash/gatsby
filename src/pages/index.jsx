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
        </div>
    </Layout>
  )
}
