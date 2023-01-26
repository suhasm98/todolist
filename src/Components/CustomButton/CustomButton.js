import { Button } from '@mui/material'
import useStyles from './useStyles'

const CustomButton = ({ buttonTextColor, buttonText, onClick }) => {
  const styles = useStyles()

  return (
    <Button
      onClick={onClick}
      sx={
        buttonTextColor
          ? { ...styles.button, background: buttonTextColor }
          : styles.button
      }
    >
      {buttonText}
    </Button>
  )
}

export default CustomButton
