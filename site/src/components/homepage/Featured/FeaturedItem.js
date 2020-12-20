import React from "react"

const FeaturedItem = ({ className, imageUrl, alt, header, text }) => (
  <div className={className}>
    <img src={imageUrl} alt={alt} />
    <span>{header}</span>
    <p>{text}</p>
  </div>
)

export default FeaturedItem
