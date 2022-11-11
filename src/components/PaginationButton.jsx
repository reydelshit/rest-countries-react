import React from 'react'

const PaginationButton = () => {

    const paginationNo = [1,2,3];

  return (
    <div className='paginationBTN__container'>

        {paginationNo.map((wow, index) => (
                <div key={index} className='paginationButton'>
                    <button>{wow}</button>
                </div>
            ))}
    
    </div>
  )
}

export default PaginationButton