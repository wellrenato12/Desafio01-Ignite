import styled from 'styled-components'

export const TodoListsContainer = styled.main`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: ${props => props.theme['gray-400']};
        padding: 1.5rem;
        border-radius: 8px;
        margin-bottom: 1rem;

        button {
            cursor: pointer;
            background-color: transparent;
            border: none;
            color: ${props => props.theme['gray-300']}
        }

        button:hover {
            color: ${props => props.theme.danger}
        }

        p.completed {
            text-decoration:line-through;
            opacity: 0.6;
            color: #22c55e;
        }

        &.completed {
            border: 1px solid #22c55e;
        }

        @media screen and (max-width: 800px) {
            padding: 1rem;

            p {
                margin-left: 1rem;
            }
        }
    }
`
