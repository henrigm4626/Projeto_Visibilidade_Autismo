import React, { useState } from 'react';
import QuestionComponent from '../QuestionComponent';

const SHComunication = ({ onAnswersUpdate }) => {
  
  const [answers, setAnswers] = useState(
    [
      {
        title: 'Eu me sinto confortável ao trabalhar em equipe.',
        options: ['Discordo fortemente', 'Discordo', 'Neutro', 'Concordo', 'Concordo fortemente'],
        answer: null
      },
      {
        title: 'Eu consigo manter boas relações com colegas de trabalho ao longo do tempo.',
        options: ['Nunca', 'Raramente', 'Às vezes', 'Frequentemente', 'Sempre'],
        answer: null
      },
      {
        title: 'Eu respeito as opiniões dos outros, mesmo quando discordo',
        options: ['Muito Baixa', 'Baixa', 'Moderada', 'Alta', 'Muito Alta'],
        answer: null
      },
      {
        title: 'Eu sou capaz de resolver conflitos com outras pessoas de forma eficaz.',
        options: ['Discordo fortemente', 'Discordo', 'Neutro', 'Concordo', 'Concordo fortemente'],
        answer: null
      },
      {
        title: 'Eu sinto que sou aceito pelos meus colegas de trabalho.',
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
      <h2 className="text-2xl font-bold text-left text-[#934FF8]">Relações Interpessoais</h2>
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
