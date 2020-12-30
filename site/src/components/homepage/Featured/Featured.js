import React from "react"

import FeaturedItem from "./FeaturedItem"
import { FeaturedWrapper, FeaturedGrid } from "./styles"
import FeaturedItem_Location from "assets/images/icon-access-anywhere.svg"
import FeaturedItem_Security from "assets/images/icon-security.svg"
import FeaturedItem_Collab from "assets/images/icon-collaboration.svg"
import FeaturedItem_Files from "assets/images/icon-any-file.svg"

const Featured = () => (
  <FeaturedWrapper>
    <FeaturedGrid>
      <FeaturedItem
        className="featured-item margin-bottom access-item"
        imageUrl={FeaturedItem_Location}
        header="Access your files, anywhere"
        text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        alt="Desktop monitor displaing a map and a mobile phone"
      />
      <FeaturedItem
        className="featured-item margin-bottom security-item"
        imageUrl={FeaturedItem_Security}
        header="Security you can trust"
        text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        alt="Shield with approved sign"
      />
      <FeaturedItem
        className="featured-item margin-bottom collab-item"
        imageUrl={FeaturedItem_Collab}
        header="Real-time collaboration"
        text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        alt="Group of people in front of a huge clock"
      />
      <FeaturedItem
        className="featured-item"
        imageUrl={FeaturedItem_Files}
        header="Store any type of file"
        text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        alt="File folder"
      />
    </FeaturedGrid>
  </FeaturedWrapper>
)

export default Featured
