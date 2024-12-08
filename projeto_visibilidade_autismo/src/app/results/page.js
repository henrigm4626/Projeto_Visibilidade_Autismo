"use client";
import "./page.css";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function createBarGraph(containerId, title, number) {
  const container = document.getElementById(containerId);

  // Clear previous graph content
  container.innerHTML = '';

  // Create the graph title
  const titleElement = document.createElement('h2');
  titleElement.className = 'text-xl font-bold text-center';
  titleElement.textContent = title;
  container.appendChild(titleElement);

  // Create y-axis labels (1 to 5)
  const yAxisContainer = document.createElement('div');
  yAxisContainer.className = 'flex flex-col items-end pr-4';
  for (let i = 5; i >= 1; i--) {
    const label = document.createElement('div');
    label.className = 'text-sm h-8 flex items-center';
    label.textContent = i;
    yAxisContainer.appendChild(label);
  }

  // Create the bar container
  const barContainer = document.createElement('div');
  barContainer.className = 'flex-grow bg-gray-100 relative';

  // Add the bar
  const bar = document.createElement('div');
  bar.className = `absolute bottom-0 bg-blue-500 transition-all duration-300 ease-in-out`;
  bar.style.height = `${(number / 5) * 100}%`; // Convert number to percentage
  bar.style.width = '100%';

  barContainer.appendChild(bar);

  // Combine y-axis and bar container
  const graphContainer = document.createElement('div');
  graphContainer.className = 'flex items-stretch space-x-2';
  graphContainer.appendChild(yAxisContainer);
  graphContainer.appendChild(barContainer);

  // Add graph to container
  container.appendChild(graphContainer);
}

const Results = () => {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState(null);
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    const formDataParam = searchParams.get("formData");
    const answersParam = searchParams.get("answers");

    if (formDataParam && answersParam) {
      setFormData(JSON.parse(formDataParam));
      setAnswers(JSON.parse(answersParam));
    }
  }, [searchParams]);

  if (!formData || !answers) {
    return <p>Loading...</p>;
  }

  return (
    <div className="resultados">
      <h2>Results</h2>
      <p>Name: {formData.nome}</p>
      <p>Age: {formData.idade}</p>
      <p>Email: {formData.email}</p>
      {answers.map((group, groupIndex) => {
        // Calcular a média das respostas do grupo
        const totalAnswers = group.length;
        const groupAverage = group.reduce((sum, answer) => sum + Number(answer.answer), 0) / totalAnswers;

        // ID exclusivo para o gráfico do grupo
        const groupGraphId = `bar-graph-group-${groupIndex}`;

        // Invocar createBarGraph para a média do grupo
        setTimeout(() => {
          createBarGraph(
            groupGraphId,
            `Group ${groupIndex + 1} Average`,
            groupAverage
          );
        }, 0);

        return (
          <li key={groupIndex}>
            <strong>Group {groupIndex + 1}:</strong>
            <ul>
              {group.map((answer, answerIndex) => (
                <li key={answerIndex}>
                  <p>Question: {answer.title}</p>
                  <p>Selected Option: {answer.answer}</p>
                </li>
              ))}
            </ul>

            {/* Container para o gráfico da média do grupo */}
            <div id={groupGraphId} className="w-1/2 h-64 mt-4"></div>
          </li>
        );
      })}
    </div>
  );
};

export default Results;