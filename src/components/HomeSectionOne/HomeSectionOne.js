import React, { useCallback, useState, useEffect } from 'react'
import { client } from '../../client'

const HomeSectionOne = () => {

    const [bigBanner, setBigBanner] = useState([]);
    const [smallBanner, setSmallBanner] = useState({});


    // fetching bigbanner data
    const getBigBannerData = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: 'showCaseImage'
            })
            const data = response.items[0];
            const { fields, sys } = data;
            const { id } = sys
            const showcaseimages = fields.showcaseimage.fields.file.url
            setBigBanner(showcaseimages)

        } catch (error) {
            console.error(error)
        }
    }, [])

    // fetching small banner data 
    const getSmallBannerData = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: 'headerCategory'
            })
            const data = response.items[0];
            const { fields, sys } = data;
            const { id } = sys

            // cleaning or destructing data
            const catergoryName = fields.catergoryName;
            const catergoryPara = fields.catergoryPara;
            const catergoryImg = fields.catergoryImage.fields.file.url

            setSmallBanner({
                catergoryName, catergoryPara, catergoryImg
            })

        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        getBigBannerData();
    }, [getBigBannerData])

    useEffect(() => {
        getSmallBannerData()
    }, [getSmallBannerData])


    return (
        <div className='Banner-section'>
            <div className='banner-left-con'>
                <img src={bigBanner} sizes="(min-width: 1600px) 750px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)" alt="" loading="lazy" width="904" height="1080" />
            </div>
            <div className='banner-right-con'>
                <div className='banner-right-wrapper'>
                    <img src={smallBanner.catergoryImg} sizes="(min-width: 1600px) 750px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)" alt="" width="375" height="422" loading='lazy' />

                    <h1>{smallBanner.catergoryName}</h1>
                    <p>{smallBanner.catergoryPara}</p>

                    <button className='btn-cta'>Shop the collection</button>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionOne