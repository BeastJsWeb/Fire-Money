import React, { useState, useEffect } from 'react'
import './_ourClients.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Сlient from './ourClients__client'
import { Clients, MediaClients } from './_data'
import lozad from 'lozad'

const [bgWeb, bgTab, bgMob, bgPreload, bgIE] = MediaClients
const observer = lozad()
observer.observe()

export default function OurClients() {
  const [speed, setSpeed] = useState(3000)
  
  useEffect(() => {
    setInterval(() => setSpeed(
      Math.floor(Math.random() * (6000 - 1000 + 1)) + 1500
    ), 5000)

    return () => { 
      setInterval(() => setSpeed(
        Math.floor(Math.random() * (6000 - 1000 + 1)) + 1500
      ), 5000) 
    }
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: speed,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    swipe: false,
    
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
  
  return (
    <section id="ourClients">
      <div>
        <div id='ourClients__title'>Наши клиенты</div>
  
        <div>
          <Slider {...settings} >
              {Clients.map(client => (
                <Сlient {...client} key={client.name} />
              ))}
          </Slider>
        </div>
        
        <picture className='lozad' data-iesrc={bgIE} data-alt="bg">
          <source srcSet={bgWeb} media="(min-width: 1280px)" />
          <source srcSet={bgTab} media="(min-width: 768px)" />
          <source srcSet={bgMob} media="(min-width: 320px)" />
          <img src={bgPreload} width={1920} height={320} alt="bg" />
        </picture>
        
      </div>
    </section>
  )
}

