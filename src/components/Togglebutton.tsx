import { useState } from 'react';


export default function ToggleButton({ onClick }) {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  

  return (
    <label className=' bg-[#02295a] w-12 h-6 rounded-xl flex justify-center items-center relative cursor-pointer'>
      <input
      
      className='peer h-full w-full opacity-0' 
      onClick={onClick}
      type='checkbox'/>
        <span 
        
        className='w-4 h-4 rounded-xl bg-white absolute left-1 box-border shadow-2xl transition-all duration-200 peer-checked:left-7 '/>

    </label>
  );
}

