import React, { useState, useEffect } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toFarsiNumber } from "../util";

export default function QuestionSummary({showBody, question}) {
  // const question = useSelector((state) => state.questions);
  
  return (
    <div className="mb-14 rounded-lg bg-gray-100 shadow">
      <div className="bg-white flex justify-between px-2 h-12 rounded-lg">
        <div className="flex justify-between my-2">
          <img
            src={"/public/" + question.profilePic}
            className="w-8 h-8 rounded-lg"
          />
          <span className="mx-4 text-base">{question.title}</span>
        </div>
        <div className="flex justify-evenly items-center px-5">
          <div className="flex mx-3">
            <div className="text-gray-400 text-xs">ساعت :</div>
            <div className="text-xs mr-1">
              {toFarsiNumber(question.minute)} : {toFarsiNumber(question.hour)}
            </div>
          </div>
          <div class="left-1/2 -ml-0.5 w-0.5 h-6 bg-gray-400"></div>

          <div className="flex mx-3">
            <div className="text-gray-400 text-xs">تاریخ :</div>
            <div className="text-xs mr-1">
              {question.day} / {question.month}/{" "}
              {question.year}
            </div>
          </div>
          <div className="flex justify-between items-center text-gray-400 mr-7">
            <BiCommentDetail />
            <div className="mr-1">{question.answersCount}</div>
          </div>
        </div>
      </div>
      {showBody ? (
        <div className="p-4 text-sm">{question.body}</div>
      ) : (
        <div className="flex flex-col">
          <div className="text-sm px-4 py-5">{question.summary}</div>
          <div className="self-end p-4 mb-2">
            <Link
                to={"/question/" + question.id}
              className="text-green-600 border-2 border-green-600 rounded-lg  items-center  w-28 h-9 text-xs px-3 py-2"
            >
              مشاهده جزییات
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
