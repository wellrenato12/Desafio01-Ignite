import styled from 'styled-components'

export const CreateTaskCountContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme.blue};
    margin: 3.125rem 0 2rem;

    span {
      margin: 0 0.875rem;
      padding: 0 0.5rem;
      border-radius: 8px;
      background-color: ${(props) => props.theme['gray-400']};
    }
  }

  p:last-child {
    color: ${(props) => props.theme.purple};
  }
`
