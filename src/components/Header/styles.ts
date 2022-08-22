import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 200px;

  background-color: ${(props) => props.theme['gray-700']};

  img {
    margin-right: 0.75rem;
  }

  span {
    font-size: 2.5rem;
    font-weight: bold;

    color: ${(props) => props.theme.blue};
  }

  span:last-child {
    color: ${(props) => props.theme.purpleDark};
  }
`

