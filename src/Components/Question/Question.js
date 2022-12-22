import { Alert, Card } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ question, handleAns }) => {
  const [isActive, setIsActive] = useState(true);
  const handleAnsView = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <div className="mt-5">
      <ToastContainer />
      <Card>
        <div className="flex justify-between justify-center">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white max-h-screen ">
            {question.question.slice(3, -4)}
          </h5>
          <FontAwesomeIcon
            onClick={handleAnsView}
            className={isActive ? "" : "hidden"}
            icon={faEye}
          />
          <FontAwesomeIcon
            onClick={handleAnsView}
            className={isActive ? "hidden" : ""}
            icon={faEyeSlash}
          />
        </div>
        {question.options.map((option) => (
          <div
            onClick={() => handleAns(option, question.correctAnswer)}
            className="cursor-pointer border-solid border-2 border-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded"
          >
            {option}
          </div>
        ))}
      </Card>
      <div className={isActive ? "hidden" : ""}>
        <Alert
          color="success"
          onDismiss={function onDismiss() {
            handleAnsView();
          }}
        >
          <span>
            <span className="font-medium">Correct Answer :</span>{" "}
            {question.correctAnswer}
          </span>
        </Alert>
      </div>
    </div>
  );
};

export default Question;
