import { Header } from "@/app/_components/ui/header";
import { HeroSection } from "@/app/_components/hero-section";
import { Products } from "@/app/_components/products";
import { Features } from "@/app/_components/features";
import { Footer } from "@/app/_components/ui/footer";
import { StohbCard } from "./_components/stohb-card";
import { IndustrySolution } from "./_components/industry-solution";
import { BankReatingRates } from "./_components/bank-beating-rates";
import { HereToHelp } from "./_components/here-to-help";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Products />
      <Features />
      <StohbCard />

      <IndustrySolution></IndustrySolution>
      {/* <Testimonials></Testimonials> */}
      <BankReatingRates></BankReatingRates>
      {/* <div className="max-sm:hidden">
        <CountryCoverage ></CountryCoverage>
      </div> */}
      <HereToHelp></HereToHelp>
      {/* <ReadyToGetStarted></ReadyToGetStarted> */}
      <Footer></Footer>
    </>
  );
}
