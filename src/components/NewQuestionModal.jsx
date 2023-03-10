import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { postQuestion } from "../api";
import { makeid } from "../util";

export default function NewQuestionModal({ setShowModal }) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const userProfilePic = useSelector((state) => state.user.profilePicUrl);

  const submit = () => {
    const dateArray = new Intl.DateTimeFormat("fa-IR").format(new Date()).split("/")
    const now = new Date()
    const question = {
      id: makeid(5),
      title,
      body,
      profilePic: userProfilePic,
      year: dateArray[0],
      month: dateArray[1],
      day: dateArray[2],
      hour: now.getHours(),
      minute: now.getMinutes(),
      summary: body.length > 97 ? body.slice(0, 97) + "..." : body.slice(0, 97),
      answersCount: 0
    }
    postQuestion(question).then(res => setShowModal(false))
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div
        className="inset-0 fixed opacity-30 bg-gray-600"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="w-[700px] top-20 z-50 rounded-lg shadow fixed bg-gray-100 opacity-100">
        <div className="bg-white flex justify-between px-6 py-3 h-12 rounded-lg">
          <div className="text-base font-bold">ایجاد سوال جدید</div>
          <button
            className="p-1 text-black float-left "
            onClick={() => setShowModal(false)}
          >
            <IoClose />
          </button>
        </div>
        <div className="flex flex-col p-5">
          <div className="text-xs p-1 mb-3">موضوع</div>
          <input type="text" onChange={(evt) => setTitle(evt.target.value)} className="w-full mb-3 h-11 p-2 bg-white rounded-md" />
          <div className="text-xs p-1 mb-3">متن سوال</div>
          <textarea rows={5} onChange={(evt) => setBody(evt.target.value)} className="w-full mb-3 p-2 rounded-md bg-white" />
          <div className="flex flex-row-reverse">
            <button onClick={submit} className="w-24 h-9 bg-green-600 text-white rounded-md text-xs">ایجاد سوال</button>
            <button onClick={() => setShowModal(false)} className="w-20 mx-2 h-9 bg-none text-green-600 text-xs">انصراف</button>
          </div>
        </div>
      </div>
    </div>
  );
}
