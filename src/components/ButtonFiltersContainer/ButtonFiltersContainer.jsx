import React, { useState } from 'react'
import { ButtonFilter } from '../ButtonFilter/ButtonFilter'
import { buttonFiltersData } from '../../const/const'


export const ButtonFiltersContainer = () => {
    const [selecteClass, setSelecteClass] = useState(0)

    const handleClick = (index) => {
        setSelecteClass(index)
    }

    return (
        <>
            {buttonFiltersData.map((button, index) => {
                return (
                    <ButtonFilter
                        key={ button.title }
                        data={ button }
                        index={ index }
                        active={ selecteClass === index }
                        onClick={() => handleClick(index)}
                    />
                )
            })}
        </>
    )
}
