import { FaPlus, FaCaretDown } from "react-icons/fa";
import React from "react";

const mockData = {
    profileName: "الناز شاکردوست",
    profilePicUrl: "../../public/elnaz.png",
    headerTitle: "لیست سوالات",
}

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-4 px-14 bg-white relative flex items-center w-full justify-between">
        <div className="font-bold text-2xl">{mockData.headerTitle}</div>
        <div className="flex items-center">
          <button
            type="button"
            className="text-white bg-green-600 rounded flex items-center justify-evenly w-32 h-9 text-xs"
          >
            <FaPlus />
            سوال جدید
          </button>
          <div className="flex justify-evenly mr-10 items-center">
            <img
              src={mockData.profilePicUrl}
              className="w-11 h-11 rounded-3xl"
            />
            <span className="mx-4 text-sm">{mockData.profileName}</span>
            <FaCaretDown />
          </div>
        </div>
      </nav>
    </div>
  );
}
