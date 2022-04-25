import React, { Component } from 'react'
import GlobalBthOnForm from '../00_app/GlobalBthOnForm'
import { ReviewsData } from './_data'
import './_reviews.scss'
import Review from './review'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Reviews extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      arrows: false,
      
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            speed: 1000
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            speed: 300
          }
        }
      ]
    }

    return (
      <section id="reviews">
        <div>
          <div id='reviews__title'>Почему выбирают нас</div>
    
          <div>
            <Slider {...settings} >
                {ReviewsData.map(review => (
                  <Review {...review} key={review.name} />
                ))}
            </Slider>
          </div>
            
          <GlobalBthOnForm />
        </div>
      </section>
    )
  }
}
