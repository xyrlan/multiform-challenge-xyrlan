import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Sidebar() {

    const [selectedButton, setSelectedButton] = useState('button1');
   

    return(
        <div 
        className="bg-[url('/images/bg-sidebar-desktop.svg')] rounded-xl w-[29%] h-full"
        >
        
                <ul className="flex flex-col gap-6 pt-10 ml-5">
                    <Link href="/" > 
                    <li className="inline-flex gap-2">
                    
                    <button
                    onClick={() => setSelectedButton('button1')} 
                    className={`${selectedButton === 'button1' ? 'rounded-full w-12 mx-4 text-lg text-black duration-500 scale-90 bg-[#bfe2fd]' : 'rounded-full w-12 mx-4 text-lg bg-transparent text-white border-white border-solid border-2 scale-90'}`}>1</button>
                    
                    <p 
                    onClick={() => setSelectedButton('button1')}
                    className="flex flex-col">
                        <span>Step 1</span>
                        <span>Your info</span>
                    </p>
                    </li>
                    </Link>
                    <Link href="/selectplan" > 
                    <li className="inline-flex gap-2">
                    <button
                    onClick={() => setSelectedButton('button2')}
                    className={`${selectedButton === 'button2' ? 'rounded-full w-12 mx-4 text-lg text-black duration-500 scale-90 bg-[#bfe2fd]' : 'rounded-full w-12 mx-4 text-lg bg-transparent text-white border-white border-solid border-2 scale-90'}`}>2</button>
                    <p 
                    onClick={() => setSelectedButton('button2')}
                    className="flex flex-col">
                        <span>Step 2</span>
                        <span>Select plan</span>
                    </p>
                    </li>
                    </Link>
                    <Link href="/addson" > 
                    <li className="inline-flex gap-2">
                        <button
                        onClick={() => setSelectedButton('button3')}
                        className={`${selectedButton === 'button3' ? 'rounded-full w-12 mx-4 text-lg text-black duration-500 scale-90 bg-[#bfe2fd]' : 'rounded-full w-12 mx-4 text-lg bg-transparent text-white border-white border-solid border-2 scale-90'}`}>3</button>
                    <p 
                    onClick={() => setSelectedButton('button3')}
                    className="flex flex-col">
                        <span>Step 3</span>
                        <span>Add-ons</span>
                    </p>
                    </li>
                    </Link>
                    <Link href="/summary" > 
                    <li className="inline-flex gap-2">
                    <button
                    onClick={() => setSelectedButton('button4')} 
                    className={`${selectedButton === 'button4' ? 'rounded-full w-12 mx-4 text-lg text-black duration-500 scale-90 bg-[#bfe2fd]' : 'rounded-full w-12 mx-4 text-lg bg-transparent text-white border-white border-solid border-2 scale-90'}`}>4</button>
                    <p 
                    onClick={() => setSelectedButton('button4')}
                    className="flex flex-col">
                        <span>Step 4</span>
                        <span>Summary</span>
                    </p>
                    </li>
                    </Link>
                </ul>

            </div>
            
    )
}