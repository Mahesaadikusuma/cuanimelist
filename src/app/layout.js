
import { Inter } from 'next/font/google'
// import './globals.css'
import '@/app/globals.css'
import Navbar from '@/components/Utilities/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CuyAnimeList',
  description: 'Membuat website anime list indonesia ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar/>
      {children}
      </body>
    </html>
  )
}
