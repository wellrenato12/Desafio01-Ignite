import styled from 'styled-components'

export const AddTasksContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 736px;
  margin: calc(0px - 1.5rem - 6px) auto;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const AddTasks = styled.div`
  display: flex;

  height: 3.375rem;

  input {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 8px;

    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-100']};

    font-size: 1rem;
  }

  button {
    display: flex;

    padding: 1rem;
    margin-left: 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;

    color: ${(props) => props.theme['gray-100']};
    background-color: ${(props) => props.theme.blueDark};

    transition: all 0.5s;
  }

  button:hover {
    background-color: ${(props) => props.theme.blue};
  }

  span {
    margin-left: 0.25rem;
  }
`
