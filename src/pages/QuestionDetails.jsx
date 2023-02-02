import React from 'react'
import { useParams } from 'react-router-dom'

export default function QuestionDetails() {
  const { qid } = useParams()
  
  return (
    <div>QuestionDetails { qid }</div>
  )
}
