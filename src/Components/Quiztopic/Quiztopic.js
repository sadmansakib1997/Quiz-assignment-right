import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Quiztopic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="lg:mt-5">
      <div className="max-w-sm">
        <Card
          imgSrc={
            logo ===
            "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png"
              ? "https://i.ibb.co/qBTGWXR/52412639027-5692c15b3f-o.png"
              : logo
          }
        >
          <Link to={`/quiz/${id}`}>
            <h5 className="text-2xl font-bold text-blue-700">{name}</h5>
          </Link>
          <div className="flex items-center justify-between">
            <span className="text-gray-900">Question : {total}</span>
            <Link
              to={`/quiz/${id}`}
              className="flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Start Test{" "}
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Quiztopic;
