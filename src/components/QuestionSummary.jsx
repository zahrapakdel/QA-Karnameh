import React from 'react'
import { BiCommentDetail } from "react-icons/bi";

const mockData = {
  profilePicUrl: "../../public/user4.png",
  questionTitle: " مشکل در Auth درReact ",
  time: "ساعت",
  hour: "16",
  minute: "48",
  dateTitle: "تاریخ:",
  year: "1398",
  month: "05",
  day: "06",
  numberOfComments: "20",
  questionContent:
    "سلام من میخوام یه authentication ساده تو react بسازم اما این error رو بهم میده. نمیدونم مشکل از کجاست. عکس خروجی console رو هم گذاشتم که ببینید دقیقا چه مشکلی وجود داره",
};

function toFarsiNumber(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n
    .toString()
    .split("")
    .map((x) => farsiDigits[x])
    .join("");
}

export default function QuestionSummary() {
  return (
    <div className="m-14 rounded-lg bg-gray-100 shadow">
      <div className="bg-white flex justify-between px-2 h-12 rounded-lg">
        <div className="flex justify-between my-2">
          <img src={mockData.profilePicUrl} className="w-8 h-8 rounded-lg" />
          <span className="mx-4 text-base">{mockData.questionTitle}</span>
        </div>
        <div className="flex justify-evenly items-center px-5">
          <div className="flex mx-3">
            <div className="text-gray-400 text-xs">{mockData.time} :</div>
            <div className="text-xs mr-1">
              {toFarsiNumber(mockData.minute)} : {toFarsiNumber(mockData.hour)}
            </div>
          </div>
          <div class="left-1/2 -ml-0.5 w-0.5 h-6 bg-gray-400"></div>

          <div className="flex mx-3">
            <div className="text-gray-400 text-xs">{mockData.dateTitle}</div>
            <div className="text-xs mr-1">
              {toFarsiNumber(mockData.day)} / {toFarsiNumber(mockData.month)}/{" "}
              {toFarsiNumber(mockData.year)}
            </div>
          </div>
          <div className="flex justify-between items-center text-gray-400 mr-7">
            <BiCommentDetail />
            <div className="mr-1">{mockData.numberOfComments}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-sm px-4 py-5">{mockData.questionContent}</div>
        <div className="self-end p-4">
          <button
            type="button"
            className="text-green-600 border-2 border-green-600 rounded  items-center  w-28 h-9 text-xs"
          >
            مشاهده جزییات
          </button>
        </div>
      </div>
    </div>
  );
}