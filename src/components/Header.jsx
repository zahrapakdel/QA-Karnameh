import { FaPlus, FaCaretDown } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import NewQuestionModal from "./NewQuestionModal";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";



export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("")
  const user = useSelector(state => state.user)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.split("/")[1] == "question")
      setHeaderTitle("جزییات سوال")
    else
      setHeaderTitle("لیست سوالات")
  }, [location])

  return (
    <div>
      <nav className="navbar navbar-expand-lg py-4 px-14 bg-white relative flex items-center w-full justify-between">
        <div className="font-bold text-2xl">{headerTitle}</div>
        <div className="flex items-center">
          <button
            type="button"
            className="text-white bg-green-600 rounded flex items-center justify-evenly w-32 h-9 text-xs"
            onClick={() => setShowModal(true)}
          >
            <FaPlus />
            سوال جدید
          </button>
          <div className="flex justify-evenly mr-10 items-center">
            <img
              src={"/public/" + user.profilePicUrl}
              className="w-11 h-11 rounded-3xl"
            />
            <span className="mx-4 text-sm">{user.name}</span>
            <FaCaretDown />
          </div>
        </div>
      </nav>
      {showModal ? <NewQuestionModal setShowModal={setShowModal}/> : null}
    </div>
  );
}
