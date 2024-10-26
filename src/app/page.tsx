import {Header} from "@/app/_components/ui/header";
import {HeroSection} from "@/app/_components/hero-section";
import {Products} from "@/app/_components/products";
import {Features} from "@/app/_components/features";
import {TryUs} from "@/app/_components/try-us-section";
import {Footer} from "@/app/_components/ui/footer";

export default function Home() {
    return (
        <>
            <Header></Header>
            <HeroSection></HeroSection>
            <Products></Products>
            <Features></Features>
            {/* <TryUs></TryUs> */}
            <Footer></Footer>
        </>

    );
}
