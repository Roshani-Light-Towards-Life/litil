import React from "react"  
import PropTypes from "prop-types"

import Seo from "./seo"
import Navigation from "./navigation"

const Layout = ({ children }) => {  
  return (
    <>
      <Seo />
      <Navigation />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {  
  children: PropTypes.node.isRequired,
}

export default Layout  