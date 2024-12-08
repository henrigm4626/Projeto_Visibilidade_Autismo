"use client";
import "./page.css";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function createBarGraph(containerId, title, number) {
  const container = document.getElementById(containerId);

  // Clear previous graph content
  container.innerHTML = '';

  // Create the graph title
  const titleElement = document.createElement('h2');
  titleElement.className = 'text-xl font-bold text-center mb-4';
  titleElement.textContent = title;
  container.appendChild(titleElement);

  // Graph Container
  const graphContainer = document.createElement('div');
  graphContainer.className = 'relative w-full h-64 border-l border-b border-gray-300';

  // Add dotted lines and y-axis labels
  for (let i = 5; i >= 1; i--) {
    const lineContainer = document.createElement('div');
    lineContainer.className = 'absolute w-full flex items-center';
    lineContainer.style.bottom = `${((i - 1) / 5) * 100}%`;

    // Dotted line
    const dottedLine = document.createElement('div');
    dottedLine.className = 'w-full border-t border-dotted border-gray-400';
    dottedLine.style.borderWidth = '0.5px'; // Thinner dotted line

    // Add y-axis label inside the graph
    const label = document.createElement('div');
    label.className = 'absolute -left-8 text-sm text-gray-600';
    label.textContent = i;

    lineContainer.appendChild(dottedLine);
    lineContainer.appendChild(label);
    graphContainer.appendChild(lineContainer);
  }

  const barColors = ['#934ff8', '#f8584f', '#ffab51', '#496edb', '#582f95'];

  // Add the bar
  const bar = document.createElement('div');
  bar.className = 'absolute bottom-0 flex justify-center items-center text-white text-sm font-semibold transition-all duration-300 ease-in-out';
  bar.style.backgroundColor = barColors[containerId.split('-').pop() % barColors.length]; // Define a cor baseada no índice
  bar.style.height = `${(number / 5) * 100}%`; // Convert number to percentage
  bar.style.width = '50px';
  bar.style.left = '50%';
  bar.style.transform = 'translateX(-50%)';

  // Add numerical value inside the bar
  const value = document.createElement('div');
  value.textContent = number.toFixed(1); // Show 1 decimal for the average
  bar.appendChild(value);

  graphContainer.appendChild(bar);

  // Append the graph to the container
  container.appendChild(graphContainer);
}

// Função para exportar para PDF
const exportToPDF = () => {
  const button = document.querySelector('.btn-export-pdf');
  button.style.display = 'none'; // Esconde o botão

  const element = document.querySelector('.resultados');
  html2canvas(element, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = 0;
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);

    while (imgHeight > pageHeight) {
      position -= pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    }

    pdf.save('Resultados.pdf');

    button.style.display = 'block'; // Mostra o botão novamente
  });
};

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
      <h2 className="text-2xl font-bold mb-8">Results</h2>
      <p>Name: {formData.nome}</p>
      <p>Age: {formData.idade}</p>
      <p>Email: {formData.email}</p>
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {answers.map((group, groupIndex) => {
          // Calculate the group average
          const totalAnswers = group.length;
          const groupAverage =
            group.reduce((sum, answer) => sum + Number(answer.answer), 0) /
            totalAnswers;

          // Unique ID for the graph
          const groupGraphId = `bar-graph-group-${groupIndex}`;

          // Create the graph
          setTimeout(() => {
            createBarGraph(
              groupGraphId,
              `Média do Grupo ${groupIndex + 1}`,
              groupAverage
            );
          }, 0);

          return (
            <div
              key={groupIndex}
              id={groupGraphId}
              className="w-[15%] h-64-md p-2"
            ></div>
          );
        })}
      </div>
      {/* Botão de exportação para PDF */}
      <button
        className="btn-export-pdf"
        onClick={exportToPDF}
      >
        Exportar PDF
      </button>
    </div>
  );
};

export default Results;

