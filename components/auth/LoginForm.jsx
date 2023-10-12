
import React, { useState } from "react";
import PasswordInput from "./inputs/PasswordInput";
import EmailInput from "./inputs/EmailInput";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { loginAlt } from "@/redux/features/auth";
import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "@/redux/features/auth/api";

function LoginForm() {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);

  const router = useRouter();

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(login({ email, password })).then(unwrapResult).then((res=>{
      router.push('/client')
    })).catch(error=>{
      console.log(error);
    })
    
  };

  return (
    <form>
      <EmailInput
        onChange={(e) => {
          setemail(e);
        }}
      />
      <PasswordInput className="mt-2" onChange={(e) => setpassword(e)} />

      {/* sign in */}
      <div className="signInBtn mt-8">
        <button className="w-full bg-primary text-white h-[45px] rounded-[5px]" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
