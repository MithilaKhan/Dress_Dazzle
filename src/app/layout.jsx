import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './Components/Footer/Footer'
import Navbar from "@/app/Components/Navbar/Navbar"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DressDazzle',
  description: 'Generated by create next app',
}

const RootLayout =({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <div className='font-[Poppins]  '>
        <Navbar />
          <div className="pt-[30px] "> {children}</div>
          <Footer/>
        </div>
       </body>
    </html>
  )
}
export default RootLayout
