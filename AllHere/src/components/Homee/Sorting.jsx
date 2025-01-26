import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gri my-5 p-2 flex justify-end items-center   rounded-xl  outline-none border-none mb-16">
      <select
        onChange={(e) => setSort(e.target.value)}
        name=""
        id=""
        className="bg-white-200 py-3 px-5 rounded-xl  ease-in-out  outline-none border-none"
      >
        <option disabled value="" className="rounded-xl outline-none">
          SELECT
        </option>
        <option className="rounded-xl outline-none" value="inc">
          GROWING
        </option>
        <option className="rounded-xl outline-none" value="dec">
          DECREASING
        </option>
      </select>
    </div>
  );
};

export default Sorting;
