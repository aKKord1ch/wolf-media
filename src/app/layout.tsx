import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderDefault from "@/components/header";
import Popup from "@/components/shared/popup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Определяем метаданные
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <HeaderDefault />
        {children}
        {/* <Popup /> */}
      </body>
    </html>
  );
}
