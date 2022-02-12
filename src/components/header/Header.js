import { Link } from "react-router-dom";

import React from 'react'

const Header = () => {
  return (
    <header className="site-header">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="site-info">
                        <Link to="/"></Link>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    </header>
  )
}

export default Header
