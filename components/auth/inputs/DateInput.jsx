import React from "react";

function DateInput(props) {
  return (
    <div className={props.className + " " + "flex flex-col"}>
      <label>{props.label || "Date"}</label>
      <input
        type="date"
        className={
          "w-full rounded border border-gray-400 relative h-[45px] mt-1 px-2"
        }
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
      />
      <div className="errorContainer h-4">
        {props.errorMsg && (
          <p className="validationErrors text-danger text-[13px]">
            {props.errorMsg}
          </p>
        )}
      </div>
    </div>
  );
}

export default DateInput;
