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
            const image1 = `${fields.showcaseimage.fields.file.url}?fit=pad`
            setBigBanner(image1)

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
            const image2 = `${fields.catergoryImage.fields.file.url}?fit=pad`

            setSmallBanner({
                catergoryName, catergoryPara, catergoryImg, id, image2
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
                <img className="tablet-up" width={467} height={467} loading="lazy" alt="" src={`${bigBanner}`} />
                <img className="mobile" width={467} height={467} loading="lazy" alt="" src={`${bigBanner}`} />

                {/* <img className="tablet-up" rel="preload" as="image"
                srcSet={`
                        ${bigBanner}&w=320 320w, 
                     
                        ${bigBanner}&w=750 1x, 
                        ${bigBanner}&w=1100 2x, 
                        ${bigBanner}&w=1500 3x , 
                        ${bigBanner}&w=2164 4x
                    `}
                sizes=
                "(min-width: 1600px) 750px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                src={`${bigBanner}&w=750`}
                alt=""
                loading="lazy"
                width="1000"
                height="600"
                />

                <img className="mobile" rel="preload" as="image"
                    srcSet={`
                        ${bigBanner}&w=165 165w, 
                        ${bigBanner}&w=360 360w, 
                        ${bigBanner}&w=535 535w, 
                        ${bigBanner}&w=750 750w, 
                        ${bigBanner}&w=904 904w
                    `}

                    src={`${bigBanner}&w=904`}
                    sizes=
                    "(min-width: 1600px) 750px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                    alt=""
                    loading="lazy"
                    width="904"
                    height="1080"
                /> */}
            </div>
            <div className='banner-right-con'>
                <div className='banner-right-wrapper'>
                    <img loading='lazy' alt="" width={476} height={476} src={`${smallBanner.image2}`} />
                    {/* <img rel="preload" as="image"
                        srcSet={`
                            ${smallBanner.image2}&w=320 320w, 
                            ${smallBanner.image2}&w=375 375w
                        `}

                        src={`${smallBanner.image2}&w=375`}
                        sizes=
                        "(min-width: 1600px) 750px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                        alt=""
                        width="375"
                        height="422"
                    /> */}
                    <p className='title'>{smallBanner.catergoryName}</p>
                    <p className='desc'>{smallBanner.catergoryPara}</p>

                    <button className='btn-cta'>Shop the collection</button>
                </div>
            </div>


        </div>
    )
}


export default HomeSectionOne


/*
   ${bigBanner}&w=375 375w, 
       ${bigBanner}&w=1780 1780w, 
                        ${bigBanner}&w=2000 2000w, 
*/