import React from 'react'

const Bold = (props) => {

    const text = props.text;
  return (
    <span className='bold__text'>
        {text}
    </span>
  )
}

export default Bold