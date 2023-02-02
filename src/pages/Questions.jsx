import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getQuestions } from "../api";
import QuestionSummary from "../components/QuestionSummary";

export default function Questions() {
  const questions = useSelector((state) => state.questions);

  useEffect(() => {
    getQuestions();
  }, []);

  const renderQuestions = () => {
    return questions.map((question) => (
      <QuestionSummary showBody={false} question={question} />
    ));
  };

  return <div className="m-14">{renderQuestions()}</div>;
}
