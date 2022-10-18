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

    #tags {
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
    }

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

    #buy {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 27px;

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
        form {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.25rem;
        }

        #counterInput {
            width: 4.5rem;
            height: 38px;
            

            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            padding: 8px;
            gap: 4px;

            background-color: ${(props) => props.theme["base-button"]};
            border-radius: 6px;

            button {
                display: flex;
                align-items: center;
                color: purple;
                background: none;
                border: none;
                font-size: 19px;
                cursor: pointer;
            }
        }

        #buttonSubmit {
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

        }
    }
`;