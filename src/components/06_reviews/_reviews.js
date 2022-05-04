import React from 'react'
import GlobalBthOnForm from '../00_app/GlobalBthOnForm'
import { ReviewsData, Settings } from './_data'
import './_reviews.scss'
import Review from './review'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reviews() {
  return (
    <section id="reviews">
      <div>
        <div id='reviews__title'>Почему выбирают нас</div>
  
        <div>
          <Slider {...Settings} >
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
