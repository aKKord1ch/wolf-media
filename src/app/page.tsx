import Section1 from "@/components/sections/top-main";
import Section2 from "@/components/sections/about-us";
import Section3 from "@/components/sections/thematic-comunities";
import Section4 from "@/components/sections/how-do-we-work";
import HelpingBrands from "@/components/sections/helping-brands";
import WorkAuto from "@/components/sections/work-auto";
import QandA from "@/components/sections/q-n-a";

import css from "./globals.module.css";
import HeaderDefault from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="wrapper">
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <HelpingBrands />
        <WorkAuto />
        <QandA />

        <Link href="#" aria-label="scroll to top" className={css.scroll_to_top}>
          ↑
        </Link>
      </main>
      <Footer />

      <div className={css.image__container}>
        <Image
          src="/Desktop.webp"
          alt="Background image"
          width={1920}
          height={1212}
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
    </div>
  );
}
