import React, { Component } from 'react'
import GlobalBthOnForm from '../00_app/GlobalBthOnForm'
import './_reviews.scss'
import Review from './review'
import foto1 from '../../images/почемуВыбиратюНас/01.webp'
import foto2 from '../../images/почемуВыбиратюНас/02.webp'
import foto3 from '../../images/почемуВыбиратюНас/03.webp'
import locationIcon from '../../images/почемуВыбиратюНас/04.svg'
import star4 from '../../images/почемуВыбиратюНас/05-4.svg'
import star5 from '../../images/почемуВыбиратюНас/05-5.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewsData = [
  {
    photo: foto1, 
    name: 'Екатерина Романова, 26 лет',
    city: 'г. Москва',
    review: `Для того, чтобы воспользоваться услугой, вам необходимо лишь 
    заполнить анкету на сайте, все остальное сервис сделает за вас,
    сэкономив вам большое количество времени и сил. Наш сервис работает 
    со всеми клиентами, нам не важно, какая у вас кредитная история и 
    имеются ли текущие просрочки.`,
    icon: locationIcon,
    vote: star4
  },
  {
    photo: foto2, 
    name: 'Екатерина Романова, 33 года ',
    city: 'г. Москва',
    review: `Для того, чтобы воспользоваться услугой, вам необходимо лишь
    заполнить анкету на сайте, все остальное сервис сделает за вас,
    сэкономив вам большое количество времени и сил. Наш сервис работает
    со всеми клиентами, нам не важно, какая у вас кредитная`,
    icon: locationIcon,
    vote: star5
  },
  {
    photo: foto3, 
    name: 'Екатерина Романова, 29 года ',
    city: 'г. Москва',
    review: `Для того, чтобы воспользоваться услугой, вам необходимо лишь 
    заполнить анкету на сайте, все остальное сервис сделает за вас,
    сэкономив вам большое количество времени и сил. Наш сервис работает 
    со всеми клиентами, нам не важно, какая у вас кредитная история и 
    имеются ли текущие просрочки.`,
    icon: locationIcon,
    vote: star4
  },
  {
    photo: foto2, 
    name: 'Екатерина Романова, 33 года ',
    city: 'г. Москва',
    review: `Для того, чтобы воспользоваться услугой, вам необходимо лишь
    заполнить анкету на сайте, все остальное сервис сделает за вас,
    сэкономив вам большое количество времени и сил. Наш сервис работает
    со всеми клиентами, нам не важно, какая у вас кредитная`,
    icon: locationIcon,
    vote: star5
  },
]

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
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
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
