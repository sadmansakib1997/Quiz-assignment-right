import React from "react";

const Blog = () => {
  return (
    <div className="md:px-4 px-2 md:mt-5 mt-5">
      <h1 className="pb-10 text-3xl">This is Blog part</h1>
      <h4 className="text-6xl">1.what is the purpose of react router?</h4>
      <br />
      <p className="text-4xl">
        ans:What is the use of React router? React Router is a standard library
        for routing in React. It enables the navigation among views of various
        components in a React Application, allows changing the browser URL,{" "}
        <br /> and keeps the UI in sync with the URL. <br /> Let us create a
        simple application to React to understand how the React Router works.
      </p>
      <br />
      <h4 className="text-6xl">2.How does context api work?</h4>
      <br />
      <p className="text-4xl">
        The React Context API is a way for a React app to effectively produce
        global variables that can be passed around. <br /> This is the
        alternative to "prop drilling" or moving props from grandparent to child
        to parent, and so on. Context is also touted as an easier, lighter
        approach to state management using Redux.
      </p>
      <br />
      <h4 className="text-6xl">3.What is the use of use ref?</h4>
      <p className="text-4xl">
        The useRef Hook allows you to persist values between render. <br /> It
        can be used to store a mutable value that does not cause a re-render
        when updated. It can be used to access a DOM element directly.
      </p>
    </div>
  );
};

export default Blog;
