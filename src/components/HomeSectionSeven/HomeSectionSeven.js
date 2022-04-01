import React from 'react'

const HomeSectionSeven = () => {
    return (
        <section className='Home-section-seven'>
            <div className='sec-seven-content-wrap'>
                <h2>Save 15% off your order</h2>
                <p>Enter your email below to join the GGblue email list and save 15% off your order!</p>

                <form method='POST' action='/'>
                    <label htmlFor="email" >Your Email</label>
                    <input id="email" type='email' name='email' placeholder='Your Email' required></input>

                    <button className='btn-cta' type='submit'>sign up</button>
                </form>
            </div>
        </section>
    )
}

export default HomeSectionSeven