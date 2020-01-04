import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.siteTitle}>
      <h1 style={{ margin: 0 }}>
        <Link to={`/`}>{siteTitle}</Link>
      </h1>
    </div>
    <div className={headerStyles.navbar}>
        <ul>
          <li>
          <Link style={{ margin: `5px` }} to="/about">About</Link>
          </li>
          <li>
            <Link style={{ margin: `5px` }} to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link style={{ margin: `5px` }} to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
