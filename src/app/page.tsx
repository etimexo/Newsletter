"use client";
import Image from "next/image";
import "./globals.css";
import mobile from "../../public/illustration-sign-up-mobile.svg";
import desktop from "../../public/illustration-sign-up-desktop.svg";
import check from "../../public/icon-list.svg";
import Success from "./success/page";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Home() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();
  const onSubmit = (data: any) => {
    const emailValue = data.email;
    setSuccess(true);
    router.push(`?email=${emailValue}`);
  };

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
                    Subscribe to monthly newsletter
                  </button>
                </form>
              </div>
              <Image src={desktop} className="desktop-bground" alt="..." />
            </div>
          </main>
        </body>
      )}
      {success && <Success />}
    </>
  );
}
