import React from 'react'

const Card = ({ CardName, CardDescription, CardDate }) => {
  return (
    <div className='bg-light px-4 py-4 rounded' style={{width: "90%"}}>
        <h3 className='text-capitalize'>{CardName}</h3>
        <p className='text-secondary'>{CardDescription}</p>
        <div className='d-flex align-items-end flex-column mx-2'>
          <div className='rounded px-2 py-1' style={{backgroundColor: "#E2E2E2"}}>{CardDate}</div>
        </div>
    </div>
  )
}

export default Card