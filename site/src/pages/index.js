import React from "react"
import Hero from "components/homepage/Hero/Hero"
import Featured from "components/homepage/Featured/Featured"
import StayProductive from "components/homepage/StayProductive/StayProductive"
import Testimonials from "components/homepage/Testimonials/Testimonials"
import EarlyAccess from "components/homepage/EarlyAccess/EarlyAccess"
import Footer from "components/shared/Footer/Footer"

const IndexPage = () => (
  <>
    <Hero />
    <Featured />
    <StayProductive />
    <Testimonials />
    <EarlyAccess />
    <Footer />
  </>
)

export default IndexPage
