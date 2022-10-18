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
                background-color: ${(props) => props.theme['yellow-light']};
                color: ${(props) => props.theme['yellow-dark']};
             }
        }
    }
    
`

