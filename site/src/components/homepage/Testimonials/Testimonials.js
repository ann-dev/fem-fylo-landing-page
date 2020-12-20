import React from "react"

import { TestimonialsWrapper } from "./styles"
import TestimonialItem from "./TestimonialItem/TestimonialItem"
import ProfilePicture_Satish from "assets/images/profile-1.jpg"
import ProfilePicture_Bruce from "assets/images/profile-2.jpg"
import ProfilePicture_Iva from "assets/images/profile-3.jpg"

const Testimonials = () => (
  <TestimonialsWrapper>
    <TestimonialItem
      text="Fylo has improved our team productivity by an order of magnitude. Since
      making the switch our team has become a well-oiled collaboration machine."
      imageSrc={ProfilePicture_Satish}
      fullName="Satish Patel"
      jobTitle="Founder & CEO, Huddle"
    />
    <TestimonialItem
      text="Fylo has improved our team productivity by an order of magnitude. Since
      making the switch our team has become a well-oiled collaboration machine."
      imageSrc={ProfilePicture_Bruce}
      fullName="Bruce McKenzie"
      jobTitle="Founder & CEO, Huddle"
    />
    <TestimonialItem
      text="Fylo has improved our team productivity by an order of magnitude. Since
      making the switch our team has become a well-oiled collaboration machine."
      imageSrc={ProfilePicture_Iva}
      fullName="Satish Patel"
      jobTitle="Founder & CEO, Huddle"
    />
  </TestimonialsWrapper>
)

export default Testimonials
