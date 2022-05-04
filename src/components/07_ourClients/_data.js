import icon1 from '../../images/нашиКлиенты/02.svg'
import icon2 from '../../images/нашиКлиенты/03.svg'
import icon3 from '../../images/нашиКлиенты/04.svg'
import locationIcon from '../../images/почемуВыбиратюНас/04.svg'

import bgWeb from '../../images/нашиКлиенты/01.webp'
import bgTab from '../../images/нашиКлиенты/01tab.webp'
import bgMob from '../../images/нашиКлиенты/01mob.webp'
import bgPreload from '../../images/нашиКлиенты/01preload.webp'
import bgIE from '../../images/нашиКлиенты/01ie.jpg'

export const Clients = [
  {
    name: 'Екатерина Романова', 
    amount: 'Получила отказ', 
    city: 'г. Москва', 
    status: icon1, 
    time: '45 сек',
    icon: locationIcon,
  },
  {
    name: 'Игорь Николаев', 
    amount: 'Взял 5 000 ₽', 
    city: 'г. Москва', 
    status: icon2, 
    time: '2 мин',
    icon: locationIcon,
  },
  {
    name: 'Светлана Борисовна', 
    amount: 'Внес на счет 12 000 ₽', 
    city: 'г. Москва', 
    status: icon3, 
    time: '45 сек',
    icon: locationIcon,
  },
  {
    name: 'Игорь Николаев', 
    amount: 'Взял 5 000 ₽', 
    city: 'г. Москва', 
    status: icon2, 
    time: '2 мин',
    icon: locationIcon,
  },
]

export const MediaClients = [bgWeb, bgTab, bgMob, bgPreload, bgIE]