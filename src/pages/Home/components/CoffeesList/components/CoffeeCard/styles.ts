import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    width: 256px;
    height: 310px;
    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    position: relative;

    img {
        position: absolute;
        width: 120px;
        height: 120px;
        left: calc(50% - 120px/2);
        top: -20px;  
    }

    #buy {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // 24 buga
        gap: 23px;

        position: absolute;
        height: 38px;
        left: 24px;
        right: 24px;
        bottom: 20px;

        span {
            font-size: 0.875rem;
            line-height: 18.2px;
            span {
                font-family: "Baloo 2", sans-serif;
                font-size: 1.5rem;
                font-weight: 800;
                line-height: 31.2px;
            }
        }

        #counterInput {
            width: 4.5rem;
            height: 2.375rem;
            

            display: flex;
            align-items: center;
            padding: 0.5rem 0;
            gap: 0.25rem;

            background-color: ${(props) => props.theme["base-button"]};
            border-radius: 6px;
        }
    }
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

export const Tags = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 0.25rem;
    position: absolute;
    width: 81px;
    height: 21px;
    left: calc(50% - 81px/2);
    top: 112px;

    span {
        flex: none;
        padding: 4px 8px;
        
        color: ${(props) => props.theme["yellow-dark"]};
        background-color: ${(props) => props.theme["yellow-light"]};
        border-radius: 100px;
        font-size: 10px;
        font-weight: 700;
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

export const AddButton = styled.button`
    width: 38px;
    height: 38px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    padding: 0.5rem;
    color: ${(props) => props.theme["base-card"]};
    background-color: ${(props) => props.theme["purple-dark"]};
    border-radius: 6px;
    border: none;
    cursor: pointer;
`;

export const CardHeader = styled.div`
    h1 {
        display: flex;
        justify-content: center;
        position: absolute;
        height: 26px;
        left: 20px;
        right: 20px;
        top: 149px;
        font-size: 1.25rem;
    }

    p {
        position: absolute;
        height: 36px;
        left: 20px;
        right: 20px;
        top: 183px; 
        color: ${(props) => props.theme["base-label"]};
        font-size: 0.875rem;
        text-align: center;
    }
`;