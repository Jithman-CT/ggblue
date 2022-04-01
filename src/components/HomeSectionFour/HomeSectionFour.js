import React, { useCallback, useEffect, useState } from 'react';
import { client } from "../../client"

const HomeSectionFour = () => {

    const [iceCollection, setIceCollection] = useState({});
    const [secFourBigImage, setSecFourBigImage] = useState([]);

    const getSecFourBigImage = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: 'homeSectionFourBigImage'
            });
            const data = response.items[0];
            const bigImage = data.fields.bigImage.fields.file.url
            setSecFourBigImage([bigImage])
        }
        catch (err) {
            console.error(err)
        }
    }, [])

    const getIceCollection = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: 'homeSectionFourIceCollection'
            })
            const data = response.items[0];
            const { fields, sys } = data;
            // refactor data
            const iceImg = fields.iceCollection.fields.file.url;
            const iceTitle = fields.iceTitle;
            const iceDes = fields.iceDescription;
            const { id } = sys

            setIceCollection({ iceImg, iceTitle, iceDes, id })
        }
        catch (err) {
            console.error(err);
        }
    }, [])

    useEffect(() => {
        getSecFourBigImage();
    }, [getSecFourBigImage])

    useEffect(() => {
        getIceCollection();
    }, [getIceCollection])

    return (
        <section className='Home-section-four'>
            <div className='container'>
                <div className='section-four-main-container'>
                    <div className='sec-four-left-container'>
                        <img src={iceCollection.iceImg} alt="" loading='lazy'
                            sizes="(min-width: 1600px) 750px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                            width={934}
                            height={934}
                        />
                        <div className='ice-collection-content-wrap'>
                            <h2>{iceCollection.iceTitle}</h2>
                            <p>{iceCollection.iceDes}</p>
                            <button className='btn-cta'>shop the collection</button>
                        </div>
                    </div>
                    <div className='sec-four-right-container'>
                        <img src={secFourBigImage[0]} alt="" loading='lazy'
                            sizes="(min-width: 1600px) 750px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                            width={934}
                            height={934}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSectionFour