import { useContext, useState } from "react";
import { CartContext, CartItem, Coffee } from "../../../../../../contexts/CartContext";

import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { AddButton, CardHeader, CoffeeCardContainer, CounterButton, FormContainer, Tags } from "./styles";

interface CoffeeCardProps {
    coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {

    const { setCartItems } = useContext(CartContext)

    const [coffeeQuantity, setCoffeeQuantity] = useState(1);

    function handleChangeCoffeeQuantity(symbol: number) {
        if (symbol === 1) {
            setCoffeeQuantity((state) => {
                return state + 1
            });
        } else {
            setCoffeeQuantity((state) => {
                if (state === 1) return 1
                return state - 1
            });
        }
    }

    function handleNewItemToCart() {
        const item: CartItem = {
            coffee,
            amount: coffeeQuantity
        }
        setCartItems(item)
    }

    return (
        <CoffeeCardContainer>
            <img src={coffee.imageUrl} alt={coffee.title} />

            <Tags>
                {coffee.tags.map(tag => {
                    return (
                        <span key={Math.random() * 100000}>{tag}</span>
                    )
                })}
            </Tags>

            <CardHeader>
                <h1>{coffee.title}</h1>
                <p>{coffee.subtitle}</p>
            </CardHeader>

            <div id="buy">
                <span>R$ <span>9,90</span></span>

                <FormContainer>
                    <div id="counterInput">
                        <CounterButton onClick={() => handleChangeCoffeeQuantity(0)} type="button">
                            <Minus size={14} />
                        </CounterButton>
                        <span>{coffeeQuantity}</span>
                        <CounterButton onClick={() => handleChangeCoffeeQuantity(1)} type="button">
                            <Plus size={14} />
                        </CounterButton>
                    </div>
                    {/* deve se manter na home depois desse botão */}
                    <AddButton
                        type="button"
                        onClick={handleNewItemToCart}
                    >
                        <ShoppingCartSimple weight="fill" size={22} />
                    </AddButton>
                </FormContainer>
            </div>
        </CoffeeCardContainer>
    )
}