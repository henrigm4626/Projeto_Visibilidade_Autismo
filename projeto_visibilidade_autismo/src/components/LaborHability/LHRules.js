import React, { useState } from 'react';
import QuestionComponent from '../QuestionComponent';

const SHComunication = ({ onAnswersUpdate }) => {
  
  const [answers, setAnswers] = useState(
    [
      {
        title: 'Eu sigo as normas e políticas da empresa sem dificuldades.',
        options: ['Nunca', 'Raramente', 'Às vezes', 'Frequentemente', 'Sempre'],
        answer: null
      },
      {
        title: 'Eu entendo a importância de cumprir prazos e metas estabelecidas.',
        options:  ['Discordo fortemente', 'Discordo', 'Neutro', 'Concordo', 'Concordo fortemente'],
        answer: null
      },
      {
        title: 'Eu tenho facilidade em seguir regras e procedimentos padronizados.',
        options: ['Muito Baixa', 'Baixa', 'Moderada', 'Alta', 'Muito Alta'],
        answer: null
      },
      {
        title: 'Eu compreendo e sigo as regras de segurança no trabalho.',
        options: ['Nunca', 'Raramente', 'Às vezes', 'Frequentemente', 'Sempre'],
        answer: null
      },
      {
        title: 'Eu procuro estar sempre de acordo com as regras estabelecidas pela equipe ou empresa.',
        options: ['Discordo fortemente', 'Discordo', 'Neutro', 'Concordo', 'Concordo fortemente'],
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
