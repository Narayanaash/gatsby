import React from 'react'
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from '../components/Layout'

export default function Newsinner() {
    return (
         <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Investing in the Next Generation of Women Storytellers | Jungo Tv</title>
            </Helmet>
            <section class="pageCover blackBg">
                <div class="pageCover__box lazyBg">
                    <div class="overlay overlay--20"></div>
                    <img src="/images/news/inner/cover.jpg" alt="Jungo TV" class="pageCover__img" />
                    <div class="wrapper wrapper--large">
                        <div class="breadcrumb breadcrumbTopPadding">
                            <ul class="breadcrumb__list d-flex">
                                <li class="breadcrumb__item">
                                    <Link to="/" class="breadcrumb__link">Home</Link>
                                </li>
                                <li class="breadcrumb__item">
                                    <Link to="/Newsroom" class="breadcrumb__link">Newsroom</Link>
                                </li>
                                <li class="breadcrumb__item">
                                    <Link to="javascript:void(0);" class="breadcrumb__link">Investing in the Next Generation of Women Storytellers</Link>
                                </li>
                            </ul>
                    </div>
                    </div>
                </div>
            </section>

            <section class="newsInner blackBg margin__top__pages zIndex">
                <div class="paddingTopBottom">
                    <div class="wrapper wrapper--small">
                        <div class="news__date">04 MARCH 2021</div>
                        <h3 class="newsInner__h3">Investing in the Next Generation of Women Storytellers</h3>
                        <p class="">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p class="">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <img src="/images/news/inner/1.jpg" alt="" class="newsInner__img" />
                        <p class="">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p class="">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <img src="/images/news/inner/2.jpg" alt="" class="newsInner__img" />
                        <p class="">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p class="">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <div class="row">
                            <div class="col-6 col-xs-12">
                                <img src="/images/news/inner/3.jpg" alt="" class="newsInner__img" />
                            </div>
                            <div class="col-6 col-xs-12">
                                <img src="/images/news/inner/4.jpg" alt="" class="newsInner__img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           </Layout>
    )
}
