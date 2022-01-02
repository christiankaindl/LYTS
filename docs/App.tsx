import styles from './App.module.css'
import Stack from '../src/Stack/Stack'
import StackDocs from '../src/Stack/Stack.docs.mdx'
import RowDocs from '../src/Row/Row.docs.mdx'
import SplitDocs from '../src/Split/Split.docs.mdx'
import ClampDocs from '../src/Clamp/Clamp.docs.mdx'
import ColumnsDocs from '../src/Columns/Columns.docs.mdx'
import GridDocs from '../src/Grid/Grid.docs.mdx'
import './index.css'

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
      <Stack asChild gap={1.5}>
        <main>
          <StackDocs />
          <hr />
          <RowDocs />
          <hr />
          <SplitDocs />
          <hr />
          <ClampDocs />
          <hr />
          <ColumnsDocs />
          <hr />
          <GridDocs />
        </main>
      </Stack>
      {/* <LiveProvider code='<Example2 />' scope={{ Example2 }} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider> */}
    </div>
  )
}

export default App
