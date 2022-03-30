import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu, GiCancel } from "react-icons/gi"

// import image
import BrandLogo from "../../assets/icons/Logo_grey.png"
import BrandLogoHover from "../../assets/icons/Logo_hover.png"

import Phone from '../../assets/icons/Phone.svg'
import User from '../../assets/icons/User.svg'
import Bag from '../../assets/icons/Bag.svg'


const Navbar = () => {

    const [isHover, setIsHover] = useState(false);
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);


    return (
        <div className='container'>
            <div className='Nav-container'>
                <div className='Nav-left-con'>
                    <div className="nav-hamburger" onClick={handleClick}>
                        {click ? <GiCancel /> : <GiHamburgerMenu />}
                    </div>
                    <div className='Brandlogo' onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
                        <img src={isHover ? BrandLogoHover : BrandLogo} alt="Brand Logo"
                            width={161.5} height={40.75} />
                    </div>
                    <nav className='Navlinks-container'>
                        <ul className='Nav-links'>
                            <li>
                                <Link to="/" >New Arrivals</Link>
                            </li>
                            <li>
                                <Link to="/golf-apparel">Golf Apparel</Link>
                            </li>
                            <li>
                                <Link to="/tennis-apparel"> Tennis Apparel</Link>
                            </li>
                            <li>
                                <Link to="/ice"> ICE</Link>
                            </li>
                            <li>
                                <Link to="/sale">Sale</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='Nav-right-con'>
                    <form>
                        <label htmlFor="gsearch"></label>
                        <input type="search" id="gsearch" name="gsearch" />
                    </form>
                    <ul>
                        <li>
                            <img src={Phone} alt="phone icon" />
                        </li>
                        <li>
                            <img src={User} alt="user icon" />
                        </li>
                        <li>
                            <img src={Bag} alt="bag icon" />
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar