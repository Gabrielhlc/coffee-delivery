import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { FormHeader, PaymentButtons, RadioButtons, UserData } from "./styles";

interface UserFormProps {
    pagamento: string,
    setTipoPagamento: (pagamento: string) => void
}

export function UserForm({ pagamento, setTipoPagamento }: UserFormProps) {


    const { register } = useFormContext();

    function handleChangeTipoPagamento(pagamento: string) {
        setTipoPagamento(pagamento)
    }

    return (

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

                <div id="form">
                    <input
                        id="cep" type="text"
                        placeholder="CEP"
                        {...register('cep')}
                    />
                    <input
                        id="rua" type="text"
                        placeholder="Rua"
                        {...register('rua')}
                    />

                    <div id="numero-complemento">
                        <input
                            type="text"
                            placeholder="Número"
                            {...register('numero', { valueAsNumber: true })}
                        />
                        <input
                            type="text"
                            placeholder="Complemento (Opcional)"
                            {...register('complemento')}
                        />
                    </div>

                    <div id="bairro-cidade-uf">
                        <input
                            type="text"
                            placeholder="Bairro"
                            {...register('bairro')}
                        />
                        <input
                            type="text"
                            placeholder="Cidade"
                            {...register('cidade')}
                        />
                        <input
                            type="text"
                            placeholder="UF"
                            {...register('uf')}
                        />
                    </div>
                </div>
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
                    <RadioButtons
                        isActive={pagamento === "credito"}
                        type="button"
                        onClick={() => handleChangeTipoPagamento("credito")}
                    >
                        <CreditCard weight="regular" color="#8047F8" />
                        CARTÃO DE CRÉDITO
                    </RadioButtons>
                    <RadioButtons
                        isActive={pagamento === "debito"}
                        type="button"
                        onClick={() => handleChangeTipoPagamento("debito")}
                    >
                        <Bank weight="regular" color="#8047F8" />
                        CARTÃO DE DÉBITO
                    </RadioButtons>
                    <RadioButtons
                        isActive={pagamento === "dinheiro"}
                        type="button"
                        onClick={() => handleChangeTipoPagamento("dinheiro")}
                    >
                        <Money weight="regular" color="#8047F8" />
                        DINHEIRO
                    </RadioButtons>
                </PaymentButtons>
            </section>
        </UserData>
    )
}
