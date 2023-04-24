import Image from "next/image";
import { useState } from "react";
import Button from "../components/Button";
import Goback from "../components/Goback";
import Link from "next/link";




export default function Addson() {

    const [selectedAdd, setSelectedAdd] = useState('add1');

    const [selectedAdds, setSelectedAdds] = useState<string[]>([]);

    const handleToggle = (selectedAdd: string) => {
      setSelectedAdds((prevSelectedAdds) => {
        const index = prevSelectedAdds.indexOf(selectedAdd);
        if (index !== -1) {
          // a div já está selecionada, então remova-a da matriz
          const updatedAdds = [...prevSelectedAdds];
          updatedAdds.splice(index, 1);
          return updatedAdds;
        } else {
          // a div ainda não está selecionada, então adicione-a à matriz
          return [...prevSelectedAdds, selectedAdd];
        }
      });
    };

 

    //   const currentAdd = selectedAdd ? 'monthly' : 'yearly'

    return(
        <>
        <main className='flex flex-col text-[#02295a] pt-14 px-24'>
            <h1 className='mb-2 font-bold text-4xl'>Pick add-ons</h1>
            <p className='text-gray-400'>Add-ons help enhance your gaming experience.</p>
            <div className="w-full h-64 flex flex-col justify-between mt-10">
                <div 
                onClick={() => handleToggle('add1')}
                className={` border border-solid rounded-lg p-6 h-[30%] flex items-center ${
                    selectedAdds.includes('add1') ? 'bg-[#f0f6ff] border-[#473dff]' : ''
                  }`}>
                    <label className="inline-flex cursor-pointer items-center w-full relative">
                    <div
                    className={` select-none mr-6 h-5 w-5 flex justify-center items-center ${selectedAdds.includes('add1') ? 'bg-[#473dff] rounded ' : 'rounded border border-solid'}`}
                    onClick={() => handleToggle('add1')} 
                    >
                    <Image 
                    onClick={() => handleToggle('add1')}
                    src="/images/icon-checkmark.svg" width={12} height={9} alt="icon" />
                    </div>
                    <h1  
                    className="font-bold ">Online service
                    <span 
                    className="block font-semibold text-gray-400 text-sm">Acess to multiplayer games
                    </span>
                    </h1>
                    <span 
                    className="text-[#473dff] absolute right-0">+$1/mo</span>

                        
                    </label>
                </div>
                <div 
                onClick={() => handleToggle('add2')}
                className={`border border-solid rounded-lg p-6 h-[30%] flex items-center ${
                    selectedAdds.includes('add2') ? 'bg-[#f0f6ff] border-[#473dff]' : ''
                  }`}>
                    <label className="inline-flex cursor-pointer items-center w-full relative">
                    <div
                    className={`select-none mr-6 h-5 w-5 flex justify-center items-center ${selectedAdds.includes('add2') ? 'bg-[#473dff] rounded ' : 'rounded border border-solid'}`}
                    onClick={() => handleToggle('add2')} 
                    >
                    <Image 
                    onClick={() => handleToggle('add2')}
                    src="/images/icon-checkmark.svg" width={12} height={9} alt="icon" />
                    </div>
                    <h1 className="font-bold ">Larger storage<span className="block font-semibold text-gray-400 text-sm">Extra 1TB of cloud save</span></h1>
                    <span 
                    className="text-[#473dff] absolute right-0">+$2/mo</span>
                    
                    

                    </label>
                </div>
                <div    
                onClick={() => handleToggle('add3')}
                className={`border border-solid rounded-lg p-6 h-[30%] flex items-center ${
                    selectedAdds.includes('add3') ? 'bg-[#f0f6ff] border-[#473dff]' : ''
                  }`}>
                    <label className="inline-flex cursor-pointer items-center relative w-full">
                    <div
                    className={`select-none mr-6 h-5 w-5 flex justify-center items-center ${selectedAdds.includes('add3') ? 'bg-[#473dff] rounded ' : 'rounded border border-solid'}`}
                    onClick={() => handleToggle('add3')} 
                    >
                    <Image 
                    onClick={() => handleToggle('add3')}
                    src="/images/icon-checkmark.svg" width={12} height={9} alt="icon" />
                    </div>
                    <h1 className="font-bold ">Customizable profile<span className="block font-semibold text-gray-400 text-sm">Custom theme on your profile</span></h1>
                    <span 
                    className="text-[#473dff] absolute right-0">+$2/mo</span>

                    </label>
                </div>
            </div>
            <Link href="selectplan"><Goback /></Link><Link href="summary"><Button /> </Link>
        </main>
        </>
    )
}