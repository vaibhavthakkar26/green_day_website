// "use client"
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "./components/commons/header";
// import Footer from "./components/commons/footer";
// import { useRouter } from "next/router";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



// export default function RootLayout({ children }) {
//   const router = useRouter();
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//       <Header />
//         {children}
//         {router.pathname !== '/login' && <Footer />}

//      </body>
//     </html>
//   );
// }




// root-layout.js

"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import Lenis from "lenis";
import { useEffect } from "react";
import Header from "./components/commons/header";
import Footer from "./components/commons/footer";
import useAOS from "../lib/hooks/useAOS/index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // adjust as needed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Pass pageProps to the useAOS hook
  useAOS(pageProps?.page?._id);
  // const router = useRouter();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
