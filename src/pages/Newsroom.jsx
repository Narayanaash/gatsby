import React from 'react'
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from '../components/Layout'

export default function Newsroom({ data }) {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Newsroom | Jungo Tv</title>
            </Helmet>
            <section className="pageCover blackBg">
                <div className="pageCover__box lazyBg">
                    <div className="overlay overlay--20"></div>
                    <Img fluid={data.newsroomcover.childImageSharp.fluid} alt="Jungo TV" className="pageCover__img" />
                    <div className="wrapper wrapper--large">
                        <div className="breadcrumb breadcrumbTopPadding">
                            <ul className="breadcrumb__list d-flex">
                                <li className="breadcrumb__item">
                                    <Link to="/" className="breadcrumb__link">Home</Link>
                                </li>
                                <li className="breadcrumb__item">
                                    <Link to="javascript:void(0);" className="breadcrumb__link">Newsroom</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="wrapper wrapper--small">
                        <h1 className="absolute absolute__center"><span className=" delay0-5">NEWSROOM</span></h1>
                    </div>
                </div>
            </section>

            <section className="newsHead blackBg margin__top__pages">
                <div className="paddingTopBottom">
                    <div className="wrapper wrapper--small">
                        <div className="news__date ">04 MARCH 2021</div>
                        <h2 className="newsHead__h2 "><Link to="/Newsinner">Investing in the Next Generation of Women Storytellers</Link></h2>
                        <div className=""><Link to="/Newsinner" className="cta cta--underline cta--arrow">Read More</Link></div>
                    </div>
                </div>
            </section>

            <section className="news news--onlyText blackBg zIndex">
                <div className="paddingTopBottom">
                    <div className="wrapper wrapper--small">
                        <h2 className="offerings__h2 title ">PRESS RELEASE</h2>
                        <div className="paddingTop paddingTop--50">
                            <div className="row">
                                <div className="col-4 col-sm-6 col-xs-12">
                                    <div className="news__box ">
                                        <Link to="/Newsinner">
                                            <div className="news__date ">04 MARCH 2021</div>
                                            <div className="news__topic ">SOCIAL IMPACT</div>
                                            <h4 className="news__h4 ">Investing in the Next Generation of Women Storytellers</h4>
                                            <span className=""><span href="#!" className="cta cta--underline cta--arrow">Read More</span></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-4 col-sm-6 col-xs-12">
                                    <div className="news__box  delay0-5">
                                        <Link to="/Newsinner">
                                            <div className="news__date ">04 MARCH 2021</div>
                                            <div className="news__topic ">INNOVATION</div>
                                            <h4 className="news__h4 ">How Many Stories<br/>Are Left Untold, Every Day?</h4>
                                            <span className=""><span href="#!" className="cta cta--underline cta--arrow">Read More</span></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-4 col-sm-6 col-xs-12">
                                    <div className="news__box  delay0-7">
                                        <Link to="/Newsinner">
                                            <div className="news__date ">04 MARCH 2021</div>
                                            <div className="news__topic ">ENTERTAINMENT</div>
                                            <h4 className="news__h4 ">Investing in the Next Generation of Women Storytellers</h4>
                                            <span className=""><span href="#!" className="cta cta--underline cta--arrow">Read More</span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/Presslisting" className="btn btn--red ">VIEW ALL</Link>
                    </div>
                </div>
            </section>

            <section className="news news--listing blackBg">
                <div className="paddingTopBottom">
                    <div className="wrapper wrapper--small">
                        <h2 className="offerings__h2 title ">NEWS</h2>
                        <div className="row mb-0">
                            <div className="col-4 col-sm-6 col-xs-12">
                                <div className="news__box paddingTop--50 ">
                                    <Link to="/Newsinner">
                                        <img src="/images/news/1.jpg" alt="Jungo TV News" className="news__img" />
                                        <div className="news__date ">04 MARCH 2021</div>
                                        <div className="news__topic ">SOCIAL IMPACT</div>
                                        <h4 className="news__h4 ">Investing in the Next Generation of Women Storytellers</h4>
                                        <div className=""><span href="/Newsinner" className="cta cta--underline cta--arrow">Read More</span></div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-4 col-sm-6 col-xs-12">
                                <div className="news__box paddingTop--50 ">
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
                            <div className="news__box paddingTop--50 ">
                                <Link to="/Newsinner">
                                    <img src="/images/news/3.jpg" alt="Jungo TV News" className="news__img" />
                                    <div className="news__date ">04 MARCH 2021</div>
                                    <div className="news__topic ">ENTERTAINMENT</div>
                                    <h4 className="news__h4 ">Investing in the Next Generation of Women Storytellers</h4>
                                    <div className=""><span href="/Newsinner" className="cta cta--underline cta--arrow">Read More</span></div>
                                </Link>
                            </div>
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
query newsroomcover {

  newsroomcover: file(relativePath: {eq: "newscover.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000,quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }

}
`
