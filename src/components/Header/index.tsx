import { Counter, HeaderContainer } from "./styles";
import logoCoffee from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


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