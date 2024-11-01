import React, { useState } from 'react'

const Filter = ({items}) => {
    const [searchItem, setSearchItem] = useState('')
    const filteredItems = items.filter((item)=>item.toLowerCase().includes(searchItem.toLowerCase()))
  return (
    <div>

<input type="text" placeholder= 'search' onChange= {(e)=>setSearchItem(e.target.value)}/>

<ul>
    {
        filteredItems.map((item,index) => (
            <li> {item}  </li>
        ))
    }

</ul>
    </div>
  )
}

export default Filter