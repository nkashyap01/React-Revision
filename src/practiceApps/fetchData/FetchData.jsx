import React, { useEffect, useState } from 'react'

    const FetchData = () => {
        const [data, setData] = useState([])
    const FetchApi = async() =>{
        
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            console.log(data);
            setData(data);
            
        }
    

    useEffect(()=>{
        FetchApi()
    }, []);
  return (
    <div>
        {
        data.map((data)=>{
        return <h1>{data.title}</h1>
        })
            
        }
      
    </div>
  )
}

export default FetchData
