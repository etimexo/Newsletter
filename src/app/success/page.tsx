"use client";

import React from "react";
import "../suc.css";
import check from "../../../public/icon-list.svg";
import Image from "next/image";
import "../page";
import Home from "../page";
import { useState } from "react";
// import { useSearchParams } from "next/navigation";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Success() {
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();
  // const searchParams = useSearchParams();
  // const [success, setSuccess] = useState(false);
  // function backHome() {
  //   setSuccess(true);
  //   alert("NB: No actual mail was sent, this is just a demo")
  // }
  function backHome() {
    // Instead of setting success to true, you can use router to navigate back
    router.push('https://newsign.netlify.app');
    alert("NB: No actual mail was sent, this is just a demo")
  }

  return (
    <>
      {/* {!success && ( */}
        <main className="main2">
          <Image src={check} className="check2" alt="..." />
          <h1 className="h12">Thanks for subscribing</h1>
          <p className="ps">
            A confirmation email has been sent to{" "}
            <strong>
              <span id="userEmail">{query.get("email")}</span>
            </strong>
            . Please open it and click the button inside to confirm your
            subscription.
          </p>
          <button className="btns" onClick={backHome}>Dismiss message</button>
        </main>
      {/* )} */}
      {/* {success && <Home />} */}
    </>
  );
}
