import React from 'react'
import { useParams } from 'react-router-dom'
import Answer from '../components/Answer'
import AnswerForm from '../components/AnswerForm'
import QuestionSummary from '../components/QuestionSummary'

export default function QuestionDetails() {
  const { qid } = useParams()
  
  return (
    <div className="m-14">
      <QuestionSummary showBody={true}/>
      <Answer />
      <AnswerForm />
    </div>
  )
}
