import {Header} from "@/app/_components/ui/header";
import {HeroSection} from "@/app/_components/hero-section";
import {Products} from "@/app/_components/products";
import {Features} from "@/app/_components/features";

export default function Home() {
    return (
        <>
            <Header></Header>
            <HeroSection></HeroSection>
            <Products></Products>
            <Features></Features>
        </>

    );
}
