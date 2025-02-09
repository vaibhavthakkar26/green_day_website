// "use client";

// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import "aos/dist/aos.css";
// import Lenis from "lenis";
// import { useEffect, useRef } from "react";
// import Header from "./(main)/components/commons/header";
// import useAOS from "../lib/hooks/useAOS";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({ children, pageProps }) {
//   // Initialize smooth scroll (Lenis)
//   const lenisRef = useRef(null); // Store Lenis globally

//   useEffect(() => {
//     if (!lenisRef.current) {
//       lenisRef.current = new Lenis({
//         duration: 1.2,
//         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       });

//       function raf(time) {
//         lenisRef.current.raf(time);
//         requestAnimationFrame(raf);
//       }

//       requestAnimationFrame(raf);
//     }

//     return () => {
//       lenisRef.current.destroy();
//     };
//   }, []);
//   useAOS(pageProps?.page?._id);

//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Header lenis={lenisRef} />
//         {children}
//       </body>
//     </html>
//   );
// }



"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import Lenis from "lenis";
import { useEffect, useRef, createContext, useContext, useState } from "react";
import Header from "./(main)/components/commons/header";
import useAOS from "../lib/hooks/useAOS";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Create Lenis Context
const LenisContext = createContext(null);
export const useLenis = () => useContext(LenisContext);

export default function RootLayout({ children, pageProps }) {
  const lenisRef = useRef(null); 

  useAOS(pageProps?.page?._id);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Header />
          {children}
        </body>
      </html>
    </LenisContext.Provider>
  );
}
