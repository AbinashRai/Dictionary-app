import React from "react";

const Tabs = ({ selectedTab, onTabClick }) => {
  return (
    <div className="flex mb-4">
      <button
        className={`${
          selectedTab === "noun" ? "bg-black" : "bg-gray-300"
        } text-white px-3 py-2 rounded mr-2`}
        onClick={() => onTabClick("noun")}>
        Noun
      </button>
      <button
        className={`${
          selectedTab === "verb" ? "bg-black" : "bg-gray-300"
        } text-white px-3 py-2 rounded`}
        onClick={() => onTabClick("verb")}>
        Verb
      </button>
    </div>
  );
};

export default Tabs;
