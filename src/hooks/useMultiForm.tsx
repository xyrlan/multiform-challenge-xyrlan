import { useState, ReactElement } from "react";

export function useMultiForm(stepLenght) { 
    const [currentStep, setCurrentStep] = useState(0);

function goForwards() {                                                     
    if (currentStep === stepLenght - 1) return;
    setCurrentStep((prev) => prev + 1)
}

function goBackwards() {
    if (currentStep === 0) return;
    setCurrentStep((prev) => prev - 1)
}

// (e) => changeStep(currentStep - 1, e)

return {
    currentStep,
    goForwards,
    goBackwards,
    };
};
