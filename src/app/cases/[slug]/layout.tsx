import Footer from "@/components/footer";
import { Metadata } from "next";
import css from "./index.module.css";

export const metadata: Metadata = {
  title: "Cases",
  description: "Mega-prikl-discription",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer className={css.footer} />
    </>
  );
}
