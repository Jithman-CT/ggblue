import React, { useCallback, useEffect, useState } from 'react';
import { client } from '../../client';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Loader from '../Loader/Loader';
import CarouselSlide from './CarouselSlide';


// import swiper style
import 'swiper/css'
import 'swiper/css/bundle'
import "swiper/css/pagination"




SwiperCore.use([Navigation, Pagination])

const HomeSectionThree = () => {

    const [isCarouselLoading, setIsCarouselLoading] = useState(false);
    const [carouselSlides, setCarouselSlides] = useState([]);
    const cleanUpCarouselSlides = useCallback((rawData) => {

        const cleanSlides = rawData.map((slide) => {
            const { fields, sys } = slide;
            const clotheName = fields.clotheName;
            const clothePrice = fields.clothePrice;
            const clotheImg = fields.clothes.fields.file.url;
            const { id } = sys;

            const updateSlide = {
                id, clotheImg, clotheName, clothePrice
            }

            return updateSlide;
        })
        setCarouselSlides(cleanSlides)
    }, [])

    const getCarouselSlides = useCallback(async () => {
        setIsCarouselLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'homeSectionThreeSwiperSlide' })
            const data = response.items
            if (data) {
                cleanUpCarouselSlides(data)
            } else {
                setCarouselSlides([])
            }
            setIsCarouselLoading(false)
        } catch (err) {
            console.error(err);
            setIsCarouselLoading(false)
        }
    }, [cleanUpCarouselSlides])

    useEffect(() => {
        getCarouselSlides();
    }, [getCarouselSlides])

    if (isCarouselLoading) {
        return <Loader />
    }
    // If there are no slides to display  then do not render the components
    if (!Array.isArray(carouselSlides) || !carouselSlides.length) {
        return null
    }

    return (
        <section className='Home-section-three'>
            <div className='container'>
                <div className='carousel swiper-container'>
                    <Swiper
                        navigation={true}
                        pagination={true}
                        loop={true}
                        slidesPerView={1.5}
                        spaceBetween={10}
                        breakpoints={{
                            // when window width is >= 640px
                            320: {

                                slidesPerView: 1.6,
                            },
                            400: {
                                slidesPerView: 2,
                            },
                            500: {
                                slidesPerView: 2.25,
                            },
                            600: {
                                slidesPerView: 3,
                            },
                            980: {
                                slidesPerView: 4,
                            }
                        }}

                    >

                        {carouselSlides.slice(0).reverse().map((item) => {
                            const { id, clotheImg, clotheName, clothePrice } = item;
                            return (
                                // looping and creating div for every array objects
                                <SwiperSlide key={id}>
                                    <CarouselSlide
                                        clotheImg={clotheImg}
                                        clotheName={clotheName}
                                        clothePrice={clothePrice}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>


    )
}

export default HomeSectionThree

