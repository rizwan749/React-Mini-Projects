import  { useEffect, useState } from 'react'

const useFetch = (url) => {

  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {

      try {
        let dataFetch = await fetch(url)
        let dataRsponse = await dataFetch.json()

        setData(dataRsponse)
      } catch (error) {
        setError(error.message)
      } finally{
        setLoading(false)
      }
    }

    fetchData()
  },[url])

  return {data , loading , error}
}

export default useFetch