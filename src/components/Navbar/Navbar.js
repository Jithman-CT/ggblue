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
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    };


    return (
        <div className='container'>
            <div className='Nav-container'>
                <div className='header-drawer' data-breakpoint='tablet'>
                    <div className='menu-drawer-container'>
                        <div className="nav-hamburger" onClick={handleClick}>
                            {click ? <GiCancel /> : <GiHamburgerMenu />}
                        </div>
                        <div className='menu-drawer' id='menu-drawer'>
                            <div className='menu-drawer-inner-contaienr'>
                                <div className='menu-drawer-navigation-container'>
                                    <nav className='menu-drawer-navigation'>
                                        <ul className='menu-drawer-nav-links'>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Nav-left-con'>

                    <h1 className='Brandlogo' onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
                        <Link to="/">
                            <img src={isHover ? BrandLogoHover : BrandLogo} alt="Brand Logo" width={161.5} height={40.75} />
                        </Link>
                    </h1>
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

                <div className='Nav-right-con'>
                    <form>
                        <label htmlFor="gsearch"></label>
                        <input type="search" id="gsearch" name="gsearch" />
                    </form>

                    <a href="tel:+1925-284-4042" className='header_icons'><img src={Phone} alt="phone icon" /></a>
                    <a href="/#" className='header_icons'><img src={User} alt="user icon" /></a>
                    <a href="/#" className='header_icons'><img src={Bag} alt="bag icon" /></a>

                </div>
            </div>
        </div>
    )
}

export default Navbar