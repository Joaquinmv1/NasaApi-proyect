import React, { useEffect, useState } from 'react'
import { ButtonFilter } from '../../components/ButtonFilter/ButtonFilter'
import { GaleryImg } from '../../components/GaleryImg/GaleryImg'
import { buttonFiltersData } from '../../const/const'
import { useFetch } from '../../hooks/useFetch'
import '../../styles/ButtonFiltersContainer.css'

export const ButtonFiltersContainer = () => {
    const [selecteClass, setSelecteClass] = useState(0)
    const [galery, setGalery] = useState([])
    const [showPopular, setShowPopular] = useState(false);

    const selection = showPopular ? 'galaxy' : ""

    let url =`https://images-api.nasa.gov/search?q=${selection}&media_type=image`;

    const { data, isLoading } = useFetch(url);
    
    const handleClick = (index) => {
        setSelecteClass(index)
        index === 1 ? setShowPopular(true) : setShowPopular(false)
    } 

    useEffect(() => {
        if (data) {
            setGalery(data)
        }
    }, [data])

    return (
        <>
            {buttonFiltersData.map((button, index) => {
                return (
                    <ButtonFilter
                        key={button.title}
                        data={button}
                        index={index}
                        active={selecteClass === index}
                        onClick={() => handleClick(index)}
                    />
                )
            })}
            <GaleryImg
                galery={galery}
                isLoading={isLoading}
                showPopular={showPopular}
            />
        </>
    )
}
