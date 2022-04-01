import React, { useCallback, useEffect, useState } from 'react'
import { client } from '../../client'

const HomeSectionSix = () => {

    const [sectionSixData, setSectionSixData] = useState([]);


    const cleanUpData = useCallback(async (rawData) => {
        const cleanData = rawData.map((item) => {
            const { fields, sys } = item;
            const imgLink = fields.instaImg.fields.file.url;
            const imgTitle = fields.instaImg.fields.title
            const { id } = sys;

            const dataObj = { imgLink, id, imgTitle }
            return dataObj
        })
        setSectionSixData(cleanData);
    }, [])
    const getHomeSectionSixData = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: 'homeSectionSix'
            })
            const data = response.items;
            cleanUpData(data)
        }
        catch (error) {
            console.error(error)
        }
    }, [cleanUpData])

    useEffect(() => {
        getHomeSectionSixData();
    }, [getHomeSectionSixData])
    return (
        <section className='Home-section-six'>
            <h2>Shop Our Instagram</h2>
            <div className='wrap-contianer'>
                {sectionSixData.map((item) => {
                    return (
                        <div className="insta-img-div" key={item.id}>
                            <img src={item.imgLink} alt={item.imgTitle} loading="lazy"
                                width={467}
                                height={467}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default HomeSectionSix