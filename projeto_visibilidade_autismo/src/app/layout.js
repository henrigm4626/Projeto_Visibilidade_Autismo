"use client";
import localFont from "next/font/local";
import "./globals.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white flex flex-col min-h-screen`}
      >
        <header className="bg-customBlue px-12 py-6">
          <div className="max-w-screen-2xl mx-auto flex justify-between">
            <Image
              src="/Logo.svg"
              alt="logo"
              width={180}
              height={38}
              priority
              onClick={() => router.push("/")}
            />
            <button
              className="rounded-full bg-primaryPurple p-2 hover:bg-darkPurple text-white font-bold px-6"
              onClick={() => router.push("/forms")}
            >
              Iniciar teste
            </button>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-cinza px-12 py-8">
          <div className="max-w-screen-2xl mx-auto flex justify-between">
            <Image
              src="/logoFooter.svg"
              alt="logo"
              width={180}
              height={38}
              priority
            />
            <div className="flex gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/facebookLogo.svg"
                  alt="Facebook"
                  width={13}
                  height={25}
                  priority
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/instagramLogo.svg"
                  alt="Instagram"
                  width={25}
                  height={25}
                  priority
                />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/youtubeLogo.svg"
                  alt="YouTube"
                  width={35}
                  height={25}
                  priority
                />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
