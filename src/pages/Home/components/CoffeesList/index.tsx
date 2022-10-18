import { CoffeeCard, CoffeeCardProps } from "./components/CoffeeCard";
import { CoffeesListContainer } from "./styles";
import { CoffeeSeeds } from "./components/CoffeeCard/coffeeSeeds";

export function CoffeesList() {
    return (
        <CoffeesListContainer>
            <h1>Nossos cafés</h1>

            <main>
                {CoffeeSeeds.map((coffee: CoffeeCardProps) => {
                    return (
                        <CoffeeCard
                            key={coffee.title}
                            title={coffee.title}
                            subtitle={coffee.subtitle}
                            tags={coffee.tags}
                            imageUrl={coffee.imageUrl} />
                    );
                })}
            </main>

        </CoffeesListContainer>

    )
}