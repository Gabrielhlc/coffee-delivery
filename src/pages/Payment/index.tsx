import { Cart } from "./components/Cart";
import { UserForm } from "./components/UserForm";
import { PaymentContainer } from "./styles";
import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";


type NewUserFormData = zod.infer<typeof newUserFormValidationSchema>

const newUserFormValidationSchema = zod.object({
    cep: zod.string().min(7, 'Informe o CEP'),
    rua: zod.string().min(1, 'Informe a rua'),
    numero: zod.number().min(2, 'Informe o número'),
    complemento: zod.string().optional(),
    bairro: zod.string().min(1, 'Informe o bairro'),
    cidade: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().min(2, 'Informe a Unidade Federativa').max(2),
})

export function Payment() {

    const newUserForm = useForm<NewUserFormData>({
        resolver: zodResolver(newUserFormValidationSchema),
    })



    const [tipoPagamento, setTipoPagamento] = useState("")

    const onSubmit = (data: any) => {
        data = { ...data, tipoPagamento: tipoPagamento }
        console.log(data)
    }

    return (
        <PaymentContainer>
            <FormProvider {...newUserForm}>
                <form id="userDataForm" action="" onSubmit={newUserForm.handleSubmit(onSubmit)}>
                    <UserForm pagamento={tipoPagamento} setTipoPagamento={setTipoPagamento} />
                </form>
            </FormProvider>
            <Cart />

        </PaymentContainer >
    )
}