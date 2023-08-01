import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import mobile from '../../public/illustration-sign-up-mobile.svg'
import desktop from '../../public/illustration-sign-up-desktop.svg'
import check from '../../public/icon-list.svg'
export default function Home() {
  return (
    <body>
      <main>
        <Image src={mobile} className='mobile-bground' alt="..."/>
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
            <form action="POST">
              <div className='labeling'>
                <label htmlFor="email">Email address</label> 
                <h4 className='valid-email'>valid email required</h4>
                <br />
              </div>
              <input id='input' type="email" placeholder='email@company.com' required/>
              <button id='submit' type="submit">
                <Link href="./page/success">
                  Subscribe to monthly newsletter
                </Link>
                
                </button>
            </form>
          </div>
          <Image src={desktop} className='desktop-bground' alt='...' />
        </div>
      </main>
    </body>
  )
}
