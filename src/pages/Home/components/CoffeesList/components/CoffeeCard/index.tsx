import { CoffeeCardContainer } from "./styles";
import { ShoppingCartSimple } from "phosphor-react";

export interface CoffeeCardProps {
    title: string;
    subtitle: string;
    tags: string[],
    imageUrl: string,
}

export function CoffeeCard(props: CoffeeCardProps) {
    return (
        <CoffeeCardContainer>

            <img src={props.imageUrl} alt={props.title} />

            <div id="tags">
                {props.tags.map(tag => {
                    return (
                        <span key={Math.random() * 10000}>{tag}</span>
                    )
                })}
            </div>

            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>

            <div id="buy">
                <span>R$ <span>9,90</span></span>

                <form action="">
                    <div id="counterInput">
                        <button>
                            -
                        </button>
                        <span>1</span>
                        <button>
                            +
                        </button>
                    </div>
                    {/* deve se manter na home depois desse botão */}
                    <button id="buttonSubmit" type="submit">
                        <ShoppingCartSimple weight="fill" size={22} />
                    </button>
                </form>
            </div>
        </CoffeeCardContainer>
    )
}