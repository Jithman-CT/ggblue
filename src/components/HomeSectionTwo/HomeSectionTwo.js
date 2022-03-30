import React, { useCallback, useEffect, useState } from 'react';
import { client } from "../../client";

const HomeSectionTwo = () => {

    const [titleAndDesc, setTitleAndDesc] = useState({})
    const [sectionTwoData, getSectionTwoData] = useState([]);

    const cleanUpFetchData = useCallback(async (rawData) => {
        const cleanFetchData = await rawData.map((data) => {
            const { fields, sys } = data;

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

    const fetchSectionTwoTitleAndDesc = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: 'homeSectionTwoHeading'
            })
            const data = response.items[0];
            const { fields, sys } = data;
            const title = fields.title;
            const description = fields.description;
            setTitleAndDesc({ title: title, description: description })

        }
        catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        fetchSectionTwoData();
    }, [fetchSectionTwoData]);

    useEffect(() => {
        fetchSectionTwoTitleAndDesc();
    }, [fetchSectionTwoTitleAndDesc]);

    const remainder = (num) => {
        return num % 2
    }
    remainder(2);

    return (
        <section className='Home-section-two'>
            <div className='container'>
                <div className='section-two-heading'>
                    <h2>{titleAndDesc.title}</h2>
                    <p>{titleAndDesc.description}</p>
                </div>
                <div className='section-two-main-container'>

                    {sectionTwoData.map((item, i) => {
                        return (
                            <div className={`flex-${i % 2 === 0 ? 'left-container' : 'right-container'}`} key={item.id}>
                                <img src={item.catergoryImage} alt="" loading='lazy' width={452} height={500} />

                                <div className='category-details'>
                                    <h3>{item.catergoryName}</h3>
                                    <button className='btn-shop-now'>Shop Now</button>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>

        </section >
    )
}

export default HomeSectionTwo