import styled from "styled-components";

export const EmptyTodoListsContainer = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;

    border-top: 1px solid ${(props) => props.theme['gray-400']};

    img {
        width: 3.5rem;
        margin-bottom: 1rem;

        margin-top: 4rem;
    }

    h4 {
        margin-bottom: 0.25rem;
    }
`