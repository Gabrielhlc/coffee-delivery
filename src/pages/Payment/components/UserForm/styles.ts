import styled from "styled-components";

export const UserData = styled.div`
    width: 40rem;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h1 {
        font-size: 1.125rem;
    }

     
    section {
        background-color: ${(props) => props.theme["base-card"]};    
        padding: 2.5rem;
        border-radius: 6px;
    }
    

    #form {
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
            grid-template-columns: 12.5rem auto 3.75rem;
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
`;

interface RadioBoxProps {
    isActive: boolean;
}

export const RadioButtons = styled.button<RadioBoxProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;
    
    flex: 1;

    font-size: 0.75rem;
    line-height: 19.2px;

    background-color: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    cursor: pointer;

    background-color: ${(props) => props.isActive ? '#EBE5F9' : 'none'};
    border: ${(props) => props.isActive ? '1px solid #4B2995' : 'none'};

    &:hover {
        background-color: ${(props) => props.theme["base-hover"]};
    }
`;