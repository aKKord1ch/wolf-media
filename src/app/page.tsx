import Section1 from "@/components/sections/top-main";
import Section2 from "@/components/sections/about-us";
import Section3 from "@/components/sections/thematic-comunities";
import Section4 from "@/components/sections/how-do-we-work";
import HelpingBrands from "@/components/sections/helping-brands";

export default function Home() {
  return (
   <main>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <HelpingBrands />
   </main>
  );
}
