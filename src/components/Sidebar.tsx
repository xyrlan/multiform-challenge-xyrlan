
import { useState, useEffect } from "react";



export default function Sidebar({currentSteps, goForwards}) {

  

    const [selectedButton, setSelectedButton] = useState('button1');


    useEffect(() => {
        if (currentSteps === 0) {
          setSelectedButton("button1");
        } else if (currentSteps === 1) {
          setSelectedButton("button2");
        } else if (currentSteps === 2) {
          setSelectedButton("button3");
        } else if (currentSteps === 2) {
            setSelectedButton("button3");
        } else if (currentSteps === 3) {
          setSelectedButton("button4");
        }
      })



      
// console.log(currentSteps);

    

    return(
        <div 
        className=" bg-sidebar-desktop md:rounded-xl md:w-52 lg:w-52 xl:w-64 h-full max-md:w-full max-md:top-0 max-md:bg-[url('./images/bg-sidebar-mobile.svg')] max-md:absolute max-md:h-[25%]  max-md:flex max-md:justify-center"
        >
        
                <ul className="font-ubuntu flex md:flex-col md:gap-6 md:pt-10 xl:ml-5 lg:ml-3 max-md:mt-6 max-md:justify-center">
                   
                    <li 
                    className="inline-flex xl:gap-2 max-lg:gap-0 md:items-center"
                    >
                    
                    <button
                    
                    className={`${selectedButton === 'button1' ? ' ease-in rounded-full max-lg:scale-75 max-md:w-10 max-md:h-10 md:w-12 md:h-12 max-md:mx-2 md:mx-4 text-lg text-black duration-500 scale-90 bg-[#bfe2fd]' : ' rounded-full max-lg:scale-75 max-md:w-10 max-md:h-10 md:w-12 md:h-12 max-md:mx-2 md:mx-4 text-lg bg-transparent text-white border-white border-solid border-2 scale-90'}`}>1</button>
                    
                    <p 
                    className="flex flex-col max-md:hidden">
                        <span className="text-gray-300 text-sm">STEP 1</span>
                        <span className="font-semibold tracking-wider text-sm">YOUR INFO</span>
                    </p>
                    </li>
                    
                    
                
                  
                    <li 
                    className="inline-flex xl:gap-2 max-lg:gap-0 md:items-center"
                    
                    
                    
                    >
                    <button
                    className={`${selectedButton === 'button2' ? 'rounded-full max-lg:scale-75 max-md:w-10 max-md:h-10 md:w-12 md:h-12 max-md:mx-2 md:mx-4 text-lg text-black duration-500 ease-in scale-90 bg-[#bfe2fd]' : 'rounded-full max-lg:scale-75 max-md:w-10 max-md:h-10 md:w-12 md:h-12 max-md:mx-2 md:mx-4 text-lg bg-transparent text-white border-white border-solid border-2 scale-90'}`}>2</button>
                    <p 
                    
                    className="flex flex-col max-md:hidden">
                        <span className="text-gray-300 text-sm">STEP 2</span>
                        <span className="font-semibold tracking-wider text-sm">SELECT PLAN</span>
                    </p>
                    </li>
                    

                    
                    <li 
                    className="inline-flex xl:gap-2 max-lg:gap-0 md:items-center"
                    
                    >
                        <button
                        
                        className={`${selectedButton === 'button3' ? 'ease-in rounded-full max-lg:scale-75 max-md:w-10 max-md:h-10 md:w-12 md:h-12 max-md:mx-2 md:mx-4 text-lg text-black duration-500 scale-90 bg-[#bfe2fd]' : 'rounded-full max-lg:scale-75 max-md:w-10 max-md:h-10 md:w-12 md:h-12 max-md:mx-2 md:mx-4 text-lg bg-transparent text-white border-white border-solid border-2 scale-90'}`}>3</button>
                    <p 
                    
                    className="flex flex-col max-md:hidden">
                        <span className="text-gray-300 text-sm">STEP 3</span>
                        <span className="font-semibold tracking-wider text-sm">ADD-ONS</span>
                    </p>
                    </li>
                    
                   
                    <li 
                    className="inline-flex xl:gap-2 max-lg:gap-0 md:items-center"
                    
                    >
                    <button
                     
                    className={`${selectedButton === 'button4' ? 'ease-in rounded-full max-lg:scale-75 max-md:w-10 max-md:h-10 md:w-12 md:h-12 max-md:mx-2 md:mx-4 text-lg text-black duration-500 scale-90 bg-[#bfe2fd]' : 'rounded-full max-lg:scale-75 max-md:w-10 max-md:h-10 md:w-12 md:h-12 max-md:mx-2 md:mx-4 text-lg bg-transparent text-white border-white border-solid border-2 scale-90'}`}>4</button>
                    <p 
                    
                    className="flex flex-col max-md:hidden">
                        <span className="text-gray-300 text-sm">STEP 4</span>
                        <span className="font-semibold tracking-wider text-sm">SUMMARY</span>
                    </p>
                    </li>
                    
                </ul>

            </div>
            
    )
}