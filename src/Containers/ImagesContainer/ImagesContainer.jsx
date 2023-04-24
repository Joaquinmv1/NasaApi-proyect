import React, { useState, useEffect } from 'react'
import '../../styles/Header.css'
import { Header } from '../../components/Header/Header'
import { ButtonFiltersContainer } from '../../components/ButtonFiltersContainer/ButtonFiltersContainer'
import { useImages } from '../../hooks/useImages'
import { GaleryImg } from '../../components/GaleryImg/GaleryImg'
import { Footer } from '../../components/Footer/Footer'

export const ImagesContainer = () => {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState('')
  const [selecteClass, setSelecteClass] = useState(0)
  const [gallery, setGallery] = useState([])
  const [showPopular, setShowPopular] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const selection = showPopular ? 'galaxy' : ""
  let url = `https://images-api.nasa.gov/search?q=${result}${selection}&media_type=image`;

  const { data, isLoading } = useImages(url);

  const handleClick = (index) => {
    setSelecteClass(index)
    index === 1 ? setShowPopular(true) : setShowPopular(false)
  }

  const handleSubmit = (e, search) => {
    e.preventDefault()
    setResult(search)
    setShowPopular(false)
    // setSearch('')
    setShowBtn(true)
    setShowResults(true)
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value)
  }

  const reset = () => {
    setShowBtn(false)
    setSelecteClass(0)
    setSearch('')
    setResult('')
  }

  useEffect(() => {
    if (!data) return
    setGallery(data)
  }, [data])

  return (
    <>
      <Header
        gallery={gallery}
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      {
        !showBtn &&
        <ButtonFiltersContainer
          handleClick={handleClick}
          selecteClass={selecteClass}
        />
      }
      <GaleryImg
        gallery={gallery}
        isLoading={isLoading}
        reset={reset}
        showBtn={showBtn}
        result={result}
        showResults={showResults}
      />
      <Footer />
    </>
  )
}
