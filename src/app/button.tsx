"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function Button() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="labeling">
        <label htmlFor="email">Email address</label>
        <h4 className="valid-email">{errors.email && <p>valid email required</p>}</h4>
        <br />
      </div>
      <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {/* {errors.email && <p>Email is required and must be valid</p>} */}
      {/* <Link href="/success"> */}
        <button id="submit" type="submit">
        Subscribe to monthly newsletter
      </button>
      {/* </Link> */}
    </form>
  );
}
