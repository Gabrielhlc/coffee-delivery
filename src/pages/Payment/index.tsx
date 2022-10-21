import { Cart } from "./components/Cart";
import { UserForm } from "./components/UserForm";
import { PaymentContainer } from "./styles";

export function Payment() {



    return (
        <PaymentContainer>
            <UserForm />

            <Cart />

        </PaymentContainer >
    )
}