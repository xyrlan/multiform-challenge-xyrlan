import { useState, ReactElement } from "react";

const useMultiForm = (formSteps: ReactElement[]) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goBackwards = () => {
        if (currentIndex === 0) return;
        setCurrentIndex((prev) => prev - 1);

    };


const goForwards = () => {
    if(currentIndex === formSteps.length - 1)  return;
    setCurrentIndex((prev) => +1)
};

return {
    formSteps,
    currentIndex,
    currenteStep: formSteps[currentIndex],
    goBackwards,
    goForwards,
    isFirstStep: currentIndex === 0,
    isLastStep: currentIndex === formSteps.length - 1,
};
};