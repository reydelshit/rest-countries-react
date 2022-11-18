import React, { useEffect, useState } from 'react'

const PaginationButton = ({totalPost, countryPerPage, setCurrrentPage}) => {

    let countryIndex = [];

    for(let i = 1; i <= Math.ceil(totalPost/countryPerPage); i++){
      countryIndex.push(i)
    }

    const [windowSize, setWindowSize] = useState({
      width: undefined
    });

    const [paginationDecider, setPaginationDeciderd] = useState(10)

    // useEffect(() => {

    //   const getCurrentWindowSize = () => {
    //     setWindowSize({
    //       width: window.innerWidth
    //     })
    //   }

    // window.addEventListener("resize", getCurrentWindowSize)

    // console.log(windowSize)

    // if(windowSize < 1000){
    //   setPaginationDeciderd(8)
    // }

    //   return () => {
    //     window.addEventListener("resize", getCurrentWindowSize)
    //   };

    // }, [windowSize])

    

  return (
    <div className='paginationBTN__container'>

        {countryIndex.map((country, index) => (
              index < paginationDecider &&      
              <div key={index} className='paginationButton'>
                <button onClick={() => setCurrrentPage(country)}>{country}</button>
              </div>
            ))}
    
    </div>
  )
}

export default PaginationButton