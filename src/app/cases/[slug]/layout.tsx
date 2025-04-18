import Footer from "@/components/footer";
import HeaderDefault from "@/components/header";
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
    <div className={css.custom_wrapper}>
      {children}
      <Footer className={css.footer} />
      {/* <Popup /> */}
    </div>
  );
}