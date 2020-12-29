import React from "react"
import GlobalStyle from "assets/styles/globalStyles"
import Navigation from "components/shared/Navigation/Navigation"
import Footer from "components/shared/Footer/Footer"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
    <Footer />
  </>
)

export default MainLayout
