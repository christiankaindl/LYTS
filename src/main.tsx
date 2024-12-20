import { createRoot } from 'react-dom/client'
import React, { FunctionComponent, useLayoutEffect, useRef, useState, type RefObject } from 'react'
import { Stack, Row, Clamp, Columns, Grid, Box, Breakout, Split } from './'
import DebugProvider from './DebugProvider/DebugProvider'

function ForwardRefTest () {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | undefined>()

  useLayoutEffect(() => {
    setHeight(ref.current?.clientHeight)
  })

  return (
    <div>
      <ChildWithRef ref={ref} />
      Height: {height}
    </div>
  )
}

function ChildWithRef ({ ref }: { ref: RefObject<HTMLDivElement | null> }) {
  return <Stack ref={ref}>Child with ref</Stack>
}

const App: FunctionComponent = function () {
  return (
    <Stack gap={1.5} style={{ padding: 30 }}>
      <DebugProvider>
        <p>Default Stack</p>
        <Stack xAlign='end' gap={2}>
          <Box bleed='10px 0'>Item 1</Box>
          <Box>Item 2</Box>
          <Box bleedRight='20px' orientation='row' style={{ border: '1px solid black' }}>
            <Box>Box child</Box>
            <Box bleedTop='10px' style={{ border: '1px solid black' }}>
              Nested box child
            </Box>
          </Box>
        </Stack>
        <hr />
        <p>Default Row</p>
        <Row>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
        </Row>
        <p>Row `gap=0`</p>
        <Row gap={0}>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
        </Row>
        <p>Row with expandChildren</p>
        <Row expandChildren>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
        </Row>
        <p>Row with xAlign='space-between'</p>
        <Row xAlign='space-between'>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
        </Row>
        <p>Row with Split</p>
        <Row xAlign='space-between'>
          <Box>Item 1</Box>
          <Split />
          <Box>Item 3</Box>
        </Row>
        <hr />
        <p>Default Clamp</p>
        <Clamp clamp='750px' gap={2}>
          <Box>Child #1</Box>
          <Box>Child #2</Box>
        </Clamp>
        <p>Clamp with xAlign='center'</p>
        <Clamp clamp='750px' xAlign='center'>
          <Box>Child #1</Box>
          <Box>Child #2</Box>
        </Clamp>
        <p>Clamp with Breakout</p>
        <Clamp clamp='750px' gap={2}>
          <Box>Child #1</Box>
          <Breakout>
            Child #2 (Breakout)
          </Breakout>
          <Box>Child #3</Box>
        </Clamp>
        <p>Clamp with horizontal and vertical clamping</p>
        <Clamp clamp={['300px', '200px']} gap={2} style={{ height: 400 }}>
          <Box style={{ height: '100%' }}>Child #1</Box>
        </Clamp>
        <p>Clamp with only vertical clamping</p>
        <Clamp clamp={[null, '200px']} gap={2} style={{ height: 400 }}>
          <Box style={{ height: '100%' }}>Child #1</Box>
        </Clamp>
        <p>Clamp with yAlign</p>
        <Clamp clamp={'300px'} yAlign='center' style={{ height: 400 }}>
          <Box>Child #1</Box>
          <Box>Child #2</Box>
        </Clamp>
        <hr />
        <p>Default Columns</p>
        <Columns>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
        </Columns>
        <p>Columns with custom ratio</p>
        <Columns ratio='1/3/1'>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
        </Columns>
        <hr />
        <p>Default Grid</p>
        <Grid>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
        </Grid>

        <ForwardRefTest />
      </DebugProvider>
    </Stack>
  )
}

// @ts-expect-error
const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
