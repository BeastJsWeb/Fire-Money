import React from 'react'
import './_footer.scss'
import Nav from './footer__nav/footer__nav'
import CreditList from './footer__creditList'
import PayAndData from './footer__payAndData'
import FollowUs from './footer__followUs'
import {FooterData, Companys, PayData, Rules, Us} from './_data'

const [bgWeb, bgTab, bgMob] = FooterData
const {CompanysTitle, CompanysList} = Companys
const {RulesTitle, RulesText} = Rules
const {svg18, FollowUsText, FollowUsMedia} = Us

export default function Footer() {
  return (
    <footer>
      <picture>
        <source srcSet={bgWeb} media="(min-width: 1440px)" />
        <source srcSet={bgTab} media="(min-width: 768px)" />
        <source srcSet={bgMob} media="(min-width: 320px)" />
        <img src={bgMob} width={1920} height={320} alt="footer__Bg" />
      </picture>

      <div>
        <Nav data={FooterData} />

        <CreditList 
        title={CompanysTitle} 
        data={CompanysList} />

        <PayAndData 
        data={PayData} />

        <CreditList 
        title={RulesTitle} 
        data={RulesText} />

        <FollowUs 
        icon={svg18} 
        text={FollowUsText} 
        data={FollowUsMedia} />
      </div>
    </footer>
  )
}
