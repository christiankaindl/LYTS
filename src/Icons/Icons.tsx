import Clamp from '@lib/Clamp/Clamp'
import Columns from '@lib/Columns/Columns'
import Grid from '@lib/Grid/Grid'
import Row from '@lib/Row/Row'
import Stack from '@lib/Stack/Stack'
import React, { FunctionComponent } from 'react'
import IconChild from './IconBox'
import * as styles from './Icons.css'

export const StackIcon: FunctionComponent = function StackIcon () {
  return (
    <Stack
      gap='6px'
      expandChildren
      className={styles.stack}
      style={{ backgroundImage: 'linear-gradient(32grad, #ea9280, #e58fb1)' }}
    >
      <IconChild />
      <IconChild />
      <IconChild />
    </Stack>
  )
}

export const RowIcon: FunctionComponent = function StackIcon () {
  return (
    <Row
      gap='6px'
      expandChildren
      className={styles.row}
      style={{ alignItems: 'stretch' }}
    >
      <IconChild />
      <IconChild />
      <IconChild />
    </Row>
  )
}

export const ClampIcon: FunctionComponent = function StackIcon () {
  return (
    <Clamp gap='6px' clamp='32px' className={styles.clamp}>
      <IconChild style={{ height: '100%' }} />
    </Clamp>
  )
}

export const ColumnsIcon: FunctionComponent = function StackIcon () {
  return (
    <Columns gap='6px' ratio='1/2' className={styles.columns}>
      <IconChild />
      <IconChild />
    </Columns>
  )
}

export const GridIcon: FunctionComponent = function StackIcon () {
  return (
    <Grid gap='6px' gridItemMinWidth='8px' className={styles.grid}>
      <IconChild />
      <IconChild />
      <IconChild />
      <IconChild />
      <IconChild />
      <IconChild />
      <IconChild />
      <IconChild />
      <IconChild />
    </Grid>
  )
}
