import React, { useState } from 'react';
import QuestionComponent from '../QuestionComponent';

const SHComunication = ({ onAnswersUpdate }) => {
  
  const [answers, setAnswers] = useState(
    [
      {
        title: 'Eu consigo identificar rapidamente problemas em meu trabalho.',
        options: ['Discordo fortemente', 'Discordo', 'Neutro', 'Concordo', 'Concordo fortemente'],
        answer: null
      },
      {
        title: 'Eu penso em várias soluções possíveis antes de tomar uma decisão.',
        options:  ['Muito Baixa', 'Baixa', 'Moderada', 'Alta', 'Muito Alta'],
        answer: null
      },
      {
        title: 'Eu sou capaz de resolver problemas com autonomia.',
        options: ['Nunca', 'Raramente', 'Às vezes', 'Frequentemente', 'Sempre'],
        answer: null
      },
      {
        title: 'Eu busco ajuda quando encontro um problema que não consigo resolver.',
        options: ['Discordo fortemente', 'Discordo', 'Neutro', 'Concordo', 'Concordo fortemente'],
        answer: null
      },
      {
        title: 'Eu consigo analisar as consequências de diferentes soluções.',
        options: ['Muito Baixa', 'Baixa', 'Moderada', 'Alta', 'Muito Alta'],
        answer: null
      }
    ]
  );

  const handleOptionSelect = (questionIndex, selectedValue) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex].answer = selectedValue;
    setAnswers(updatedAnswers); 
    onAnswersUpdate(updatedAnswers);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-left text-[#934FF8]">Cumprimento de Regras</h2>
      {answers.map((question, index) => (
        <QuestionComponent
          key={index}
          question={question.title}
          options={question.options}
          onOptionSelect={handleOptionSelect} 
          questionIndex={index}
        />
      ))}
    </div>
  );
};

export default SHComunication;
