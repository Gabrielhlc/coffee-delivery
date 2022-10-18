import { HeaderContainer } from "./styles";
import logoCoffee from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";


export function Header() {
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

                    <NavLink to="/payment" title="Carrinho">
                        <ShoppingCart weight="fill" size={20} />
                    </NavLink>
                </div>

            </nav>
        </HeaderContainer>
    )
}