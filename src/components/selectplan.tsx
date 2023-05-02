import { useState } from "react";
import Image from "next/image";
import Button from "../components/Button";
import Goback from "../components/Goback";



export default function Selectplan({ isMonthly, handleToggle, data, updateFieldHandler, currentData,  goBackwards,  goForwards }) {

    const [selectedPlan, setSelectedPlan] = useState('plan1');

    const handleSelectPlanClick = (selectedPlanValue: string) => {
        setSelectedPlan(selectedPlanValue);  
    }

    if(selectedPlan === 'plan1' && isMonthly){
        data.plan = "Arcade (Monthly)"
        data.price = "$9/mo"
        data.numprice = 9
        data.type = "/mo"
    } else if(selectedPlan === 'plan2' && isMonthly) {
        data.plan = "Advanced (Monthly)"
        data.price = "$12/mo"
        data.numprice = 12
        data.type = "/mo"
    } else if(selectedPlan === "plan3" && isMonthly) {
        data.plan = "Pro (Monthly)"
        data.price = "$15/mo"
        data.numprice = 15
        data.type = "/mo"
    } else if(selectedPlan === "plan1" && !isMonthly) {
        data.plan = "Arcade (Yearly)"
        data.price = "$90/yr"
        data.numprice = 90
        data.type = "/yr"
    } else if(selectedPlan === "plan2" && !isMonthly) {
        data.plan = "Advanced (Yearly)"
        data.price = "$120/yr"
        data.numprice = 120
        data.type = "/yr"
    } else if(selectedPlan === "plan3" && !isMonthly) {
        data.plan = "Pro (Yearly)"
        data.price = "$150/yr"
        data.numprice = 150
        data.type = "/yr"
    }

    console.log(data.plan);
    console.log(data.price);

    return(
        <>
        <main className='flex flex-col text-[#02295a] md:pt-10 lg:px-10 xl:px-24 max-lg:px-10 md:px-4 max-md:justify-center max-md:pt-6 max-md:px-4 max-md:w-full w-full'>
            <h1 className='mb-2 font-bold text-4xl'>Select your plan</h1>
            <p className='text-gray-400'>You have the option monthly or yearly billing.</p>

            <div className="flex max-md:flex-col justify-between md:mt-10 max-md:mt-4 h-44 max-md:h-[50%] max-md:gap-2">
                
                <div
                className={` duration-300 ${selectedPlan === 'plan1' ? 'border border-solid rounded-lg max-md:w-full max-md:flex max-md:gap-3 max-md:h-[30%] md:w-[30%] max-md:p-3 max-md:items-center p-4 bg-[#f0f6ff] border-[#473dff]' : 'border border-solid rounded-lg max-md:w-full max-md:flex max-md:gap-3 max-md:h-[30%] md:w-[30%] max-md:p-3 max-md:items-center p-4 cursor-pointer'}`}
                onClick={() => handleSelectPlanClick('plan1')}
                id="arcade"
                
                >
                    <Image className="xl:mb-12 lg:mb-10 md:mb-8 max-md:mr-3" src="./images/icon-arcade.svg" width="40" height="40" alt="arcade icon" />
                    {currentData.map((plan) => (
                    <div className="" key={plan.title}>
                        <h2 className="font-bold">{plan.title}</h2>
                        <p className="text-gray-500 text-sm font-normal">{plan.price}</p>
                        <p className=" text-sm font-normal">{plan.promotion}</p>
                    </div>
                    ))}
                    
                </div>
                
                <div
                className={` duration-300 ${selectedPlan === 'plan2' ? 'border border-solid rounded-lg max-md:w-full max-md:flex max-md:gap-3 max-md:h-[30%] md:w-[30%] max-md:p-3 max-md:items-center p-4 bg-[#f0f6ff] border-[#473dff]' : 'border border-solid rounded-lg max-md:w-full max-md:flex max-md:gap-3 max-md:h-[30%] md:w-[30%] max-md:p-3 max-md:items-center p-4 cursor-pointer'}`}
                onClick={() => handleSelectPlanClick('plan2')}

                
                >
                <Image className="xl:mb-12 lg:mb-10 md:mb-8" src="./images/icon-advanced.svg" width="40" height="40" alt="arcade icon" />
                {currentData.map((plan) => (
                    <div className="" key={plan.title1}>
                        <h2 className="font-bold">{plan.title1}</h2>
                        <p className="text-gray-500 text-sm font-normal">{plan.price1}</p>
                        <p className=" text-sm font-normal">{plan.promotion1}</p>
                    </div>
                    ))}
                </div>
                <div 
                className={` duration-300 ${selectedPlan === 'plan3' ? 'border border-solid rounded-lg max-md:w-full max-md:flex max-md:gap-3 max-md:h-[30%] md:w-[30%] max-md:p-3 max-md:items-center p-4 bg-[#f0f6ff] border-[#473dff]' : 'border border-solid rounded-lg max-md:w-full max-md:flex max-md:gap-3 max-md:h-[30%] md:w-[30%] max-md:p-3 max-md:items-center p-4 cursor-pointer'}`}
                onClick={() => handleSelectPlanClick('plan3')}
                id="pro"
                >
                <Image className="xl:mb-12 lg:mb-10 md:mb-8 max-md:-mr-2" src="./images/icon-pro.svg" width="40" height="40" alt="arcade icon" />
                {currentData.map((plan) => (
                    <div className="" key={plan.title2}>
                        <h2 className="font-bold">{plan.title2}</h2>
                        <p className="text-gray-500 text-sm font-normal">{plan.price2}</p>
                        <p className="text-sm font-normal">{plan.promotion2}</p>
                    </div>
                    ))}
                </div>
            </div>
            <div className='w-[100%] h-12 rounded flex justify-center gap-8 items-center mt-6 bg-[#f0f6ff] '>
                <h1 className={`${isMonthly ? 'font-bold' : 'text-gray-400 font-bold' }`}>
                    Monthly
                </h1>
                <div>
                <label className=' bg-[#02295a] w-12 h-6 rounded-xl flex justify-center items-center relative cursor-pointer'>
      <input
      
      className='peer h-full w-full opacity-0' 
      onClick={handleToggle}
      type='checkbox'/>
        <span 
        
        className={`${isMonthly ? 'w-4 h-4 rounded-xl bg-white absolute box-border shadow-2xl transition-all duration-200 left-1' : 'w-4 h-4 rounded-xl bg-white absolute box-border shadow-2xl transition-all duration-200 left-7' }`} />

    </label>
                </div>
                <h1 className={` duration-300 ${isMonthly ? 'text-gray-400 font-bold' : 'font-bold' }`}>
                    Yearly
                </h1>
        
            </div>
            
            <div className="relative" onClick={goBackwards}><Goback  /></div><div className="relative" onClick={goForwards}><Button /></div>
     
        </main>
        </>
    )
}