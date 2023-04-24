import { useState, useEffect } from 'react'
import { getImagesNasa } from '../services/services';

export const useImages = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const request = await getImagesNasa(url)
      setData(request.collection.items)
      setIsLoading(false)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData();
  }, [url])

  return { data, isLoading }
}
