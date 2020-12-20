import React from "react"

import HeroImage from "assets/images/illustration-intro.png"
import CurveImageMobile from "assets/images/bg-curvy-mobile.svg"
import {
  HeroWrapper,
  HeroImageWrapper,
  HeroLead,
  HeroCurveWrapper,
  HeroTextWrapper,
} from "./styles"
import Button from "components/common/Button/Button"

const Hero = () => (
  <HeroWrapper>
    <HeroImageWrapper>
      <img
        src={HeroImage}
        alt="illustration of people taking papers from a huge file folder"
      />
    </HeroImageWrapper>
    <HeroCurveWrapper>
      <img src={CurveImageMobile} alt="curved shape of a wave" />
    </HeroCurveWrapper>
    <HeroLead>
      All your files in one secure location, accessible anywhere.
    </HeroLead>
    <HeroTextWrapper>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <Button>Get Started</Button>
    </HeroTextWrapper>
  </HeroWrapper>
)

export default Hero
