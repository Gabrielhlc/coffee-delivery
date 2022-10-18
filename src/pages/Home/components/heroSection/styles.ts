import styled from "styled-components";
import IntroBackground from '../../../../assets/intro-background.svg'

export const HeroSectionContainer = styled.div`
    background-image: url(${IntroBackground});
    padding: 0 10rem 7rem;
    
    main {
        display: flex;
        gap: 5rem;
        section {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        
        }
        h1 {
            font-size: 3rem;
        }
        p {
            font-size: 1.25rem;
        }
        
        #icon-grid-div {
            margin-top: 3rem;
            display: inline-grid;
            grid-template-columns: 1fr fit-content(60%);
            gap: 1.25rem 0;
        }

        #icon-div {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
    }

`

const BACKGROUND_ICONS_COLORS = {
    cart: 'yellow-dark',
    timer: 'yellow',
    package: 'base-text',
    coffee: 'purple',
} as const

interface BackgrondIconProps {
    icon: keyof typeof BACKGROUND_ICONS_COLORS;
}

export const Icon = styled.span<BackgrondIconProps>`
    display: flex;
    align-items: center;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 1000px;
    background-color: ${props => props.theme[BACKGROUND_ICONS_COLORS[props.icon]]};
`;
