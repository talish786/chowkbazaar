import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FaStore } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const Sidebar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-64 h-screen bg-gray-800">
        <div className="bg-white p-4">
          <img src="/logo.svg" />
        </div>
        <ul className="sidebarNav">
          <li>
            <NavLink
              to="/dashboard/home"
              className="p-4 text-white flex items-center hover:bg-gray-600"
            >
              <FiHome className="mr-2 "/>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/products"
              className="p-4 text-white flex items-center hover:bg-gray-600"
            >
              <FaStore className="mr-2" />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/orders"
              className="p-4 text-white flex items-center hover:bg-gray-600"
            >
              <FiShoppingBag className="mr-2" />
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/customers"
              className="p-4 text-white flex items-center hover:bg-gray-600"
            >
              <FaUserAlt className="mr-2" />
              Customers
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
