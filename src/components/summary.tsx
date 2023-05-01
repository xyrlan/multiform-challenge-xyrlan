import Goback from "./Goback";

export default function Summary({data , currentData, selectedAdds, goForwards,  goBackwards}) {

const Total = () =>  {
        let totalPrice = data.numprice;
        if (selectedAdds.includes('add1')) {
            totalPrice += data.addsonprice;
        
        } if (selectedAdds.includes('add2')) {
            totalPrice += data.addsonprice1;
          } if (selectedAdds.includes('add3')) {
            totalPrice += data.addsonprice2;
          }
          return totalPrice;
    }

const totalPrice = Total();
console.log(totalPrice);

    return(
        <>
        <main className='flex flex-col text-[#02295a] md:pt-10 lg:px-10 xl:px-24 max-lg:px-10 md:px-4 max-md:justify-center max-md:pt-6 max-md:px-4 max-md:w-full w-full max-sm:pb-3'>
            <h1 className='mb-2 font-bold text-4xl'>Finishing Up</h1>
            <p className='text-gray-400'>Double-check everything looks OK before confirming.</p>
            <div className="w-full flex flex-col justify-between mt-10 bg-[#f0f6ff] rounded-xl px-6 shadow-md ">
                <div className="flex border-b border-gray-300 h-24 items-center">
                    <div className="flex justify-between w-full items-center">
                        <div>
                            <p className="font-bold ">{data.plan}</p>
                            <button className=" text-gray-400 text-sm underline">Change</button>
                        </div>
                
                            <p className="font-bold">{data.price}</p>
                    </div>
                </div>
                <div className={`${selectedAdds.includes('add1') ? 'flex h-9 text-sm relative items-center w-full' : 'hidden'}`}>
                    <h1  
                    className="text-gray-400 font-medium ">Online service
                    </h1>
                    {currentData.map((data) => (
                    <span className="absolute right-0 font-bold">{data.plusaddson}</span>
                    ))}
                </div>
                <div className={`${selectedAdds.includes('add2') ? 'flex h-9 text-sm relative items-center w-full' : 'hidden'}`}>
                    <h1  
                    className="text-gray-400 font-medium ">Larger storage
                    </h1>
                    {currentData.map((data) => (
                    <span className="absolute right-0 font-bold">{data.plusaddson1}</span>
                    ))}
                </div>
                <div className={`${selectedAdds.includes('add3') ? 'flex h-9 text-sm relative items-center w-full' : 'hidden'}`}>
                    <h1  
                    className="text-gray-400 font-medium ">Customizable profile
                    </h1>
                    {currentData.map((data) => (
                    <span className="absolute right-0 font-bold">{data.plusaddson2}</span>
                    ))}
                </div>
            </div>
            <div className="px-6 flex justify-between items-center mt-4">
            {currentData.map((data) => (
            <h1 className="text-gray-400 font-medium  text-sm">
                {data.type1}
            </h1>
            ))}
            <span className="text-[#473dff] font-bold text-xl">+${totalPrice}{data.type}</span>
            </div>


            <div className="relative" onClick={goBackwards}><Goback  /></div>
            <div onClick={goForwards}>        
            <div className='relative'>  
            <button
          type='submit'
          className={`max-md:fixed max-md:right-0 max-md:bottom-0 max-md:mb-3 max-md:mr-3 md:mt-8 absolute right-0 bg-[#02295a] w-fit p-2 px-5 text-white rounded-xl hover:bg-[#144071] duration-300 shadow-sm font-bold`}  
        >
          Next Step
        </button>
            </div>
            </div>
        </main>
        </>
    )
}