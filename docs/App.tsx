import styles from './App.module.css'
import Stack, { StackIcon } from '../src/Stack/Stack'
import StackDocs from '../src/Stack/Stack.docs.mdx'
import RowDocs from '../src/Row/Row.docs.mdx'
import SplitDocs from '../src/Split/Split.docs.mdx'
import ClampDocs from '../src/Clamp/Clamp.docs.mdx'
import ColumnsDocs from '../src/Columns/Columns.docs.mdx'
import GridDocs from '../src/Grid/Grid.docs.mdx'
import './index.css'
import Row, { RowIcon } from '@lib/Row/Row'
import { ClampIcon } from '@lib/Clamp/Clamp'
import { ColumnsIcon } from '@lib/Columns/Columns'
import { GridIcon } from '@lib/Grid/Grid'

function App() {
  return (
    <div className={styles.App}>
      <Stack asChild gap={1.5}>
        <header className={styles['App-header']}>
          <h1>L<span className={styles.why}>Y</span>TS</h1>
          <p>
            Layout primitives for React
          </p>
          <Row wrap style={{ borderRadius: 21, justifyContent: 'center' }}>
            <StackIcon />
            <RowIcon />
            <ClampIcon />
            <ColumnsIcon />
            <GridIcon />
          </Row>
        </header>
      </Stack>
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
