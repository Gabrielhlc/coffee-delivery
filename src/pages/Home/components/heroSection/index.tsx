import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import introImage from "../../../../assets/intro-image.svg"
import { HeroSectionContainer, Icon } from "./styles";

export function HeroSection() {
    return (
        <HeroSectionContainer>
            <main>
                <section>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <div id="icon-grid-div">
                        <div id="icon-div">
                            <Icon icon="cart">
                                <ShoppingCart weight="fill" size={16} color="white" />
                            </Icon>
                            Compra simples e segura
                        </div>
                        <div id="icon-div">
                            <Icon icon="package">
                                <Package weight="fill" size={16} color="white" />
                            </Icon>
                            Embalagem mantém o café intacto
                        </div>
                        <div id="icon-div">
                            <Icon icon="timer">
                                <Timer weight="fill" size={16} color="white" />
                            </Icon>
                            Entrega rápida e rastreada
                        </div>

                        <div id="icon-div">
                            <Icon icon="coffee">
                                <Coffee weight="fill" size={16} color="white" />
                            </Icon>
                            O café chega fresquinho até você
                        </div>
                    </div>

                </section>

                <div id="image-div">
                    <img src={introImage} alt="" />
                </div>
            </main>
        </HeroSectionContainer>
    )
}