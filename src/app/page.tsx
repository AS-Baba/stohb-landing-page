import { Header } from "@/app/_components/ui/header";
import { HeroSection } from "@/app/_components/hero-section";
import { Products } from "@/app/_components/products";
import { Features } from "@/app/_components/features";
import { TryUs } from "@/app/_components/try-us-section";
import { Footer } from "@/app/_components/ui/footer";
import { StohbCard } from "./_components/stohb-card";
import { IndustrySolution } from "./_components/industry-solution";
import Testimonials from "./_components/testimonials";
import { BankReatingRates } from "./_components/bank-beating-rates";
import CountryCoverage from "./_components/country-coverage";
import { HereToHelp } from "./_components/here-to-help";
import { ReadyToGetStarted } from "./_components/ready-to-get-started";

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
