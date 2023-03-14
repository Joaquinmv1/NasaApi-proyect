import React, { useState } from 'react'

export const ButtonFilter = ({ data, onClick, active }) => {

    return (
        <>
            <button
                className={`btn-filter ${active ? 'active' : ""}`}
                onClick={onClick}
            >
                {data.title}
            </button>
        </>
    )
}
