import Image from 'next/image'
import './globals.css'
import mobile from '../../public/illustration-sign-up-mobile.svg'
export default function Home() {
  return (
    <body>
      <main>
        <Image src={mobile} className='mobile-bground' alt="..."/>
      </main>
    </body>
  )
}
