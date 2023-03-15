import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        try {
            const request = await fetch(url);
            const response = await request.json();
            setData(response.collection.items);
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [url])

    return { data, isLoading }
}
