import React from 'react'
import { useParams } from 'react-router-dom'
import Answers from '../components/Answers'

export default function QuestionDetails() {
  const { qid } = useParams()
  
  return (
    <div>
      <Answers/>
    </div>
  )
}
