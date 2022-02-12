import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="footer-copyright-text text-center">
                        <p>© 2022 All Right Reserved, <Link to="/">Joynal</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer