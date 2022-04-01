import React, { useCallback, useEffect, useState } from 'react'
import { client } from "../../client"
import Loader from '../Loader/Loader';

const HomeSectionFive = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [videoLink, setVideoLink] = useState([])

    const getVideoLink = useCallback(async () => {
        setIsLoading(true)
        try {
            const response = await client.getEntries({
                content_type: "homeSectionFiveVideo"
            })
            const data = response.items[0];
            const vidLink = data.fields.video.fields.file.url

            if (data) {
                setVideoLink([vidLink])
            }
            else {
                setVideoLink([])
            }
            setIsLoading(false)


        }
        catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        getVideoLink();
    }, [getVideoLink])

    if (isLoading) {
        return <Loader />
    }
    return (
        <section className='Home-section-five'>
            {/* <video id="home-video" className="spaced-section" max-height="100%" width="100%" autoPlay="" muted="" loop="" playsInline="">
                <source src={`https:${videoLink[0]}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}


            <video id="home-video" className="spaced-section" max-height="100%" width="100%" autoPlay="" muted="" loop="" playsInline="">
                <source src="https://cdn.shopify.com/s/files/1/1685/8389/files/video.mp4?v=1643745811" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section >
    )
}

export default HomeSectionFive