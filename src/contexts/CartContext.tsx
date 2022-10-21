import { createContext, ReactNode, useState } from "react";
import { CoffeeSeeds } from "../coffeeSeeds";

export interface Coffee {
    title: string;
    subtitle: string;
    tags: string[],
    imageUrl: string,
}

interface CartContextType {
    coffees: Coffee[];
    setCartItems: (item: CartItem) => void;
    items: CartItem[];

}

export interface CartItem {
    coffee: Coffee
    amount: number
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {

    const coffees = CoffeeSeeds;

    const [items, setItems] = useState<CartItem[]>([]);

    function setCartItems(item: CartItem) {
        var contains = false;

        items.map(itemOnCart => {
            if (itemOnCart.coffee.title === item.coffee.title) {
                contains = true
                setItems(state => {
                    return [...state.filter(newStateItems => {
                        return newStateItems.coffee.title !== itemOnCart.coffee.title
                    }), item]
                })
            }
        })
        if (!contains) {
            setItems((state) => {
                return [...state, item]
            });
        }
    }


    return (
        <CartContext.Provider
            value={{
                coffees,
                setCartItems,
                items,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}