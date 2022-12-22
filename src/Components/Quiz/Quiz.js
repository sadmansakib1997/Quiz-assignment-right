import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Question from "../Question/Question";

const Quiz = () => {
  const QuizData = useLoaderData();
  const [rightAns, setRightAns] = useState([]);
  const right = () =>
    toast.success("Yes you are right ", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const wrong = () =>
    toast.error("Oh no you are wrong ", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const handleAns = (option, correctAns) => {
    if (option === correctAns) {
      right();
      if (!rightAns.includes(correctAns)) {
        let rightAnsArr = [...rightAns, correctAns];
        setRightAns(rightAnsArr);
      }
    } else {
      wrong();
    }
  };
  return (
    <div className="mt-4">
      <h2 className="text-3xl font-semibold text-center text-violet-500">
        Quiz Of {QuizData.data.name}
      </h2>
      <h3 className="font-semibold text-center bg-yellow-700 mt-5 p-2 text-white rounded w-6/12 mx-auto">
        Your Mark is : {rightAns.length}
      </h3>
      <div className="px-4 mt-3 mb-16 grid lg:grid-cols-2 grid-cols-1 gap-5">
        {QuizData.data.questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            handleAns={handleAns}
          ></Question>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
