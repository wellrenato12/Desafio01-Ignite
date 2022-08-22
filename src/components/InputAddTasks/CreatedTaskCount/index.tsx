import { CreateTaskCountContainer } from './styles'

interface TaskCountProps {
  createdTaskCounter: number;
  finishedTaskCounter: number;
}

export function CreateTaskCount({ createdTaskCounter, finishedTaskCounter }: TaskCountProps) {
  return (
    <CreateTaskCountContainer>
      <p>
        Tarefas criadas
        <span>{createdTaskCounter}</span>
      </p>
      <p>
        Concluídas
        <span>{finishedTaskCounter}</span>
      </p>
    </CreateTaskCountContainer>
  )
}
