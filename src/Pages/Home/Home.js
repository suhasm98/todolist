import { useEffect, useState } from 'react'
import { TitleContainer, FormContainer, TodoContainer } from './Components'
import useStyles from './useStyles'

const Home = () => {
  const styles = useStyles()
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('')
  const [completedTodosCount, setCompletedTodosCount] = useState(0)
  const [editMode, setEditMode] = useState(false)
  const [editTodoItem, setEditTodoItem] = useState({})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos?_limit=5')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

  useEffect(() => {
    setCompletedTodosCount(todos.filter(value => value.completed).length)
  }, [todos])

  const handleOnTodoChecked = (isChecked, value) => {
    const updatedTodos = todos.map(todo =>
      todo.id === value.id ? { ...todo, completed: isChecked } : todo
    )
    setTodos([...updatedTodos])
  }

  const handleOnTodoChange = event => {
    setTodoText(event.target.value)
  }

  const handleOnAddTodo = () => {
    if (!todoText) {
      return
    }

    if (editMode) {
      const updatedTodos = todos.map(todo =>
        todo.id === editTodoItem.id ? { ...todo, title: todoText } : todo
      )
      setTodos([...updatedTodos])
      setEditMode(false)
    } else {
      setTodos([
        ...todos,
        {
          userId: 1,
          id: todos.length * 0.02,
          completed: false,
          title: todoText,
        },
      ])
    }
    setTodoText('')
  }

  const handleOnEditTodo = value => {
    setEditMode(true)
    setEditTodoItem(value)
    setTodoText(value.title)
  }

  const handleOnDelete = value => {
    const updatedTodos = todos.filter(todo => todo.id !== value.id)
    setTodos([...updatedTodos])
  }

  const handleOnMarkAll = () => {
    if (todos.length > 0) {
      const updatedTodos = todos.map(todo => ({
        ...todo,
        completed: true,
      }))
      setTodos([...updatedTodos])
    }
  }
  return (
    <div style={styles.mainContainer}>
      <TitleContainer completedTodosCount={completedTodosCount} />
      <FormContainer
        editMode={editMode}
        handleOnAddTodo={handleOnAddTodo}
        handleOnMarkAll={handleOnMarkAll}
        handleOnTodoChange={handleOnTodoChange}
        todoText={todoText}
      />
      <TodoContainer
        editMode={editMode}
        handleOnDelete={handleOnDelete}
        handleOnEditTodo={handleOnEditTodo}
        handleOnTodoChecked={handleOnTodoChecked}
        todos={todos}
      />
    </div>
  )
}

export default Home
