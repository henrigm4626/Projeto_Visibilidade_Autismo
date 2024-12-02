import React, { useState } from 'react';
import QuestionComponent from '../QuestionComponent';

const SHComunication = ({ onAnswersUpdate }) => {
  
  const [answers, setAnswers] = useState(
    [
      {
        title: 'Eu consigo organizar minhas tarefas diárias de forma eficiente.',
        options: ['Muito Baixa', 'Baixa', 'Moderada', 'Alta', 'Muito Alta'],
        answer: null
      },
      {
        title: 'Eu sou capaz de seguir uma rotina de trabalho de forma consistente.',
        options: ['Nunca', 'Raramente', 'Às vezes', 'Frequentemente', 'Sempre'],
        answer: null
      },
      {
        title: 'Eu faço uso de listas, agendas ou ferramentas para gerenciar meu tempo.',
        options: ['Muito Baixa', 'Baixa', 'Moderada', 'Alta', 'Muito Alta'],
        answer: null
      },
      {
        title: 'Eu mantenho meu espaço de trabalho organizado.',
        options: ['Nunca', 'Raramente', 'Às vezes', 'Frequentemente', 'Sempre'],
        answer: null
      },
      {
        title: 'Eu priorizo tarefas com base na urgência e importância.',
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
      <h2 className="text-2xl font-bold text-left text-[#934FF8]">Organização</h2>
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
