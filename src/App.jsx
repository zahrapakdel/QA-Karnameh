import { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Questions from "./pages/Questions";
import QuestionDetails from "./pages/QuestionDetails";

function App() {
  return (
    <div className="h-full font-yekan">
      <Header />
      <Routes>
        <Route path="/" element={<Questions />}></Route>
        <Route path="/question/:qid" element={<QuestionDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
