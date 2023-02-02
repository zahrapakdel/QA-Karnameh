import React from "react";
import { toFarsiNumber } from "../util";
import { TfiFaceSmile, TfiFaceSad } from "react-icons/tfi";

const mockData = {
  userName: "علی کیا",
  userProfilePic: "../../public/user3.png",
  hour: "16",
  minute: "48",
  year: "1398",
  month: "05",
  day: "06",
  upVotes: 20,
  downVotes: 10,
  body: "متغیر ENV رو تو فایلت تغییر بده درست میشه.",
};

export default function Answers() {
  return (
    <div>
      <div className="m-14 rounded-lg bg-gray-100 shadow">
        <div className="bg-white flex justify-between px-2 h-12 rounded-lg">
          <div className="flex justify-between my-2">
            <img src={mockData.userProfilePic} className="w-8 h-8 rounded-lg" />
            <span className="mx-4 text-base">{mockData.userName}</span>
          </div>
          <div className="flex justify-evenly items-center px-5">
            <div className="flex mx-3">
              <div className="text-gray-400 text-xs">ساعت :</div>
              <div className="text-xs mr-1">
                {toFarsiNumber(mockData.minute)} :{" "}
                {toFarsiNumber(mockData.hour)}
              </div>
            </div>
            <div class="left-1/2 -ml-0.5 w-0.5 h-6 bg-gray-400"></div>

            <div className="flex mx-3">
              <div className="text-gray-400 text-xs">تاریخ :</div>
              <div className="text-xs mr-1">
                {toFarsiNumber(mockData.day)} / {toFarsiNumber(mockData.month)}/{" "}
                {toFarsiNumber(mockData.year)}
              </div>
            </div>
            <div className="flex justify-between items-center text-gray-400 mr-7">
              <div className="flex justify-between items-center text-gray-400 mr-7">
                <TfiFaceSmile className="text-green-600" />
                <div className="mr-1">{mockData.upVotes}</div>
              </div>
              <div className="flex justify-between items-center text-gray-400 mr-7">
                <TfiFaceSad />
                <div className="mr-1">{mockData.downVotes}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-sm px-4 py-5">{mockData.body}</div>
          <div className="self-end p-4">
            <div className="flex justify-between">
              <button className="text-green-600 border-2 border-gray-300 rounded  flex items-center justify-evenly  w-32 h-9 text-xs">
                <TfiFaceSmile />
                پاسخ خوب بود
              </button>
              <button className="text-red-600 border-2 border-gray-300 rounded  flex justify-evenly items-center  w-32 h-9 text-xs mr-2">
                <TfiFaceSad />
                پاسخ خوب نبود
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
