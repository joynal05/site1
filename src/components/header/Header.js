import { Link } from "react-router-dom";
import './Header.css'

import React from 'react'

const Header = () => {
  return (
    <header className="site-header">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="site-info">
                        <Link to="/">
                            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="header-menu flex-right">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
