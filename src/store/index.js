import { configureStore } from "@reduxjs/toolkit";
import { addAnswer, addQuestion, setActiveQuestion, upVote, downVote, setQuestions } from "./actions";

const initialState = {
    user: {
        name: "الناز شاکردوست",
        profilePicUrl: "elnaz.png"
    },
    questions: [],
    activeQuestion: {}
}

const reducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case setActiveQuestion:
            return {
                ...state,
                activeQuestion: payload.activeQuestion
            }
        case addAnswer:
            var tmp = { ...state }
            tmp.answers.push(payload.answer)
            return tmp
        case addQuestion:
            var tmp = { ...state }
            tmp.questions.push(pauload.question)
            return tmp
        case upVote:
            var tmp = { ...state }
            tmp.activeQuestion.upVotes += 1
            return tmp
        case downVote:
            var tmp = { ...state }
            tmp.activeQuestion.downVotes += 1
            return tmp
        case setQuestions:
            return {
                ...state,
                questions: payload.questions
            }
        default:
            return state
    }
}

export default configureStore({reducer})