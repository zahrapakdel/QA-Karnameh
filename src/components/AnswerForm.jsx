import React, { useState } from "react";
import { useSelector } from "react-redux";
import { postAnswers } from "../api";
import {makeid} from "../util"

export default function AnswerForm({qid}) {
  const [body, setBody] = useState("");
  const user = useSelector(state => state.user)

  const submit = () => {
    const dateArray = new Intl.DateTimeFormat("fa-IR").format(new Date()).split("/")
    const now = new Date()
    const answer = {
      id: makeid(5),
      qid: qid,
      userName: user.name,
      userProfilePic: user.profilePicUrl,
      body,
      upVotes: 0,
      downVotes: 0,
      hour: now.getHours(),
      minute: now.getMinutes(),
      year: dateArray[0],
      month: dateArray[1],
      day: dateArray[2]
    }
    postAnswers(answer).then(res => setBody(""))
  }

  return (
    <div className="w-full">
      <div className="text-xl font-bold mb-5">پاسخ خود را ثبت کنید</div>
      <div className="text-xs mb-3">پاسخ خود را بنویسید</div>
      <textarea
        onChange={(evt) => setBody(evt.target.value)}
        className="w-full rounded-md p-3 text-sm"
        rows={4}
        placeholder="متن پاسخ ..."
      />
      <div className="text-xs text-red-600 mr-5 mt-2">
        محل قرارگیری متن راهنمای خطا
      </div>
      <button onClick={submit} className="bg-green-600 w-[200px] h-9 text-white rounded-md text-xs mt-6">
        ارسال پاسخ
      </button>
    </div>
  );
}
