import React, { useState, useEffect } from 'react'
import '../../styles/Header.css'
import { btnSearch } from '../../const/const'
import { Header } from '../../components/Header/Header'
import { ButtonFiltersContainer } from '../ButtonFiltersContainer/ButtonFiltersContainer'
import { useFetch } from '../../hooks/useFetch'

export const HeaderContainer = () => {
  const [search, setSearch] = useState('')
  const [selecteClass, setSelecteClass] = useState(0)
  const [gallery, setGallery] = useState([])
  const [showPopular, setShowPopular] = useState(false);

  const selection = showPopular ? 'galaxy' : ""

  let url = `https://images-api.nasa.gov/search?q=${search}${selection}&media_type=image`;

  const { data, isLoading } = useFetch(url);

  const handleClick = (index) => {
    setSelecteClass(index)
    index === 1 ? setShowPopular(true) : setShowPopular(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value)
  }

  const buttonSearch = btnSearch.map((btn) => {
    return <button key={btn.title}>{btn.title}</button>
  })

  useEffect(() => {
    if (data) {
      setGallery(data)
    }
  }, [data])

  return (
    <>
      <Header
        search={search}
        handleChange={handleChange}
        buttonSearch={buttonSearch}
        handleSubmit={handleSubmit}
      />
      <ButtonFiltersContainer
        gallery={gallery}
        handleClick={handleClick}
        isLoading={isLoading}
        selecteClass={selecteClass}
        showPopular={showPopular}
      />
    </>
  )
}
