import * as otherStyles from './index.css'
import styles from './App.module.css'
import Stack from '../src/Stack/Stack'
import StackDocs from '../src/Stack/Stack.docs.mdx'
import RowDocs from '../src/Row/Row.docs.mdx'
import ClampDocs from '../src/Clamp/Clamp.docs.mdx'
import ColumnsDocs from '../src/Columns/Columns.docs.mdx'
import GridDocs from '../src/Grid/Grid.docs.mdx'
import BoxDocs from '../src/Box/Box.docs.mdx'
import SplitDocs from '../src/Split/Split.docs.mdx'
import LayoutFundamentals from './LayoutFundamentals.mdx'
import GetStarted from './GetStarted.mdx'
import Overview from './Overview.mdx'
import Examples from './Examples.mdx'
import Row from '@lib/Row/Row'
import { StackIcon, RowIcon, ClampIcon, ColumnsIcon, GridIcon } from '../src/Icons/Icons'
import Grid from '@lib/Grid/Grid'
import Button from './components/Button'

function App() {
  return (
    <div className={styles.App}>
      <Stack asChild gap={1.5}>
        <header className={styles['App-header']}>
          <h1>L<span className={styles.why}>Y</span>TS</h1>
          {/* Make it more wide here with visible labels */}
          {/* Slide in a similar variant for the navbar after initial scroll (with only tooltips) */}
          <Row wrap className={otherStyles.nav}>
            <StackIcon />
            <RowIcon />
            <ClampIcon />
            <ColumnsIcon />
            <GridIcon />
          </Row>
          <p>
            Layout primitives for React
          </p>
          <Row>
            <Button>
              Get started &gt;
            </Button>
            <Button>GitHub</Button>
          </Row>
        </header>
      </Stack>
      <main>
        <p style={{ fontSize: '1.7em', color: 'rgb(0 0 0 / 0.6)' }}>Build any layout quickly with well-designed composable components.</p>
        <p style={{ fontSize: '1.7em', color: 'rgb(0 0 0 / 0.6)' }}>Each component has a minimal API surface, is well documented and has plenty of examples (copy-pasta compatible!).</p>


        <GetStarted />

        {/* Components */}
        <Grid asChild gap={3} gridItemMinWidth='25em'>
          <div className={otherStyles.debug}>
            <Stack gap={1.5}>
              <StackDocs />
            </Stack>
            <Stack gap={1.5}>
              <RowDocs />
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
            <Stack gap={1.5}>
              <BoxDocs />
            </Stack>
            <Stack gap={1.5}>
              <SplitDocs />
            </Stack>
          </div>
        </Grid>
        <Overview />
        <Examples />
        <LayoutFundamentals />
      </main>

    </div>
  )
}

export default App
