import React, { useCallback, useEffect, useState } from 'react';
import { client } from "../../client";

const HomeSectionTwo = () => {


    const [sectionTwoData, getSectionTwoData] = useState([]);

    const cleanUpFetchData = useCallback(async (rawData) => {
        const cleanFetchData = await rawData.map((data) => {
            const { fields, sys } = data;
            console.log(data);

            const { id } = sys;
            const catergoryName = fields.catergoryName;
            const catergoryImage = fields.catergoryImage.fields.file.url;

            const fetchDataObj = { catergoryName, catergoryImage, id }
            return fetchDataObj
        })
        getSectionTwoData(cleanFetchData);
    }, [])

    const fetchSectionTwoData = useCallback(async () => {

        try {
            const response = await client.getEntries({
                content_type: 'shopCategoryCopy'
            })
            const data = response.items
            cleanUpFetchData(data)
        }
        catch (error) {
            console.error(error)
        }
    }, [cleanUpFetchData])

    useEffect(() => {
        fetchSectionTwoData();
    }, [fetchSectionTwoData])

    const remainder = (num) => {
        return num % 2
    }
    remainder(2);

    return (
        <section className='Home-section-two'>
            <div className='container'>
                <div className='section-two-main-container'>
                    {console.log(sectionTwoData)}
                    {sectionTwoData.map((item, i) => {
                        return (
                            <div className={`flex-${i % 2 === 0 ? 'left-container' : 'right-container'}`} key={item.id}>
                                <img src={item.catergoryImage} alt="" loading='lazy' width={752} height={720} />

                                <h3>{item.catergoryName}</h3>
                                <a href>Shop Now</a>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section >
    )
}

export default HomeSectionTwo