import React,{useEffect, useState} from 'react';
import { GiCheckMark } from "react-icons/gi";

const PROGRESS_DATA=[
    {
        step:1,
        name:"Choose Flight",
        Component:()=><div>Choose Flight</div>
    },
    {
        step:2,
        name:"Add Passengers",
        Component:()=><div>Add Passengers</div>
    },
    {
        step:3,
        name:"OTP Verification",
        Component:()=><div>OTP Verification</div>
    },
    {
        step:4,
        name:"Submit Form",
        Component:()=><div>Submit Form</div>
    }
]

const Progressbar = () => {

   
    const [currentStep,setCurrentStep]=useState(1);
    const [activated,setActivated]=useState(0);
    const [barWidth,setBarWidth]=useState(0);


    
    const totalSteps = PROGRESS_DATA.length;
    const barWidthPercentage = (currentStep / totalSteps) * 100;

    const handleClick=()=>{
        setCurrentStep((prev)=>prev+1);
        setActivated((prev)=>prev+1);
    }

    useEffect(() => {
        setBarWidth(barWidthPercentage);
    }, [currentStep, totalSteps]);
   

    const Activecomponent=PROGRESS_DATA[currentStep-1]?.Component;
    

  return (
   <div className='w-[100%] flex flex-col items-center gap-12'>
     <div className='flex w-[100%] justify-between px-12 '>
      {
         PROGRESS_DATA.map((data)=>{
             return(
                <div key={data.step} className='flex flex-col items-center gap-y-2'>
                     <div className={`h-[45px] w-[45px] flex items-center justify-center rounded-full font-semibold transition-all duration-1000 ${currentStep===data.step?"bg-blue-600":"bg-gray-400"} `}>
                        {activated>=data.step ? <span className='bg-green-600 flex justify-center items-center text-white text-20px h-[45px] w-[45px] rounded-full'>&#10003;</span> : data.step}
                     </div>
                     <span className='text-[17px] font-semibold'>{data.name}</span>
                </div>
             )
         })
      }
      <div className='ml-[30px] h-[4px] justify-center items-center w-[85%] bg-gray-400 absolute top-[122px] -z-50'>
         {
           currentStep-1==1? 
          <div className={`h-[4px] bg-green-600 relative w-[33%]`}>
          </div>:
          currentStep-1==2?
          <div className={`h-[4px] bg-green-600 relative w-[66%]`}>
          </div>:
          currentStep-1==3?
          <div className={`h-[4px] bg-green-600 relative w-[99%]`}>
          </div>:
          currentStep-1==4?
          <div className={`h-[4px] bg-green-600 relative w-[99%]`}>
          </div>:""
         
         }
      </div>
      
     
    </div>
       <button disabled={currentStep>PROGRESS_DATA.length?true:false} onClick={handleClick} className={`rounded px-2 py-1 font-semibold text-white ${currentStep>PROGRESS_DATA.length?"bg-green-600 ":"bg-blue-600"}`}>{currentStep>PROGRESS_DATA.length?"Completed":"Next"}</button>
       <div className=' text-[17px] font-semibold rounded-md'>
         {activated>=PROGRESS_DATA.length?<span className='bg-green-600 text-white rounded-md'></span>:<Activecomponent />}
        </div>
   </div>
  )
}

export default Progressbar
