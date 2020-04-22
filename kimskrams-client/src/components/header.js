import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import "./header.scss"
const Header = ({ siteTitle }) => (
  <header className="header">
    <Navigation></Navigation>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
