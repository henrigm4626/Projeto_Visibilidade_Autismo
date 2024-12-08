"use client";
import React, { useState } from "react";
import "./page.css";
import { useRouter } from "next/navigation";
import SHComunication from "@/components/SocialHability/SHComunication";
import SHRelations from "@/components/SocialHability/SHRelations";
import SHEmpathy from "@/components/SocialHability/SHEmpathy";
import LHOrganization from "@/components/LaborHability/LHOrganization";
import LHRules from "@/components/LaborHability/LHRules";
import LHProblems from "@/components/LaborHability/LHProblems";
import GeneralDaya from "@/components/GeneralData";

function Form() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const [answersTemp, setAnswersTemp] = useState([]);

  const handleAnswersUpdateTemp = (updatedAnswers) => {
    setAnswersTemp(updatedAnswers);
    console.log("Updated Answers: temp", updatedAnswers);
  };

  const [answers] = useState([]);

  const saveAnswers = () => {
    if (answersTemp.length > 0) {
      answers.push(answersTemp);
    }
  };

  const deleteAnswers = () => {
    answers.pop();
  };

  const nextStep = () => {
    saveAnswers();
    setCurrentStep((prevStep) => (prevStep < 7 ? prevStep + 1 : prevStep));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log(answers);
  };

  const prevStep = () => {
    deleteAnswers();
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log(answers);
  };

  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    email: "",
  });

  const handleFormDataChange = (updatedData) => {
    setFormData(updatedData);
    console.log("Updated Form Data:", updatedData);
  };

  const handleNavigate = () => {
    const query = new URLSearchParams({
      formData: JSON.stringify(formData),
      answers: JSON.stringify(answers),
    }).toString();
  
    router.push(`/results?${query}`);
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
          <div className={`step-bar ${currentStep >= 1 ? "active" : ""}`}></div>
        </div>
        <div
          className={`step-indicator ${
            currentStep >= 2 ? "active font-bold" : "font-bold"
          }`}
        >
          <span>Avaliação das Habilidades Sociais</span>
          <div className={`step-bar ${currentStep >= 2 ? "active" : ""}`}></div>
        </div>
        <div
          className={`step-indicator ${
            currentStep >= 5 ? "active font-bold" : "font-bold"
          }`}
        >
          <span>Avaliação das Habilidades Laborais</span>
          <div className={`step-bar ${currentStep >= 5 ? "active" : ""}`}></div>
        </div>
      </div>

      <div className="mt-24">
        {currentStep === 1 && (
          <p className="text-3xl font-bold text-[#582F95]">
            Informações Gerais
          </p>
        )}
        {currentStep > 1 && currentStep < 5 && (
          <p className="text-3xl font-bold text-[#582F95]">
            Avaliação das Habilidades Sociais
          </p>
        )}
        {currentStep > 4 && (
          <p className="text-3xl font-bold text-[#582F95]">
            Avaliação das Habilidades Laborais
          </p>
        )}
      </div>

      {/* Step Content */}
      <div className="step-content mt-8">
        {currentStep === 1 && (
          <GeneralDaya onDataChange={handleFormDataChange} />
        )}
        {currentStep === 2 && (
          <SHComunication onAnswersUpdate={handleAnswersUpdateTemp} />
        )}
        {currentStep === 3 && (
          <SHRelations onAnswersUpdate={handleAnswersUpdateTemp} />
        )}
        {currentStep === 4 && (
          <SHEmpathy onAnswersUpdate={handleAnswersUpdateTemp} />
        )}
        {currentStep === 5 && (
          <LHOrganization onAnswersUpdate={handleAnswersUpdateTemp} />
        )}
        {currentStep === 6 && (
          <LHRules onAnswersUpdate={handleAnswersUpdateTemp} />
        )}
        {currentStep === 7 && (
          <LHProblems onAnswersUpdate={handleAnswersUpdateTemp} />
        )}
      </div>

      {/* Control Buttons */}
      <div className="controls mt-24">
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
          {currentStep < 7 && (
            <button
              className="next-button rounded-full bg-primaryPurple p-2 hover:bg-darkPurple text-white font-bold px-6"
              onClick={nextStep}
              disabled={currentStep === 7}
            >
              Próximo
            </button>
          )}
          {currentStep === 7 && (
            <button
              className="next-button rounded-full bg-primaryPurple p-2 hover:bg-darkPurple text-white font-bold px-6"
              onClick={handleNavigate}
            >
              Ver resultado
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
