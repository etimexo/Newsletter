import React from "react";
import Link from "next/link";

export default function button() {
  return (
    <form action="POST">
      <div className="labeling">
        <label htmlFor="email">Email address</label>
        <h4 className="valid-email">valid email required</h4>
        <br />
      </div>
      <input id="input" type="email" placeholder="email@company.com" required />
      <button id="submit" type="submit">
        <Link href="/success">Subscribe to monthly newsletter</Link>
      </button>
    </form>
  );
}
