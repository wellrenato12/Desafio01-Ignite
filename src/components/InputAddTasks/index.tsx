import { AddTasks, AddTasksContainer } from './styles'
import { PlusCircle } from 'phosphor-react'
import { ListTasks } from './ListTasks'
import { useState } from 'react'
import { EmptyTodoList } from './EmptyTodoLists'
import { CreateTaskCount } from './CreatedTaskCount'
import { v4 as uuidv4 } from 'uuid';

export interface Tasks {
  taskDescription: string;
  id: string;
}

export function InputAddTasks() {
  const [writeTasks, setWriteTasks] = useState('') //Estado para armazenar a escrita de uma tarefa
  const [newTaskList, setNewTaskList] = useState<Tasks[]>([]) //Estado para armazenar uma lista de tarefas
  const [createdTaskCounter, setCreatedTaskCounter] = useState(0) //Estado para armazenar total de tarefas criadas
  const [finishedTaskCounter, setFinishedTaskCounter] = useState(0) //Estado para armazenar total de tarefas finalizadas

  const hasTasks = newTaskList.length > 0; //Permite chamar outro componente se a condição for verdadeira

  function checkCondition(condition: boolean) { //Verificar condição de tarefas finalizadas no ListTasks
    if(condition === true) {
      setFinishedTaskCounter((state) => {
        return state + 1
      })
    }
    else {
      setFinishedTaskCounter((state) => {
        return state - 1
      })
    }
  }

  function createTask(taskDescription: string) { //Criar um objeto para armazenar tarefa e um id
    return {
      id: uuidv4(),
      taskDescription
    }
  }

  function handleCreateNewTask() { //Adicionar uma tarefa na lista de tarefas
    if(writeTasks === ''){
      alert('Preencha o campo!')
      return
    }
    
    setNewTaskList((state) => [...state, createTask(writeTasks)])
    setWriteTasks('')
    setCreatedTaskCounter((state) => {
      return state + 1
    })
  }

  function deleteTask(taskToDelete: string) { //Deletar uma tarefa
    const newTodoList = newTaskList.filter(task => {
      return task.id !== taskToDelete
    })

    setNewTaskList(newTodoList)
    setCreatedTaskCounter((state) => {
      return state - 1
    })
    if(finishedTaskCounter > 0) {
      setFinishedTaskCounter((state) => {
        return state -1
      })
    }
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if(event.key === 'Enter'){
      handleCreateNewTask()
    }
  }

  return (
    <AddTasksContainer>
      <AddTasks>
        <input 
          onChange={(event) => setWriteTasks(event.target.value)} 
          onKeyPress={handleKeyPress}
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          value={writeTasks} 
        />
        <button onClick={handleCreateNewTask}> 
          Criar
          <span>
            <PlusCircle size={16} />
          </span>
        </button>
      </AddTasks>
      <CreateTaskCount 
        createdTaskCounter={createdTaskCounter} 
        finishedTaskCounter={finishedTaskCounter}  
      />
      {newTaskList.map((newTask) => {
          return (
            <ListTasks 
              key={newTask.id} 
              newTask={newTask} 
              onDeleteTask={deleteTask} 
              checkCondition={checkCondition}
            />
          )
      })} 
      {!hasTasks && (
        <EmptyTodoList />
      )}
    </AddTasksContainer>
  )
}