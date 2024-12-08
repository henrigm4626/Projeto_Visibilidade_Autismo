"use client";
import "./page.css";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
      <div>
        <h3>Answers:</h3>
        <ul>
          {answers.map((group, groupIndex) => (
            <li key={groupIndex}>
              <strong>Group {groupIndex + 1}:</strong>
              <ul>
                {group.map((answer, answerIndex) => (
                  <li key={answerIndex}>
                    <p>Question: {answer.title}</p>
                    <p>Selected Option: {answer.options[answer.answer]}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Results;