import styles from './App.module.css'
import Stack from '../src/Stack/Stack'
import StackDocs from '../src/Stack/Stack.docs.mdx'
import './index.css'

// import {
//   LiveProvider,
//   LiveEditor,
//   LiveError,
//   LivePreview
// } from 'react-live'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        {/* <img src={logo} className={styles['App-logo']} alt="logo" /> */}
        <h1>LYTS</h1>
        <p>
          React components for building consistent layouts
        </p>
        <Stack style={{ color: 'black' }}>
          <b>Card</b>
          {/* <Split>
            <b>Card</b>
            <span>Link</span>
          </Split> */}
          <p>Lorem ipsum</p>
        </Stack>
      </header>
      <main>
        <StackDocs />
      </main>
      {/* <LiveProvider code='<Example2 />' scope={{ Example2 }} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider> */}
    </div>
  )
}

export default App
