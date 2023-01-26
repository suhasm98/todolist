import useStyles from './useStyles'
import React from 'react'

const TitleContainer = ({ completedTodosCount }) => {
  const styles = useStyles()

  return (
    <div>
      <h2 style={styles.title}>Things to do</h2>
      <h4 style={styles.description}>
        {completedTodosCount} of 5 tasks have been completed
      </h4>
    </div>
  )
}

export default TitleContainer
