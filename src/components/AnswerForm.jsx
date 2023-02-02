import React from 'react'

export default function AnswerForm() {
  return (
      <div className="w-full">
          <div className="text-xl font-bold mb-5">پاسخ خود را ثبت کنید</div>
          <div className="text-xs mb-3">پاسخ خود را بنویسید</div>
          <textarea className="w-full rounded-md p-3 text-sm" rows={4} placeholder="متن پاسخ ..." />
          <div className="text-xs text-red-600 mr-5 mt-2">محل قرارگیری متن راهنمای خطا</div>
          <button className="bg-green-600 w-[200px] h-9 text-white rounded-md text-xs mt-6">ارسال پاسخ</button>
    </div>
  )
}
