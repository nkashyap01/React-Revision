import React, { useState } from 'react'

const ImageSlider = ({url, limit}) => {
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl){
        try{

            const response = await fetch(getUrl)
            const data = await response.json()

            if(data){
                setLoading(false)

            }
        }
        catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(url !== "") fetchImages(url)
    }, [url])

if(loading){
    return <div> Loading data!Please wait </div>
}

if(errorMsg!=null){
    return <div> Error Occured ! {errorMsg} </div>
}

  return (
    <div>ImageSlider</div>
  )
}

export default ImageSlider