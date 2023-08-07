"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Success from "../../src/app/success/page"
export default function Button() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const onSubmit = (data: any) => console.log(data);
  interface ButtonProps {
  setEmailValue: (value: string) => void;
  setSuccess: (value: boolean) => void;
}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="labeling">
        <label htmlFor="email">Email address</label>
        <h4 className="valid-email">{errors.email && <p>valid email required</p>}</h4>
        <br />
      </div>
      <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {/* <Link href="/success"> */}
        <button id="submit" type="submit">
        Subscribe to monthly newsletter
      </button>
      {/* </Link> */}
    </form>
  );
}

// interface ButtonProps {
//   setEmailValue: (value: string) => void;
//   setSuccess: (value: boolean) => void;
// }

// const Button: React.FC<ButtonProps> = ({ setEmailValue, setSuccess }) => {
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     const inputValue = (document.getElementById("input") as HTMLInputElement).value;
//     if (inputValue === "") {
//       alert("Please input your email");
//     } else {
//       setEmailValue(inputValue);
//       setSuccess(true);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="labeling">
//         <label htmlFor="email">Email address</label>
//         <h4 className="valid-email">valid email required</h4>
//         <br />
//       </div>
//       <input id="input" type="email" placeholder="email@company.com" required />
//       <button id="submit" type="submit">
//         Subscribe to monthly newsletter
//       </button>
//     </form>
//   );
// };

// export default Button;

