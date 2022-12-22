import { Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navmenu = () => {
  return (
    <div className="mx-9 md:mt-4 ">
      <Navbar className="" fluid={true} rounded={true}>
        <Navbar.Brand>
          <NavLink to="/">
            <span className="text-2xl font-bold text-red-500">
              Test Your IQ
            </span>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <div className="text-center md:flex md:gap-7">
            <Navbar.Link>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "md:text-blue-700 md:bg-inherit md:p-0 bg-blue-700 text-white py-2 px-20 rounded"
                    : undefined
                }
                to="/home"
              >
                <span className="text-2xl font-bold text-blue-500">Topics</span>
              </NavLink>
            </Navbar.Link>
            <Navbar.Link>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "md:text-blue-700 md:bg-inherit md:p-0 bg-blue-700 text-white py-2 px-20 rounded"
                    : undefined
                }
                to="/statistics"
              >
                <span className="text-2xl font-bold text-blue-500">
                  Statistics
                </span>
              </NavLink>
            </Navbar.Link>
            <Navbar.Link>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "md:text-blue-700 md:bg-inherit md:p-0 bg-blue-700 text-white py-2 px-20 rounded"
                    : undefined
                }
                to="/blog"
              >
                <span className="text-2xl font-bold text-blue-500">Blog</span>
              </NavLink>
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navmenu;
