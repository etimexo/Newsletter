"use client";
import Image from "next/image";
import "./globals.css";
import mobile from "../../public/illustration-sign-up-mobile.svg";
import desktop from "../../public/illustration-sign-up-desktop.svg";
import check from "../../public/icon-list.svg";
import Button from "./button";
import Success from "./success/page";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { type } from "os";

export default function Home() {
  let value = document.getElementById("input")
  const [success, setSuccess] = useState(false);
  let [emailValue, setEmailValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    // setEmailValue(data.email);
    setSuccess(true);
    console.log(data);
    const emailValue = data.email

  };
  // interface SuccessProps {
  //   email: string;
  // }
  // const Success: React.FC<SuccessProps> = ({ email }) => {
  //   return <Success email={""} />;
  // }

  return (
    <>
      {!success && (
        <body>
          <main>
            <Image src={mobile} className="mobile-bground" alt="..." />
            <div className="content">
              <div className="info">
                <h1>Stay updated!</h1>
                <p>
                  Join 60,000+ product managers receiving monthly updates on:{" "}
                  <br /> <br />
                  <span className="span">
                    <Image src={check} className="check" alt="..." />
                    Product delivery and building what matters
                  </span>{" "}
                  <br />
                  <span className="span">
                    <Image src={check} className="check" alt="..." />
                    Measuring to ensure updates are a success
                  </span>{" "}
                  <br />
                  <span className="span">
                    <Image src={check} className="check" alt="..." />
                    And much more!
                  </span>{" "}
                  <br />
                </p>
                {/* <Button setEmailValue={setEmailValue} setSuccess={setSuccess} /> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="labeling">
                    <label htmlFor="email">Email address</label>
                    <h4 className="valid-email">
                      {errors.email && <p>valid email required</p>}
                    </h4>
                    <br />
                  </div>
                  <input
                    type="email"
                    id="input"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <button id="submit" type="submit">
                    <Link href={{
                      pathname: "/success",
                      query: {
                        email: "data.email"
                        // email: `${value.value}`
                      },
                    }}>
                    Subscribe to monthly newsletter
                    </Link>
                    {/* Subscribe to monthly newsletter */}
                  </button>
                </form>
              </div>
              <Image src={desktop} className="desktop-bground" alt="..." />
            </div>
          </main>
        </body>
       )}

      {/* {success && <Success email={emailValue} />} */}
      {success && <Success />}
    </>
  );
}
