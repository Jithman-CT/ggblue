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
                            {click ? <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-close" fill="none" viewBox="0 0 18 17">
                                <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
                                </path></svg> : <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-hamburger" fill="none" viewBox="0 0 18 16">
                                <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor">
                                </path></svg>}
                        </div>
                        <div className={`menu-drawer ${click ? 'open' : ''}`} id='menu-drawer'>
                            <div className='menu-drawer-inner-container'>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.183" height="16" viewBox="0 0 15.183 16">
                        <path id="Search" d="M-35.269,17.134l-3.086-3.086a7.086,7.086,0,0,0,0-10.021,7.087,7.087,0,0,0-10.022,0,7.086,7.086,0,0,0,0,10.021,7.085,7.085,0,0,0,9.137.749l3.154,3.154Zm-13.9-8.007a5.842,5.842,0,0,1,5.842-5.84,5.842,5.842,0,0,1,5.84,5.842,5.842,5.842,0,0,1-5.841,5.84A5.847,5.847,0,0,1-49.168,9.127Z" transform="translate(50.452 -1.952)"></path>
                    </svg>
                    <a href="tel:+1925-284-4042" className='header_icons'><img src={Phone} alt="phone icon" /></a>
                    <a href="/#" className='header_icons'><img src={User} alt="user icon" /></a>
                    <a href="/#" className='header_icons'><img src={Bag} alt="bag icon" /></a>

                </div>
            </div>
        </div>
    )
}

export default Navbar