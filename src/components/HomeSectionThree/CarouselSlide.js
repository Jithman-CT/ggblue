import React from 'react'

const CarouselSlide = (props) => {
    const { clotheImg, clotheName, clothePrice } = props
    return (
        <div className='slides-card'>
            <img src={clotheImg} alt={clotheName} width={210} height={210} loading="lazy" />
            <div className='card-wrapper'>
                <p>{clotheName}</p>
                <p>{clothePrice.charAt(0).includes('$') ? clothePrice : '$' + clothePrice}</p>
            </div>
        </div>

    )
}

export default CarouselSlide