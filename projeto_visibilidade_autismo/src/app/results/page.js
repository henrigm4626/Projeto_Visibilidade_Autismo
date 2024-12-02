"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Results = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(null);
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    if (router.query.formData && router.query.answers) {
      setFormData(JSON.parse(router.query.formData));
      setAnswers(JSON.parse(router.query.answers));
    }
  }, [router.query]);

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
