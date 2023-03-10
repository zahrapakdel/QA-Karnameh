import axios from "axios";
import store from "./store";
import { setActiveQuestion, setQuestions } from "./store/actions";

const apiUrl = "http://localhost:3000";

const url = (path) => apiUrl + "/" + path;

export const getQuestions = async () => {
  const res = await axios.get(url("questions"));
  store.dispatch({ type: setQuestions, payload: { questions: res.data } });
};

export const postQuestion = async (question) => {
  const res = await axios.post(url("questions"), { ...question });
  await getQuestions();
};

export const getQuestionDetails = async (qid) => {
  const question = (await axios.get(url(`questions?id=${qid}`))).data[0];
  const answers = (await axios.get(url(`answers?qid=${qid}`))).data;

  store.dispatch({
    type: setActiveQuestion,
    payload: { activeQuestion: { ...question, answers } },
  });
};

export const postAnswers = async (answer) => {
  var res = await axios.post(url("answers"), { ...answer });
  const answers = (await axios.get(url(`answers?qid=${answer.qid}`))).data;

  const question = store.getState().activeQuestion;
  res = await axios.put(url("questions/" + question.id), {
    ...question,
    answers: undefined,
    answersCount: question.answersCount + 1,
  });
  store.dispatch({
    type: setActiveQuestion,
    payload: {
      activeQuestion: {
        ...question,
        answers,
        answersCount: question.answersCount + 1,
      },
    },
  });
};

export const putUpVote = async (answer) => {
  const res = axios.put(url("answers/" + answer.id), {
    ...answer,
    upVotes: answer.upVotes + 1,
  });
  const answers = (await axios.get(url(`answers?qid=${answer.qid}`))).data;

  const question = store.getState().activeQuestion;
  store.dispatch({
    type: setActiveQuestion,
    payload: { activeQuestion: { ...question, answers } },
  });
};

export const putDownVote = async (answer) => {
  const res = axios.put(url("answers/" + answer.id), {
    ...answer,
    downVotes: answer.downVotes + 1,
  });
  const answers = (await axios.get(url(`answers?qid=${answer.qid}`))).data;

  const question = store.getState().activeQuestion;
  store.dispatch({
    type: setActiveQuestion,
    payload: { activeQuestion: { ...question, answers } },
  });
};
