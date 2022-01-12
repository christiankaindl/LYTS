import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import { Stack, Row, Clamp, Columns, Grid } from './'

const App: FunctionComponent = function () {
  return (
    <div>
      <Stack>
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
      </Stack>
      <hr />
      <Row>
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
      </Row>
      <hr />
      <Clamp clamp='900px'>
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
