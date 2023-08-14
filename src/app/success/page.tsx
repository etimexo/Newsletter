"use client";

import React from "react";
import "../suc.css";
import check from "../../../public/icon-list.svg";
import Image from "next/image";
import "../page";
import Home from "../page";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
export default function Success() {
  const searchParams = useSearchParams();
  const [success, setSuccess] = useState(false);
  function backHome() {
    setSuccess(true);
  }

  return (
    <>
      {!success && (
        <main className="main2">
          <Image src={check} className="check2" alt="..." />
          <h1 className="h12">Thanks for subscribing</h1>
          <p className="ps">
            A confirmation email has been sent to{" "}
            <strong>
              <span id="userEmail">{searchParams.get("email")}</span>
            </strong>
            . Please open it and click the button inside to confirm your
            subscription.
          </p>
          <button className="btns" onClick={backHome}>Dismiss message</button>
        </main>
      )}
      {success && <Home />}
    </>
  );
}
