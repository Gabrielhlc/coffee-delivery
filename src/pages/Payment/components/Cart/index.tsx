import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext, CartItem } from "../../../../contexts/CartContext";
import { CartContainer, CoffeesOnCart, CounterButton, PayButton, Prices, RemoveButton } from "./styles";


export function Cart() {

    const { items, setCartItems } = useContext(CartContext);

    function handleChangeItemQuantity(symbol: number, item: CartItem) {
        if (symbol === 1) {
            item.amount++;
            setCartItems(item)
        } else {
            item.amount--;
            setCartItems(item)
        }
    }
    var total = 0;
    return (
        <CartContainer>
            <h1>Cafés selecionados</h1>
            <section>
                <CoffeesOnCart>
                    {items.map(item => {
                        total += item.amount * 9.90
                        return (
                            <div id="coffee">
                                <div id="info">
                                    <img src={item.coffee.imageUrl} alt={item.coffee.title} />
                                    <div id="details">
                                        <p>{item.coffee.title}</p>
                                        <div id="actions">
                                            <div id="counterInput">
                                                <CounterButton onClick={() => handleChangeItemQuantity(0, item)} type="button">
                                                    <Minus size={14} />
                                                </CounterButton>
                                                <span>{item.amount}</span>
                                                <CounterButton onClick={() => handleChangeItemQuantity(1, item)} type="button">
                                                    <Plus size={14} />
                                                </CounterButton>
                                            </div>
                                            <RemoveButton type="button">
                                                <Trash weight="regular" color="#8047F8" />
                                                REMOVER
                                            </RemoveButton>
                                        </div>
                                    </div>
                                </div>
                                <span id="price">{(`R$ ${(item.amount * 9.90).toFixed(2)}`)}</span>
                            </div>
                        )
                    })}
                </CoffeesOnCart>
                <Prices>
                    <div>
                        <span>Total de itens</span>
                        <span>R$ {total.toFixed(2)}</span>
                    </div>
                    <div>
                        <span>Entrega</span>
                        <span>R$ 3.50</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>R$ {(total + 3.50).toFixed(2)}</span>
                    </div>
                </Prices>

                <PayButton>
                    CONFIRMAR PEDIDO
                </PayButton>
            </section>
        </CartContainer>
    )
}