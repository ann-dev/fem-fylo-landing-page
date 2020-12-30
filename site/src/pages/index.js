import React from "react"

import Head from "components/shared/Head"
import Hero from "components/homepage/Hero/Hero"
import Featured from "components/homepage/Featured/Featured"
import StayProductive from "components/homepage/StayProductive/StayProductive"
import Testimonials from "components/homepage/Testimonials/Testimonials"
import EarlyAccess from "components/homepage/EarlyAccess/EarlyAccess"

const IndexPage = () => (
  <>
    <Head
      title="Frontend Mentor | Fylo landing page with dark theme and features grid"
      description="Responsive page design challenge - landing page built with Gatsby.js and styled components"
      shareImage="assets/images/illustration-intro.png"
    />
    <Hero />
    <Featured />
    <StayProductive />
    <Testimonials />
    <EarlyAccess />
  </>
)

export default IndexPage
