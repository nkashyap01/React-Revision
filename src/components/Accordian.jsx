import React, { useState } from 'react'
import qaData from './data'



const Accordian = () => {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])
    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId );

    }
  return (
    <div>
        {
            qaData && qaData.length > 0 ? (
                qaData.map((data)=>(
                   <div>
                     <div onClick = {()=>handleSingleSelection(data.id)}>
                        <h3> {data.question}</h3>
                        <p> + </p>
                        </div>
                        { 
                            selected === data.id ? <div> {data.answer} </div>:null
 
                        }
                        </div>
                ))

            ) : (
                <div> Data not found </div>
            )
        }
    </div>
  )
}

export default Accordian