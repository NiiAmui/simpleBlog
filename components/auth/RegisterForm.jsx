import React from "react";
import TextInput from "./inputs/TextInput";
import DateInput from "./inputs/DateInput";
import EmailInput from "./inputs/EmailInput";
import PasswordInput from "./inputs/PasswordInput";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { register } from "@/redux/features/auth/api";
import { unwrapResult } from "@reduxjs/toolkit";

function RegisterForm() {
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);

  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(
      register({
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      })
    );
  };
  return (
    <form>
      <TextInput
        label="First name"
        value={firstName}
        onChange={(e) => {
          setfirstName(e);
        }}
      />
      <TextInput
        className="mt-2"
        label="Last Name"
        value={lastName}
        onChange={(e) => {
          setlastName(e);
        }}
      />
      <DateInput className="mt-2" label="Date of Birth" />
      <EmailInput
        className="mt-2"
        label="Date of Birth"
        value={email}
        onChange={(e) => {
          setemail(e);
        }}
      />
      <PasswordInput
        className="mt-2"
        label="Password"
        value={password}
        onChange={(e) => {
          setpassword(e);
        }}
      />

      {/* sign in */}
      <div className="signInBtn mt-8">
        <button className="w-full bg-primary text-white h-[45px] rounded-[5px]" onClick={handleRegister}>
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
