import { useState } from 'react'
import logo from './logo.svg'
import styles from './App.module.css'
import Stack from './Stack/Stack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>Hello Vite + React!</p>
        <Stack>
          <p>
            This is a Stack
          </p>
          <p>
            With multiple spaced items
          </p>
        </Stack>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={styles['App-link']}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className={styles['App-link']}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
