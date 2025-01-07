import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [data, setData] = useState(null)

    useEffect(()=>{
        fetchData();

    }, [])

    const fetchData = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await response.json();
        setData(result.title);
        console.log(data);
    }
  return (
    <div>FetchData</div>
  )
}

export default FetchApi