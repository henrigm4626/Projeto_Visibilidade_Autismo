"use client";
import React, { useState } from "react";
import "./page.css";
import { useRouter } from "next/navigation";

function Form() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <div className="stepper-container max-w-screen-2xl mx-auto">
      {/* Step Indicators */}
      <div className="step-indicators">
        <div
          className={`step-indicator ${
            currentStep >= 1 ? "active font-bold" : "font-bold"
          }`}
        >
          <span>Informações Gerais</span>
          <div
            className={`step-bar ${currentStep >= 1 ? "active" : ""}`}
          ></div>
        </div>
        <div
          className={`step-indicator ${
            currentStep >= 2 ? "active font-bold" : "font-bold"
          }`}
        >
          <span>Avaliação das Habilidades Sociais</span>
          <div
            className={`step-bar ${currentStep >= 2 ? "active" : ""}`}
          ></div>
        </div>
        <div
          className={`step-indicator ${
            currentStep >= 3 ? "active font-bold" : "font-bold"
          }`}
        >
          <span>Avaliação das Habilidades Laborais</span>
          <div
            className={`step-bar ${currentStep >= 3 ? "active" : ""}`}
          ></div>
        </div>
      </div>

      {/* Step Content */}
      <div className="step-content">
        {currentStep === 1 && <p>Content for Step 1</p>}
        {currentStep === 2 && <p>Content for Step 2</p>}
        {currentStep === 3 && <p>Content for Step 3</p>}
      </div>

      {/* Control Buttons */}
      <div className="controls">
        <button
          className="bg-transparent text-[#2E3233] font-bold"
          onClick={() => router.push("/")}
        >
          Cancelar
        </button>
        <div>
          <button
            className="prev-button rounded-full bg-transparent p-2 hover:bg-[#ddd] text-[#2E3233] font-bold px-6 mr-4"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Voltar
          </button>
          <button
            className="next-button rounded-full bg-primaryPurple p-2 hover:bg-darkPurple text-white font-bold px-6"
            onClick={nextStep}
            disabled={currentStep === 3}
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
