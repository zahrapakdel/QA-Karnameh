import axios from "axios"
import store from "./store"
import {setQuestions} from "./store/actions"

const apiUrl = "http://localhost:3000"

const url = (path) => apiUrl + "/" + path

export const getQuestions = async () => {
    const res = await axios.get(url("questions"))
    store.dispatch({type: setQuestions, payload: {questions: res.data}})
}

export const postQuestion = async (question) => {
    const res = await axios.post(url("questions"), { ...question })
    await getQuestions()
}