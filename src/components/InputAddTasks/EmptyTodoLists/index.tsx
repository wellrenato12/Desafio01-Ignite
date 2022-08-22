import { EmptyTodoListsContainer } from "./styles";
import emptyList from '../../../assets/emptyList.svg'

export function EmptyTodoList() {
  return (
    <EmptyTodoListsContainer>
      <img src={emptyList} alt="" />
      <h4>Você ainda não tem tarefas cadastradas</h4>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </EmptyTodoListsContainer>
  )
}