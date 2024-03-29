import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import SocialMedia from "@/components/SocialMedia";
import {Montserrat}  from '@next/font/google'

const inter = Montserrat({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        {/* <Navbar /> */}
       
        {children}
      </body>
    </html>
  );
}
