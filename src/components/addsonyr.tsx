import Image from "next/image";
import Button from "../components/Button";
import Goback from "../components/Goback";





export default function Addsonyr({ currentData, data, handleToggleAddson, selectedAdds, setSelectedAdds, isMonthly, goForwards, goBackwards }) {


    console.log(selectedAdds);

    if(selectedAdds.includes('add1') && isMonthly){
        data.addsonprice = 1
    }
    if(selectedAdds.includes('add2') && isMonthly){
        data.addsonprice1 = 2
    }
    if(selectedAdds.includes('add3') && isMonthly){
        data.addsonprice2 = 2
    }
    if(selectedAdds.includes('add1') && !isMonthly){
        data.addsonprice = 10
    }
    if(selectedAdds.includes('add2') && !isMonthly){
        data.addsonprice1 = 20
    }
    if(selectedAdds.includes('add3') && !isMonthly){
        data.addsonprice2 = 20
    }

    return(
        <>
        
        <main className='flex flex-col text-[#02295a] md:pt-10 lg:px-10 xl:px-24 max-lg:px-10 md:px-4 max-md:justify-center max-md:pt-6 max-md:px-4 max-md:w-full w-full max-sm:pb-3'>
            <h1 className='mb-2 font-bold text-4xl'>Pick add-ons</h1>
            <p className='text-gray-400'>Add-ons help enhance your gaming experience.</p>
            <div className="w-full h-64 flex flex-col justify-between xl:mt-10 md:mt-6 lg:mt-8 max-md:mt-6">
                <div 
                onClick={() => handleToggleAddson('add1')}
                className={`duration-300 border border-solid rounded-lg max-md:p-2 md:p-2 lg:p-4 xl:p-6 h-[30%] flex items-center ${
                    selectedAdds.includes('add1') ? 'bg-[#f0f6ff] border-[#473dff]' : ''
                  }`}>
                    <label className="inline-flex cursor-pointer items-center w-full relative">
                    <div
                    className={`duration-300 select-none max-md:mr-2 md:mr-3 lg:mr-6 h-5 w-5 flex justify-center items-center ${selectedAdds.includes('add1') ? 'bg-[#473dff] rounded ' : 'rounded border border-solid'}`}
                    onClick={() => handleToggleAddson('add1')} 
                    >
                    <Image 
                    onClick={() => handleToggleAddson('add1')}
                    src="images/icon-checkmark.svg" width={12} height={9} alt="icon" />
                    </div>
                    <h1  
                    className="font-bold ">Online service
                    <span 
                    className="block font-medium text-gray-400 text-sm">Acess to multiplayer games
                    </span>
                    </h1>
                    {currentData.map((data) => (
                    <span
                    key={data.addson}
                    className="text-[#473dff] absolute right-0">  {data.addson}  </span>
                    ))}

                        
                    </label>
                </div>
                <div 
                onClick={() => handleToggleAddson('add2')}
                className={`duration-300 border border-solid rounded-lg max-md:p-2 md:p-2 lg:p-4 xl:p-6 h-[30%] flex items-center ${
                    selectedAdds.includes('add2') ? 'bg-[#f0f6ff] border-[#473dff]' : ''
                  }`}>
                    <label className="inline-flex cursor-pointer items-center w-full relative">
                    <div
                    className={`duration-300 select-none max-md:mr-2 md:mr-3 lg:mr-6 h-5 w-5 flex justify-center items-center ${selectedAdds.includes('add2') ? 'bg-[#473dff] rounded ' : 'rounded border border-solid'}`}
                    onClick={() => handleToggleAddson('add2')} 
                    >
                    <Image 
                    onClick={() => handleToggleAddson('add2')}
                    src="images/icon-checkmark.svg" width={12} height={9} alt="icon" />
                    </div>
                    <h1 className="font-bold ">Larger storage<span className="block font-medium text-gray-400 text-sm">Extra 1TB of cloud save</span></h1>
                    {currentData.map((data) => (
                    <span
                    key={data.addson1}
                    className="text-[#473dff] absolute right-0">  {data.addson1}  </span>
                    ))}
                    
                    

                    </label>
                </div>
                <div    
                onClick={() => handleToggleAddson('add3')}
                className={`duration-300 border border-solid rounded-lg max-md:p-2 md:p-2 lg:p-4 xl:p-6 h-[30%] flex items-center ${
                    selectedAdds.includes('add3') ? 'bg-[#f0f6ff] border-[#473dff]' : ''
                  }`}>
                    <label className="inline-flex cursor-pointer items-center relative w-full">
                    <div
                    className={`duration-300 select-none max-md:mr-2 md:mr-3 lg:mr-6 h-5 w-5 flex justify-center items-center ${selectedAdds.includes('add3') ? 'bg-[#473dff] rounded ' : 'rounded border border-solid'}`}
                    onClick={() => handleToggleAddson('add3')} 
                    >
                    <Image 
                    onClick={() => handleToggleAddson('add3')}
                    src="images/icon-checkmark.svg" width={12} height={9} alt="icon" />
                    </div>
                    <h1 className="font-bold ">Customizable profile<span className="block font-medium text-gray-400 text-sm">Custom theme on your profile</span></h1>
                    
                    {currentData.map((data) => (
                    <span
                    key={data.addson2}
                    className="text-[#473dff] absolute right-0"> {data.addson2}  </span>
                    ))}
                    
                    </label>
                </div>
            </div>
            <div className="relative"  onClick={goBackwards}><Goback  /></div><div className="relative"  onClick={goForwards}><Button /></div>
        </main>
        
        </>
    )
}