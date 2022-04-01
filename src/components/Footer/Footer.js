import React, { useState } from 'react'
import BrandLogoGray from "../../assets/icons/Logo_grey.png";
import BrandColorLogo from "../../assets/icons/Logo_hover.png"

import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';



const Footer = () => {

    const [isHover, setIsHover] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = (e) => {
        setClick(!click)
    }

    // const footerDataObj = [{
    //     title: "Help",
    //     lists: ['Contact', 'my Account', 'Shipping', 'Returns', 'Size Guide', 'Privacy Policy']
    // },
    // {
    //     title: "SHOP",
    //     lists: ['Tops', 'Bottoms', 'Outerwear', 'Essentials', 'Dresses', 'Gift Cards ']
    // },
    // {
    //     title: "EXPLORE",
    //     lists: ['Blog', 'About']
    // }]

    return (
        <div className='container'>
            <div className='footer-content-container'>
                <div className='footer-content-wrap'>
                    <ul>
                        <li onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
                            <img src={isHover ? BrandColorLogo : BrandLogoGray} alt="" loading='lazy'
                                width="161.5" height="40.75" className='footer-brand-logo' />
                        </li>
                        <li>
                            <a href='tel:925-284-4042'>925-284-4042 </a>
                        </li>
                        <li>
                            <a href='mailto:customerservice@ggblue.com'>customerservice@ggblue.com</a>
                        </li>

                        <li style={{
                            padding: "3px"
                        }}>
                            Our corporate office is open:  <br /> Monday-Thursday 8am-5pm PST <br /> Fridays 8am-3pm PST <br />We are closed on Saturday &amp; Sunday

                        </li>
                        <li className="social-media">

                            <a href="https://twitter.com/GGblueLuxeSport" target="_blank" title="twitter" rel="noreferrer noopener">
                                <BsTwitter />
                            </a>
                            <a href="https://www.facebook.com/ggbluegolf/" target="_blank" title="facebook" rel="noreferrer noopener">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/ggblueluxesport/" target="_blank" title="instagram" rel="noreferrer noopener">              <AiOutlineInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
                {/* {
                    footerDataObj.map((item, i) => {
                        return (
                            <div className='footer-content-wrap' key={i}>
                                <span className={click ? 'active' : ''}>
                                    <h2 onClick={handleClick}>{item.title}</h2>
                                    {
                                        click && <ul className='footer-ul'>
                                            {item.lists.map((list, i) => {
                                                return (
                                                    <li key={i}>
                                                        {list}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    }
                                </span>
                            </div>
                        )
                    })
                } */}


                <div className='footer-content-wrap'>
                    <span className={click ? 'active' : ''} id="one">
                        <h2 onClick={handleClick}>Help</h2>
                        <ul className='footer-ul'>
                            <li>Contact </li>
                            <li>My Account </li>
                            <li>Shipping </li>
                            <li>Returns </li>
                            <li>Size Guide </li>
                            <li>Privacy Policy</li>
                        </ul>
                    </span>

                </div>
                <div className='footer-content-wrap'>
                    <span className={click ? 'active' : ''} id="two">
                        <h2 onClick={handleClick}>SHOP</h2>
                        <ul className='footer-ul'>
                            <li>Tops </li>
                            <li>Bottoms   </li>
                            <li>Outerwear </li>
                            <li>Essentials   </li>
                            <li>Dresses </li>
                            <li>Gift Cards </li>
                        </ul>
                    </span>
                </div>
                <div className='footer-content-wrap'>
                    <span className={click ? 'active' : ''} id="three">
                        <h2 onClick={handleClick}>EXPLORE</h2>
                        <ul className='footer-ul'>
                            <li>Blog  </li>
                            <li>About </li>
                        </ul>
                    </span>

                </div>

            </div>
        </div>
    )
}

export default Footer