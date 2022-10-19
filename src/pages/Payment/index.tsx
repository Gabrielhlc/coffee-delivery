import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { UserData, PaymentContainer, FormHeader, PaymentButtons, CartDescription } from "./styles";

export function Payment() {
    return (
        <PaymentContainer>

            <UserData>
                <h1>Complete seu pedido</h1>
                <section>
                    <FormHeader>
                        <MapPinLine weight="regular" size={22} color="#C47F17" />
                        <span>
                            <h3>Endereço de Entrega</h3>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </span>
                    </FormHeader>

                    <form action="">
                        <input id="cep" type="text" placeholder="CEP" />
                        <input id="rua" type="text" placeholder="Rua" />

                        <div id="numero-complemento">
                            <input type="text" placeholder="Número" />
                            <input type="text" placeholder="Complemento (Opcional)" />
                        </div>

                        <div id="bairro-cidade-uf">
                            <input type="text" placeholder="Bairro" />
                            <input type="text" placeholder="Cidade" />
                            <input type="text" placeholder="UF" />
                        </div>
                    </form>
                </section>


                <section>
                    <FormHeader>
                        <CurrencyDollar weight="regular" size={22} color="#8047F8" />
                        <span>
                            <h3>Pagamento</h3>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </span>
                    </FormHeader>
                    <PaymentButtons>
                        <button type="button">
                            <CreditCard weight="regular" color="#8047F8" />
                            CARTÃO DE CRÉDITO
                        </button>
                        <button type="button">
                            <Bank weight="regular" color="#8047F8" />
                            CARTÃO DE DÉBITO
                        </button>
                        <button type="button">
                            <Money weight="regular" color="#8047F8" />
                            DINHEIRO
                        </button>
                    </PaymentButtons>
                </section>
            </UserData>

            <CartDescription>
                <h1>Cafés selecionados</h1>
                <section>

                </section>
            </CartDescription>

        </PaymentContainer>
    )
}