import React from "react";

const Checkbox = ({ onCheckboxChange, selectedgender }) => {
  return (
    <div className="flex m-4 gap-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedgender==="male"?"selected":""}`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checked:bg-gray-500  border-slate-900"
            checked={selectedgender === "male"}
            onChange={()=> onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedgender==="female"?"selected":""}`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            name="gender"
            className="checkbox border-slate-900 checked:bg-gray-500"
            checked={selectedgender === "female"}
            onChange={()=> onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
