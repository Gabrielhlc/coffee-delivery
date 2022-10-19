import styled from "styled-components";

export const PaymentContainer = styled.div`
    margin-top: 2rem;
    padding: 0 10rem 5rem;
    display: flex;
    gap: 2rem;

    h1 {
        font-size: 1.125rem;
    }
`;

export const UserData = styled.div`
    width: 40rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;

     
    section {
        background-color: ${(props) => props.theme["base-card"]};    
        padding: 40px;
        border-radius: 6px;
    }
    

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        input {
            max-width: 100%;
            display: flex;
            align-items: center;
            padding: 0.75rem;
            gap: 0.25rem;

            background-color: ${(props) => props.theme["base-input"]};
            border: 1px solid ${(props) => props.theme["base-button"]};
            border-radius: 0.25rem;
        }

        #cep {
            width: 12.5rem;
        }

        #rua {
            width: 100%;
        }

        #numero-complemento {
            width: 100%;
            display: grid;
            grid-gap: 0.75rem;
            grid-template-columns: 12.5rem auto;
        }

        #bairro-cidade-uf {
            width: 100%;
            display: grid;
            grid-gap: 0.75rem;
            grid-template-columns: 12.5rem auto 60px;
        }
    }
`;

export const FormHeader = styled.header`
    width: 35rem;
    height: 2.75rem;

    display: flex;
    gap: 0.5rem;

    margin-bottom: 2rem;
    
    span {
        width: 33.125rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.125rem;
        
        h3 {
            line-height: 20.8px;
            color: ${(props) => props.theme["base-subtitle"]};
        }
        
        p {
            font-size: 14px;
            color: ${(props) => props.theme["base-text"]};
        }
    }
`;

export const PaymentButtons = styled.div`
    width: 35rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px;
        gap: 12px;
        
        flex: 1;

        font-size: 0.75rem;
        line-height: 19.2px;

        background-color: ${(props) => props.theme["base-button"]};
        border: none;
        border-radius: 6px;
        cursor: pointer;

        &:hover {
            background-color: ${(props) => props.theme["base-hover"]};
        }
    }

`;

export const CartDescription = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    

    section {
        display: flex;
        flex-direction: column;
        padding: 40px;
        gap: 24px;
        width: 28rem;
        height: 29rem;
        background-color: ${(props) => props.theme["base-card"]};
        border-radius: 6px 44px;
    }
    
`;