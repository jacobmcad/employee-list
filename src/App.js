import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [info, setInfo] = useState({
    picture: "",
    name: "",
    title: "",
    status: "",
  });
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: new Date().getTime().toString(),
      personPicture: info.picture,
      personName: info.name,
      personTitle: info.title,
      personStatus: info.status,
    };
    setList([...list, newItem]);
    setInfo({ picture: "", name: "", title: "", status: "" });
  };

  const changeHandler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <section className="container mx-auto p-10">
      <div className="mb-10 mx-auto w-5/12 bg-white p-7 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label
              htmlFor="profilepicture"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Picture URL
            </label>

            <input
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              type="text"
              name="picture"
              value={info.picture}
              onChange={changeHandler}
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              type="text"
              name="name"
              value={info.name}
              onChange={changeHandler}
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>

            <input
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              type="text"
              name="title"
              value={info.title}
              onChange={changeHandler}
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <input
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              type="text"
              name="status"
              value={info.status}
              onChange={changeHandler}
            />
          </div>
          <button
            type="submit"
            className="mt-2.5 mb-9 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="grocery-container">
        <List items={list} />
      </div>
    </section>
  );
}

export default App;
