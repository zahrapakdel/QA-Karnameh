import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestionDetails } from "../api";
import Answer from "../components/Answer";
import AnswerForm from "../components/AnswerForm";
import QuestionSummary from "../components/QuestionSummary";

export default function QuestionDetails() {
  const { qid } = useParams();
  const activeQuestion = useSelector((state) => state.activeQuestion);

  useEffect(() => {
    getQuestionDetails(qid)
  }, []);

  const renderAnswers = () => activeQuestion.answers.map(answer => <Answer answer={answer} />)

  return (
    <>
      {activeQuestion.id ? (
        <div className="m-14">
          <QuestionSummary showBody={true} question={activeQuestion} />
          <div>
            {renderAnswers()}
          </div>
          <AnswerForm qid={qid}/>
        </div>
      ) : null}
    </>
  );
}
