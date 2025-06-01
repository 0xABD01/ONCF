// src/Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { FaRegUserCircle, FaCartPlus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
import { Menu } from './menu';
import Cimenu from './Cimenu';
import PlanifierForm from './Planifier'; 

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showPlanner, setShowPlanner] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <NavLink to="/" className="text-2xl flex items-center gap-2 font-bold">
            <FaTrainSubway />
            <span>ONCF</span>
          </NavLink>

          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {Menu.map((item) => (
                <li key={item.id}>
                  {item.title === "Planifier" ? (
                    <button
                      onClick={() => setShowPlanner((prev) => !prev)}
                      className=" hover:text-blue-500 "
                    >
                      {item.title}
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
                      }>
                      {item.title}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <NavLink to="/shope" className={({ isActive }) =>
                        isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
                      }>
              <FaCartPlus className="text-2xl" />
            </NavLink>
            <NavLink to="/compte" className="hover:text-blue-500">
              <FaRegUserCircle className="text-2xl" />
            </NavLink>
            <NavLink to="/ai" className="hover:text-blue-500">
              <FaRobot className="text-2xl" />
            </NavLink>
          </div>

          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <CiMenuBurger className="text-4xl" />
          </div>
        </div>
      </nav>

      <PlanifierForm show={showPlanner} /> 
      <Cimenu open={open} />
    </>
  );
}

export default Navbar;
