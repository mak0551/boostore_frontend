import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'

export default function Backbtn({destination ='/home'}) {
  return (
    <div className='flex'>
      <Link to={destination} className='text-white bg-sky-800 px-4 py-1 rounded-lg w-fit'>
        <BsArrowLeft className='text-2xl'/>
      </Link>
    </div>
  )
}
