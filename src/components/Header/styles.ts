import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 10rem;
    
    nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        
        div {
            display: flex;
            align-items: center;
            gap: 0.75rem;

            span, a {
                display: flex;
                padding: 0.5rem;
                border-radius: 6px;
            }
            span {
                align-items: center;
                gap: 0.25rem;
                font-size: 0.875rem;
                background-color: ${(props) => props.theme['purple-light']};
                color: ${(props) => props.theme['purple-dark']};
                
            }

             a {
                position: relative;
                background-color: ${(props) => props.theme['yellow-light']};
                color: ${(props) => props.theme['yellow-dark']};
             }
        }
    }
`;

export const Counter = styled.strong`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 20px;
    height: 20px;
    right: -8.35px;
    top: -8px;

    font-family: "Roboto";
    font-weight: 700;
    font-size: 0.75rem;
    color: white;
    background-color: ${(props) => props.theme['yellow-dark']};
    border-radius: 1000px;
`;

