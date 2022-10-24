import { CoffeesList } from "./components/CoffeesList";
import { HeroSection } from "./components/heroSection";

import { HomeContainer } from "./styles";


export function Home() {
    return (
        <HomeContainer>
            <HeroSection />

            <CoffeesList />
        </HomeContainer>
    )
}