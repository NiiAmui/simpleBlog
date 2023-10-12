"client side";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function PasswordInput(props) {
  const [type, settype] = useState("password");
  return (
    <div className={props.className}>
      {/* label */}
      <label htmlFor="password">Password</label>
      {/* input container */}
      <div className="inputContainer rounded border border-gray-400 relative h-[45px] mt-1">
        {/* input */}
        <input
          type={type}
          className="h-full rounded w-full pl-2 pr-8"
          id="password"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
        {/* eye icons */}
        <div className="eyeIcons absolute right-2 top-[25%]">
          {type == "text" && (
            <EyeIcon className="w-5" onClick={() => settype("password")} />
          )}
          {type == "password" && (
            <EyeSlashIcon className="w-5" onClick={() => settype("text")} />
          )}
        </div>
      </div>
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

export default PasswordInput;
