import TopMain from "@/components/sections/top-main";
import AboutUs from "@/components/sections/about-us";
import ThematicComunities from "@/components/sections/thematic-comunities";
import HowDoWeWork from "@/components/sections/how-do-we-work";
import HelpingBrands from "@/components/sections/helping-brands";
import WorkAuto from "@/components/sections/work-auto";
import QandA from "@/components/sections/q-n-a";

import css from "./globals.module.css";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <TopMain />
        <AboutUs />
        <ThematicComunities />
        <HowDoWeWork />
        <HelpingBrands />
        <WorkAuto />
        <QandA />

        <Link href="#" aria-label="scroll to top" className={css.scroll_to_top}>
          ↑
        </Link>
      </main>
      <Footer />
    </>
  );
}
