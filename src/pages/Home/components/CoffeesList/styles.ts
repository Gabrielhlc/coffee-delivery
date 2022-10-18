import styled from "styled-components";

export const CoffeesListContainer = styled.div`
    margin-top: 2rem;
    padding: 0 10rem;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;

    main {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 2rem;
    }
`;