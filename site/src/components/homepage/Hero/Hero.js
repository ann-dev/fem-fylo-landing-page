import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import Button from "components/common/Button/Button"
import HeroImage from "assets/images/illustration-intro.png"
import CurveImageMobile from "assets/images/bg-curvy-mobile.svg"
import CurveImageDesktop from "assets/images/bg-curvy-desktop.svg"
import {
  HeroWrapper,
  HeroLead,
  HeroMediaWrapper,
  HeroImageWrapper,
  HeroCurveWrapper,
  HeroTextWrapper,
} from "./styles"

const Hero = () => (
  <HeroWrapper>
    <HeroMediaWrapper>
      <HeroImageWrapper>
        <img
          src={HeroImage}
          alt="illustration of people taking papers from a huge file folder"
        />
      </HeroImageWrapper>
      <HeroCurveWrapper>
        <img
          src={CurveImageMobile}
          srcSet={`${CurveImageMobile} 300w, ${CurveImageDesktop} 768w`}
          alt="curved shape of a wave"
        />
      </HeroCurveWrapper>
    </HeroMediaWrapper>
    <HeroLead>
      All your files in one secure location, accessible anywhere.
    </HeroLead>
    <HeroTextWrapper>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <Button onClick={() => scrollTo("#early-access")}>Get Started</Button>
    </HeroTextWrapper>
  </HeroWrapper>
)

export default Hero
