import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title, description, shareImage }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="My Site" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={shareImage} />
    {/* <meta property="twitter:card" content="summary_large_image" /> */}
    <link rel="icon" href="assets/images/favicon-32x32.png" />
    <html lang="en" />
  </Helmet>
)

export default Head
