import React from 'react'
import { useNavigate } from 'react-router-dom'

function ReadingCards(props) {
  const navigate=useNavigate();
  return (
    <div className='flex-shrink-0 snap-start' onClick={()=>navigate(`/read/${props.name}`)}>
        <div className='rounded-lg overflow-hidden w-[13.5vw] aspect-[3/3.8] flex justify-center'><img src={props.src} alt='ui design'/></div>
        <p className={`text-center font-semibold text-2xl py-4 text-[${props.selectedType ===props.name ? '#ff5480' : '#000'}]`}>{props.name}</p>
    </div>
  )
}

export default ReadingCards
