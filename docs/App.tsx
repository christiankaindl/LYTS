import * as otherStyles from './index.css'
import styles from './App.module.css'
import Stack from '../src/Stack/Stack'
import StackDocs from '../src/Stack/Stack.docs.mdx'
import RowDocs from '../src/Row/Row.docs.mdx'
import SplitDocs from '../src/Split/Split.docs.mdx'
import ClampDocs from '../src/Clamp/Clamp.docs.mdx'
import ColumnsDocs from '../src/Columns/Columns.docs.mdx'
import GridDocs from '../src/Grid/Grid.docs.mdx'
import Row from '@lib/Row/Row'
import { StackIcon, RowIcon, ClampIcon, ColumnsIcon, GridIcon } from '../src/Icons/Icons'
import Box from '@lib/Box/Box'
import Grid from '@lib/Grid/Grid'

function App() {
  return (
    <div className={styles.App}>
      <Stack asChild gap={1.5}>
        <header className={styles['App-header']}>
          <h1>L<span className={styles.why}>Y</span>TS</h1>
          <p>
            Layout primitives for React
          </p>
          <div />
          <Row wrap className={otherStyles.nav}>
            <StackIcon />
            <RowIcon />
            <ClampIcon />
            <ColumnsIcon />
            <GridIcon />
          </Row>
        </header>
      </Stack>
      <Grid asChild gap={3} gridItemMinWidth='25em'>
        <main className={otherStyles.debug}>
          <Stack gap={1.5}>
            <StackDocs />
          </Stack>
          <Stack gap={1.5}>
            <RowDocs />
          </Stack>
          <Stack gap={1.5}>
            <SplitDocs />
          </Stack>
          <Stack gap={1.5}>
            <ClampDocs />
          </Stack>
          <Stack gap={1.5}>
            <ColumnsDocs />
          </Stack>
          <Stack gap={1.5}>
            <GridDocs />
          </Stack>
        </main>
      </Grid>
      {/* <LiveProvider code='<Example2 />' scope={{ Example2 }} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider> */}
    </div>
  )
}

export default App
