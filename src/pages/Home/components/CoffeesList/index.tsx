import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";

import { CoffeeCard } from "./components/CoffeeCard";

import { CoffeesListContainer } from "./styles";

export function CoffeesList() {
    const { coffees } = useContext(CartContext)

    return (
        <CoffeesListContainer>
            <h1>Nossos cafés</h1>

            <main>
                {coffees.map(coffee => {
                    return (
                        <CoffeeCard key={coffee.title} coffee={coffee} />
                    )
                })}
            </main>

        </CoffeesListContainer>

    )
}