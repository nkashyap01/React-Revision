import React, { useEffect, useState } from 'react'

const Fetch = () => {

const [data, setData] = useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response)=>response.json())
        .then((json)=>setData(json))
    })
  return (
    <div>
        {
            data ?  <div>
<h1> title:{data.title}

</h1>
            </div>:<div> 
<h1>loading...</h1>
            </div>
        }
    </div>
  )
}

export default Fetch