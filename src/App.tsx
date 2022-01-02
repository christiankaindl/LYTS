import { useState } from 'react'
import logo from './logo.svg'
import styles from './App.module.css'
import StackDocs from './Stack/Stack.docs.mdx'
import Stack from './Stack/Stack'
// import Stack from './Stack/Stack'

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
        <Stack>
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

// const Example2 = () => {
//   return (
//     <Stack>
//       <p>
//         This is a Stack
//       </p>
//       <p>
//         With multiple spaced items
//       </p>
//       <button>A button</button>
//     </Stack>
//   )
// }
