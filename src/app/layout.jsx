import { Inter } from 'next/font/google'
import '@/app/globals.css'
import Navbar from '../components/Navbar'
import { Gabarito } from 'next/font/google'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'Cuy Anime',
  description: 'Web Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
