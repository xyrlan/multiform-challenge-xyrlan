import '../styles/globals.css'

import { useState } from 'react'
import { useMultiForm } from '../hooks/useMultiForm'

import  Selectplan from '../components/selectplan'
import { Yourinfo } from '../components/yourinfo'



import Sidebar from '../components/Sidebar'
import Addsonyr from '../components/addsonyr'
import Addsonmo from '../components/addsonmo'
import Summary from '../components/summary'
import Thankyou from '../components/thankyou'


const formTemplate = {
  name:"",
  email:"",
  phone:"",
  monthly: [
    {
      title: 'Arcade',
      price: '$9/mo',
      addson: '$1/mo',
      plusaddson: '+$1/mo',
      numaddson: 1,
      type1: 'Total (per month)',
    },
    {
      title1: 'Advanced',
      price1: '$12/mo',
      addson1: '$2/mo',
      numaddson1: 2,
      plusaddson1: '+$2/mo',
    },
    {
        title2: 'Pro',
        price2: '$15/mo',
        addson2: '$2/mo',
        numaddson2: 2,
        plusaddson2:'+$2/mo',
    },
  ],
  yearly: [
    {
      title: 'Arcade',
      price: '$90/yr',
      promotion:'2 months free',
      addson: '$10/yr',
      plusaddson: '+$10/yr',
      numaddson: 10,
      type1: 'Total (per year)',
    },
    {
      title1: 'Advanced',
      price1: '$120/yr',
      promotion1:'2 months free',
      addson1: '$20/yr',
      plusaddson1: '+$20/yr',
      numaddson1: 20,
    },
    {
        title2: 'Pro',
        price2: '$150/yr',
        promotion2:'2 months free',
        addson2: '$20/yr',
        plusaddson2: '+$20/yr',
        numaddson2: 20,
    },
  ],
  selectedadds: [
    {
    onlineservice: 'Online service', 
    largerstorage: 'Large Storage',
    customizable: 'Customizable profile'
    }
  ]
};



export default function App({ Component, pageProps }) {


  const [selectedAdds, setSelectedAdds] = useState<string[]>([]);
  const handleToggleAddson = (selectedAdd: string) => {
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
    })
  };

  // console.log(selectedAdds);


  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value };
    });
  };

//plano mensal ou anual nos steps
  const [isMonthly, setIsMonthly] = useState(true);

  const currentData = formTemplate[isMonthly ? 'monthly' : 'yearly'];

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  const {currentStep, goBackwards, goForwards } = useMultiForm(5);

  let thirdComponent;
  isMonthly ? thirdComponent = <Addsonmo goBackwards={goBackwards} goForwards={goForwards} currentData={currentData} data={data} handleToggleAddson={handleToggleAddson} selectedAdds={selectedAdds} setSelectedAdds={setSelectedAdds} isMonthly={isMonthly} /> : thirdComponent = <Addsonyr goBackwards={goBackwards} goForwards={goForwards} currentData={currentData} data={data} handleToggleAddson={handleToggleAddson} selectedAdds={selectedAdds} setSelectedAdds={setSelectedAdds} isMonthly={isMonthly} />


  const MultiFormComponents = [
  <Yourinfo data={data} goForwards={() => goForwards()} updateFieldHandler={updateFieldHandler} />, 
  <Selectplan goBackwards={goBackwards} goForwards={goForwards} isMonthly={isMonthly} handleToggle={handleToggle} data={data} updateFieldHandler={updateFieldHandler} currentData={currentData} />, 
  thirdComponent, 
  <Summary goBackwards={goBackwards} goForwards={goForwards} data={data} currentData={currentData} selectedAdds={selectedAdds} />,
  <Thankyou data={data} /> 
];


// console.log(currentStep);

  return( 
  <>
    <main className=" font-ubuntu flex md:h-screen max-md:h-screen justify-center md:items-center lg:p-16 bg-[#bfe2fd] relative">
          <div className='md:hidden max-md:w-screen '>
            <Sidebar currentSteps={currentStep} />
          </div>
        <div className='bg-white w-[70%] h-[95%] max-lg:h-[75%] max-md:h-fit rounded-3xl p-3 flex shadow-lg max-md:flex-col max-md:w-[95%] max-md:top-20 max-md:z-10 max-md:absolute'>
          <div className=' lg:h-full lg:rounded-xl max-md:hidden'>
          <Sidebar currentSteps={currentStep} />
          </div>
          <div className='bg-white w-[70%] max-md:w-full'>
          {MultiFormComponents[currentStep]}
            </div>
        </div>
        <footer className="md:hidden absolute w-full flex bottom-0 items-center h-16 bg-white text-blue-300">
          <p className='text-xs absolute bottom-0 left-[15%]'>Challenge by:<a className='text-black' href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a> <a href="https://github.com/xyrlan" target="_blank">Coded by: <span className='text-black' >Xyrlan</span></a></p>
    </footer>
    <footer className="max-md:hidden absolute w-full flex bottom-0 items-center h-16 bg-[#bfe2fd] text-blue-500">
          <p className='text-xs absolute bottom-0 left-[40%]'>Challenge by:<a className='text-black' href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a> <a href="https://github.com/xyrlan" target="_blank">Coded by: <span className='text-black' >Xyrlan</span></a></p>
    </footer>            
    </main>
  </>
  );
}
