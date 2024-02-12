import React,{useState} from 'react';
import { GiCheckMark } from "react-icons/gi";

const PROGRESS_DATA=[
    {
        step:1,
        name:"Choose Flight"
    },
    {
        step:2,
        name:"Add Passengers"
    },
    {
        step:3,
        name:"OTP Verification"
    },
    {
        step:4,
        name:"Submit Form"
    }
]

const Progressbar = () => {

    const [currentStep,setCurrentStep]=useState(1);
    const [activated,setActivated]=useState(0);
    const [barWidth,setBarWidth]=useState(0);
    const handleClick=()=>{
        setCurrentStep((prev)=>prev+1);
        setActivated((prev)=>prev+1);
        setBarWidth((prev)=>prev+34);
    }

  return (
   <div className='w-[100%] flex flex-col items-center gap-12'>
     <div className='flex w-[100%] justify-between px-12 '>
      {
         PROGRESS_DATA.map((data)=>{
             return(
                <div key={data.step} className='flex flex-col items-center gap-y-2'>
                     <div className={`h-[45px] w-[45px] flex items-center justify-center rounded-full font-semibold transition-all duration-1000 ${currentStep===data.step?"bg-blue-600":"bg-gray-400"} `}>{activated>=data.step ? <GiCheckMark className='bg-green-600 text-white text-20px h-[45px] w-[45px] rounded-full'/> : data.step}</div>
                     <span className='text-[17px] font-semibold'>{data.name}</span>
                </div>
             )
         })
      }
      <div className='ml-[30px] h-[4px] justify-center items-center w-[85%] bg-gray-400 absolute top-[122px] -z-50'>
          <div className={`h-[4px] bg-green-600  `}>
             {console.log(barWidth)}
          </div>
      </div>
     
    </div>
       <button onClick={handleClick} className={`rounded px-2 py-1 font-semibold text-white ${currentStep>PROGRESS_DATA.length?"bg-green-600 ":"bg-blue-600"}`}>{currentStep>PROGRESS_DATA.length?"Completed":"Next"}</button>
       <div className='bg-gray-400 text-[17px] font-semibold px-2 py-1 rounded-md'>{PROGRESS_DATA[activated]?.name}</div>
   </div>
  )
}

export default Progressbar
