import { Checkbox } from '@mui/material'
import { CustomButton } from '../../../Components'
import useStyles from './useStyles'

const TodoContainer = ({
  editMode,
  handleOnTodoChecked,
  handleOnEditTodo,
  handleOnDelete,
  todos,
}) => {
  const styles = useStyles()

  return (
    <div
      style={
        editMode
          ? { ...styles.todoListContainer, pointerEvents: 'none' }
          : styles.todoListContainer
      }
    >
      {todos.map(value => (
        <div key={value.id} style={styles.todoItem}>
          <Checkbox
            checked={value.completed}
            sx={styles.checkBox}
            onChange={event => handleOnTodoChecked(event.target.checked, value)}
          />
          <div style={styles.itemCard}>
            <h4 style={styles.todoText}>{value.title}</h4>
            <div>
              <CustomButton
                buttonText='Edit'
                onClick={() => handleOnEditTodo(value)}
              />
              <CustomButton
                buttonText='Delete'
                buttonTextColor='#DC143C'
                onClick={() => handleOnDelete(value)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoContainer
