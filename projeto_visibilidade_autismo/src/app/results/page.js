"use client";
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
    <div>
      <h2>Results</h2>
      <p>Name: {formData.nome}</p>
      <p>Age: {formData.idade}</p>
      <p>Email: {formData.email}</p>
      <p>Answers: {answers.join(", ")}</p>
    </div>
  );
};

export default Results;