import Image from 'next/image'
import Link from 'next/link'
import success from './success/page'
import './globals.css'
import mobile from '../../public/illustration-sign-up-mobile.svg'
import desktop from '../../public/illustration-sign-up-desktop.svg'
import check from '../../public/icon-list.svg'
import Button from './button'
export default function Home() {
  return (
    <body>
      <main>
        <Image src={mobile} className='mobile-bground' alt="..." />
        <div className='content'>
          <div className='info'>
            <h1>Stay updated!</h1>
            <p>
              Join 60,000+ product managers receiving monthly
              updates on: <br />
              <div>
                <Image src={check} className='check' alt='...' />Product delivery and building what matters
              </div>
              <div>
                <Image src={check} className='check' alt='...' />Measuring to ensure updates are a success
              </div>
              <div>
                <Image src={check} className='check' alt='...' />And much more!
              </div>
            </p>
            <Button />
          </div>

          <Image src={desktop} className='desktop-bground' alt='...' />

        </div>

      </main>
    </body>
  )
}
