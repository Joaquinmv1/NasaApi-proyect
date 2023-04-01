import React, { useState, useEffect } from 'react'
import '../../styles/Header.css'
import { btnSearch } from '../../const/const'
import { Header } from '../../components/Header/Header'
import { ButtonFiltersContainer } from '../ButtonFiltersContainer/ButtonFiltersContainer'
import { useFetch } from '../../hooks/useFetch'
import { GaleryImg } from '../../components/GaleryImg/GaleryImg'
import { Footer } from '../../components/Footer/Footer'
import { Loader } from '../../components/Loader/Loader'
import ClipLoader from 'react-spinners/ClipLoader'

export const HeaderContainer = () => {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState('')
  const [selecteClass, setSelecteClass] = useState(0)
  const [gallery, setGallery] = useState([])
  const [showPopular, setShowPopular] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const selection = showPopular ? 'galaxy' : ""
  let url = `https://images-api.nasa.gov/search?q=${result}${selection}&media_type=image`;

  const { data, isLoading } = useFetch(url);

  const handleClick = (index) => {
    setSelecteClass(index)
    index === 1 ? setShowPopular(true) : setShowPopular(false)
  }

  const handleSubmit = (e, search) => {
    e.preventDefault()
    setResult(search)
    setShowPopular(false)
    setSearch('')
    setShowBtn(true)
    setShowResults(true)
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value)
  }

  const buttonSearch = btnSearch.map((btn) => {
    return <button key={btn.title}>{btn.title}</button>
  })

  const reset = () => {
    setShowBtn(false)
    setSelecteClass(0)
    setSearch('')
    setResult('')
  }

  useEffect(() => {
    if (data) {
      setGallery(data)
    }
  }, [data])

  return (
    <>
      {gallery.length !== 0 &&
        <>
          <Header
            gallery={gallery}
            search={search}
            handleChange={handleChange}
            buttonSearch={buttonSearch}
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
      }
    </>
  )
}
