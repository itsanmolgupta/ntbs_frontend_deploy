import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <div className="footer container">
                <div className='top'>
                    <h2>NTBS, Thapathali Campus</h2>
                    <div className="flex-row">
                        <h4>Connect with us on :</h4>
                        <span>
                            <a href="http://facebook.com/ntbsthapathali" target='_blank' rel="noopener noreferrer"><FaFacebook /></a>
                        </span>
                    </div>
                </div>
                <div className="content">
                    <div className="left">
                        <p><span>&#169;</span> All rights reserved | ntbs.org.np</p>
                    </div>
                    <div className="flex-row-base">
                        Crafted with ❤ By :
                        <a href="https://guptaanmol.com.np" target='_blank' rel="noopener noreferrer">Anmol Gupta</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
