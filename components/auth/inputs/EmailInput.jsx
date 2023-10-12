import React from "react";

function EmailInput(props) {
  return (
    <div className={props.className}>
      <label>Email</label>
      <input
        type="email"
        className=" w-full rounded border border-gray-400 relative h-[45px] mt-1 px-2"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
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

export default EmailInput;
