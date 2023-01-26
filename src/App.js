import { Home } from './Pages'
import useStyles from './useStyles'

function App() {
  const styles = useStyles()
  return (
    <div style={styles.app}>
      <Home />
    </div>
  )
}

export default App
