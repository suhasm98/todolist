import { CustomButton } from '../../../Components'
import useStyles from './useStyles'

const FormContainer = ({
  editMode,
  handleOnAddTodo,
  handleOnMarkAll,
  handleOnTodoChange,
  todoText,
}) => {
  const styles = useStyles()
  return (
    <div style={styles.formContainer}>
      <input
        style={styles.textInput}
        value={todoText}
        placeholder='What do you have planned for today?'
        onChange={handleOnTodoChange}
      />
      <CustomButton
        buttonText={editMode ? 'Update' : 'Add Todo'}
        onClick={handleOnAddTodo}
      />
      <CustomButton buttonText='Mark All' onClick={handleOnMarkAll} />
    </div>
  )
}

export default FormContainer
