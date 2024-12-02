import React, { useState } from 'react';
import QuestionComponent from '../QuestionComponent';

const SHComunication = ({ onAnswersUpdate }) => {
  
  const [answers, setAnswers] = useState(
    [
      {
        title: 'Eu consigo expressar minhas ideias de forma clara e compreensível para os outros.',
        options: ['Discordo fortemente', 'Discordo', 'Neutro', 'Concordo', 'Concordo fortemente'],
        answer: null
      },
      {
        title: 'Eu consigo expressar minhas ideias de forma clara e compreensível para os outros.',
        options: ['Nunca', 'Raramente', 'Às vezes', 'Frequentemente', 'Sempre'],
        answer: null
      },
      {
        title: 'Eu entendo com facilidade o que os outros comunicam verbalmente.',
        options: ['Muito Baixa', 'Baixa', 'Moderada', 'Alta', 'Muito Alta'],
        answer: null
      },
      {
        title: 'Eu tenho facilidade em explicar conceitos complexos em situações profissionais.',
        options: ['Discordo fortemente', 'Discordo', 'Neutro', 'Concordo', 'Concordo fortemente'],
        answer: null
      },
      {
        title: 'Eu consigo pedir ajuda ou esclarecimentos quando necessário.',
        options: ['Nunca', 'Raramente', 'Às vezes', 'Frequentemente', 'Sempre'],
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
      <h2 className="text-2xl font-bold text-left text-[#934FF8]">Comunicação</h2>
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
