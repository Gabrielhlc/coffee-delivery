import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    

    h1 {
        font-size: 1.125rem;
    }

    section {
        width: 28rem;
        height: 31.125rem;

        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        
        padding: 2.5rem;
        
        background-color: ${(props) => props.theme["base-card"]};
        border-radius: 6px 44px;
    }

`;

export const CoffeesOnCart = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;

    #coffee {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0.25rem 2rem;
        gap: 2.5rem;

        border-bottom: 1px solid ${(props) => props.theme["base-button"]};


        img {
            width: 4rem;
            height: 4rem;
        }
        
        #price {
            width: 100%;
            font-weight: 700;
            line-height: 20.8px;
        }

        p {
            line-height: 20.8px;
        }

    }

    #counterInput {
            width: 4.5rem;
            height: 2rem;
            

            display: flex;
            align-items: center;
            padding: 0.5rem;
            gap: 0.25rem;

            background-color: ${(props) => props.theme["base-button"]};
            border-radius: 6px;
    }

    #info {
        width: 16rem;
        height: 4rem;
        
        display: flex;
        align-items: center;
        gap: 1.25rem;


    }

    #details {
        width: 171px;
        height: 61px;
        
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

    }

    #actions {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;

export const CounterButton = styled.button`
        width: 100%;
        
        display: flex;
        justify-content: center;
        
        color: ${(props) => props.theme.purple};
        background: none;
        border: none;
        
        cursor: pointer;
`;

export const RemoveButton = styled.button`

    width: 91px;
    height: 32px;  

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    
    padding: 0 0.5rem;
    font-size: 0.75rem;
    line-height: 160%;

    background-color: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    border: none;
    
`;

export const Prices = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        gap: 0.5rem;

        color: ${(props) => props.theme["base-text"]};
        
        span {
            font-size: 14px;
            
            &:last-child {
            font-size: 1rem;
            }
        }
        
        &:last-child {
            span {
                font-size: 1.25rem;
                font-weight: 700;
            }
            
        }
        
    }

`;

export const PayButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0.5rem;
    gap: 0.25rem;

    color: white;
    font-size: 0.875rem;
    font-weight: 700;

    background-color: ${(props) => props.theme.yellow};
    border-radius: 6px;
    border: none;
`;
