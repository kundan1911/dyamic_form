import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { QuizzBuilder } from "react-quizzes";
import QuizExample from "./QuizExample";
import "react-quizzes/lib/assets/antd.css";
function App() {
  const [formdata, setFormData] = useState([]);
  const handleChildData = (data) => {
    console.log("oKKKK"); // Update parent state with child data
    console.log("fkdnf",formdata)
  };
  return (
    <div className="App">
      <QuizExample data={formdata} updateOK={handleChildData}/>
      <QuizzBuilder onChange={setFormData} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
