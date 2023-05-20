import React from "react";
import Wrapper from "../Wrapper";
import ScreenHeader from "../../../components/Admin/ScreenHeader";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
const CreateCategory = () => {
  const [state, setState] = useState("");
  const submitCategory = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Wrapper>
        <ScreenHeader>
          <Link
            to="/dashboard/categories"
            className="btn-dark inline-flex items-center"
          >
            <IoArrowBack className="text-sm text-white mt-0 mr-1" />
            <span className="mr-2">All Categories</span>
          </Link>
        </ScreenHeader>
        <h3 className="text-lg capitalize mb-3">Create Category</h3>
        <div className="flex justify-center items-center">
          <form className="w-full md:w-6/12" onSubmit={submitCategory}>
            <div className="flex items-center mb-6">
              <label className="w-1/3 mr-2">Parent Category</label>
              <select class="text-sm rounded-lg block w-full form-control flex-1">
                <option selected>No Parent Categroy</option>
              </select>
            </div>
            <div className="flex items-center mb-6">
              <label className="w-1/3 mr-2">Category Name</label>
              <input
                type="text"
                name=""
                className="form-control flex-1"
                placeholder="Category Name..."
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-6">
              <label className="w-1/3 mr-2">Enable Category</label>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-700 outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900"></span>
              </label>
            </div>
            <div className="flex items-center mb-6">
              <label className="w-1/3 mr-2">Include in Menu</label>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-700 outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900"></span>
              </label>
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                value="Create Category"
                className="btn-indigo"
              />
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default CreateCategory;
