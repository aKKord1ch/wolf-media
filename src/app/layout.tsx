import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderDefault from "@/components/header";
import Popup from "@/components/shared/popup";
import Image from "next/image";
import css from "./globals.module.css";
import { Provider } from "react-redux";
import store from "../../store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Издательство новых медиа - Wolfmedia",
  description:
    "Wolfmedia - это редакция, где ежедневно создается уникальный контент для огромной аудитории. Мы помогаем брендам наладить коммуникацию с аудиторией через социальные сети.",
  keywords:
    "издательство, новые медиа, социальные сети, контент, реклама, SMM, Wolfmedia",
  openGraph: {
    title: "Издательство новых медиа - Wolfmedia",
    description:
      "Wolfmedia - это редакция, где ежедневно создается уникальный контент для огромной аудитории.",
    url: "https://wolfmedia.team",
    type: "website",
    images: [
      {
        url: "/header/WolfMEdia.svg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Издательство новых медиа - Wolfmedia",
    description:
      "Wolfmedia - это редакция, где ежедневно создается уникальный контент для огромной аудитории.",
    images: ["/header/WolfMEdia.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/heart.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/heart.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/heart.png" />
        <link rel="preload" as="image" href="/Desktop.webp" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="wrapper">
          <div className={css.image__container}>
            <Image
              src="/Desktop.webp"
              alt="Background image"
              width={1920}
              height={1212}
              objectFit="cover"
              objectPosition="center"
              priority
              sizes="(max-width: 600px) 210vw, (max-width: 900px) 150vw, 110vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <HeaderDefault />
          {children}
          {/* <Popup /> */}
        </div>
      </body>
    </html>
  );
}
