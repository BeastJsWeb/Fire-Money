import React from "react";
import './_app'
import Header from "../01_header/_header";
import Calc from "../02_calc/_calc";
import BestOffers from "../03_bestOffers/_bestOffers";
import HowGet from "../04_howGet/_howGet";
import WaysToGet from "../05_waysToGet/_waysToGet";
import Reviews from "../06_reviews/_reviews";
import OurClients from "../07_ourClients/_ourClients";


function App() {
  return (
   <>
     <Header />
     <Calc />
     <BestOffers />
     <HowGet />
     <WaysToGet />
     <Reviews />
     <OurClients />
   </>
  )
}
export default App;