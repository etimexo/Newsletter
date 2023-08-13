"use client";

import React from 'react'
import '../suc.css'
import check from '../../../public/icon-list.svg'
import Image from 'next/image'
import Link from 'next/link'
import '../page'
// import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url'
import { useSearchParams } from 'next/navigation'
export default function Success() {
  // const searchParams = 
  const searchParams = useSearchParams();

  return (
    <main className='main2'>
      <Image src={check} className='check2' alt='...'/>
      <h1 className="h12">
        Thanks for subscribing
      </h1>
      <p>
        A confirmation email has been sent to <strong><span id='userEmail'>{searchParams.get('email')}</span></strong>. 
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button>
        Dismiss message
      </button>
    </main>
  )
};
