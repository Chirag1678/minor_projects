import React from 'react'
import ReadingCards from './ReadingCards'
import reading1 from '../Assets/Images/reading_1.png';
import reading2 from '../Assets/Images/reading_2.png';
import reading3 from '../Assets/Images/reading_3.png';
import reading4 from '../Assets/Images/reading_4.png';
import reading5 from '../Assets/Images/reading_5.png';
import reading6 from '../Assets/Images/reading_6.png';
import reading7 from '../Assets/Images/reading_7.png';
import reading8 from '../Assets/Images/reading_8.png';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Reading({selectedType}) {
  const navigate=useNavigate();
  const ReadingType={
    UI:{
      name: "UI design",
      src: reading1
    },
    UX:{
      name: "UX design",
      src: reading2
    },
    SEO:{
      name: "SEO",
      src: reading3
    },
    Popular:{
      name: "Popular",
      src: reading4
    },
    Essentials:{
      name: "Essentials",
      src: reading5
    },
    Freelance:{
      name:"Freelance",
      src:reading6
    },
    Typography:{
      name:"Typography",
      src:reading7
    },
    How:{
      name:"How not to",
      src:reading8
    }
  }
  return (
    <div className='w-full px-40 font-open py-10'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-4xl'>Reading lists</h1>
        <p className='text-[#ff5480] cursor-pointer' onClick={()=>navigate("/read")}>View all</p>
      </div>
      <div className='flex justify-between items-start py-10'>
        <div className='flex justify-between items-start snap-x gap-x-6 w-full whitespace-nowrap overflow-x-scroll'>
        {Object.keys(ReadingType).map((item,index)=>(
         <ReadingCards src={ReadingType[item].src} name={ReadingType[item].name} key={index} selectedType={selectedType}/>
        ))}
        </div>
        <button className='bg-white h-[32vh] w-16 shadow-md shadow-gray-300 flex items-center justify-center rounded-lg'><IoIosArrowForward size="1.5em"/></button>
      </div>
    </div>
  )
}

export default Reading
