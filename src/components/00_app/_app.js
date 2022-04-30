import React, { Suspense, lazy } from "react"
import './_app'
import Header from "../01_header/_header"
import Calc from "../02_calc/_calc"
import Fallback from "./fallback/fallback"

const BestOffers = lazy(() => import("../03_bestOffers/_bestOffers"))
const HowGet = lazy(() => import("../04_howGet/_howGet"))
const WaysToGet = lazy(() => import("../05_waysToGet/_waysToGet"))
const Reviews = lazy(() => import("../06_reviews/_reviews"))
const OurClients = lazy(() => import("../07_ourClients/_ourClients"))
const AboutService = lazy(() => import("../08_AboutService/_AboutService"))
const Questions = lazy(() => import("../09_questions/_questions"))
const GetMoney = lazy(() => import("../10_getMoney/_getMoney"))
const Footer = lazy(() => import("../11_footer/_footer"))

export default function App() {
  return (
    <Suspense fallback={<Fallback />} >
      <Header />
      <Calc />
      <BestOffers />
      <HowGet />
      <WaysToGet />
      <Reviews />
      <OurClients />
      <AboutService />
      <Questions />
      <GetMoney />
      <Footer />
    </Suspense>
  )
}