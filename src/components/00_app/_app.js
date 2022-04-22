import React from "react";
import './_app'
import Header from "../01_header/_header";
import Calc from "../02_calc/_calc";
import BestOffers from "../03_bestOffers/_bestOffers";
import HowGet from "../04_howGet/_howGet";


function App() {
  return (
   <>
     <Header />
     <Calc />
     <BestOffers />
     <HowGet />
   </>
  )
}
export default App;