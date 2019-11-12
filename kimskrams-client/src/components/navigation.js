import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Logo from "./logo/logo"
import BurgerMenu from "./burger-menu"

import "./navigation.scss"

function navigation() {
  return (
    <div className="navigation">
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
          zIndex: "7",
          position: "relative",
        }}
      >
        <Logo></Logo>
      </Link>
      <StaticQuery
        className="desktop-navigation"
        query={graphql`
          query AllCategories {
            allContentfulKategorie {
              nodes {
                name
                slug
              }
            }
          }
        `}
        render={data => (
          <>
            {data.allContentfulKategorie.nodes.map((category, i) => {
              return (
                <div className="navigation-link-container" key={i}>
                  <Link
                    className="navigation-link"
                    to={"/" + category.slug}
                    activeClassName="active"
                  >
                    {category.name}
                  </Link>
                </div>
              )
            })}
          </>
        )}
      />
      <BurgerMenu className="mobile-navigation"></BurgerMenu>
    </div>
  )
}

export default navigation
