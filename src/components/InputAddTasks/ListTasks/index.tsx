import { Trash } from 'phosphor-react'
import { useState } from 'react';
import { Tasks } from '..';

import { TodoListsContainer } from './styles'

interface TasksProps {
  newTask: Tasks;
  onDeleteTask: (taskToDelete: string) => void;
  checkCondition: (condition: boolean) => void;
}

export function ListTasks({ newTask, onDeleteTask, checkCondition }: TasksProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleDeleteTask() { //Deletar uma tarefa
    onDeleteTask(newTask.id)
  }

  function handleAddFinishedTaskCounter() { //marcar ou desmarcar tarefa como concluída
    if(!isChecked) {
      setIsChecked(true)
      checkCondition(true)
    }
    else {
      setIsChecked(false)
      checkCondition(false)
    }
  }

  return (
      <TodoListsContainer>
        <div className={isChecked ? 'completed' : ''}>
          <input onChange={handleAddFinishedTaskCounter} type="checkbox" defaultChecked={isChecked} />
          <p className={isChecked ? 'completed' : ''}>{newTask.taskDescription}</p>
          <button onClick={handleDeleteTask}>
            <Trash size={20} />
          </button>
        </div>
      </TodoListsContainer>
  )
}