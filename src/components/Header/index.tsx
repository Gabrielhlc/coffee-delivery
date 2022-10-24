import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

import { MapPin, ShoppingCart } from "phosphor-react";
import logoCoffee from '../../assets/logo-coffee-delivery.svg'

import { Counter, HeaderContainer } from "./styles";

export function Header() {

    const { items } = useContext(CartContext)


    function handleClick(event: any) {
        if (items.length === 0) {
            event.preventDefault()
        }
    }

    return (
        <HeaderContainer>
            <nav>
                <NavLink to="/" end title="Home">
                    <img src={logoCoffee} alt="" />
                </NavLink>

                <div>
                    <span>
                        <MapPin weight="fill" color="#8047F8" size={22} />
                        Porto Alegre, RS
                    </span>

                    <NavLink onClick={handleClick} to="/payment" title="Carrinho">
                        {items.length > 0 ? (
                            <Counter>
                                {items.length}
                            </Counter>
                        ) : ""}
                        <ShoppingCart weight="fill" size={20} />
                    </NavLink>
                </div>

            </nav>
        </HeaderContainer>
    )
}