import React from 'react'
import '../suc.css'
import check from '../../../public/icon-list.svg'
import Image from 'next/image'
import '../button'

export default function success() {
  return (
    <main className='main2'>
      <Image src={check} className='check2' alt='...'/>
      <h1 className="h12">
        Thanks for subscribing
      </h1>
      <p>
        A confirmation email has been sent to 
      </p>
    </main>
  )
};
