import { Link } from "gatsby"
import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation} from 'swiper/core';
// Import Swiper styles
import 'swiper/swiper.scss';
import Layout from '../components/Layout'

SwiperCore.use([Autoplay, Navigation]);

export default function Home() {
  return (
   <center>Our site is down for maintenance!</center>
  )
}
