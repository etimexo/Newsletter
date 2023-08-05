"use client";

import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
export default function Button() {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Valid email required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Valid email required";
    }

    return errors;
  }
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validate,
    onSubmit: (values) => {
      alert ("Success");
    }
  })
  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <div className="labeling">
        <label htmlFor="email">Email address</label>
        <h4 className="valid-email">valid email required</h4>
        <br />
      </div>
      <input 
      id="input" 
      type="email" 
      placeholder="email@company.com" 
      value={formik.values.email}
      onChange={formik.handleChange}
      />
      {/* <Link href="/success"> */}
        <button id="submit" onClick={formik.handleSubmit} type="submit">
        Subscribe to monthly newsletter
      </button>
      {/* </Link> */}
    </form>
  );
}
