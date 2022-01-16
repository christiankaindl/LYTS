import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import { Stack, Row, Clamp, Columns, Grid, Box } from './'

const App: FunctionComponent = function () {
  return (
    <div>
      <Stack xAlign='end'>
        <span>Item 1</span>
        <span>Item 2</span>
        <Box bleedTop='5px' style={{ border: '1px solid black' }}>
          <span>Box child</span>
          <Box style={{ border: '1px solid black' }}>
            Nested box child
          </Box>
        </Box>
      </Stack>
      <hr />
      <Row xAlign='space-between'>
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
      </Row>
      <hr />
      <Clamp clamp='750px'>
        <span>Child</span>
      </Clamp>
      <hr />
      <Columns>
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
      </Columns>
      <hr />
      <Grid>
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
      </Grid>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
