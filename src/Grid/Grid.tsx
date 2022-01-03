import React, { Children, FunctionComponent } from 'react'
import * as styles from './Grid.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { BaseProps } from '..'
import Box from '@lib/Box/Box'

export type GridProps = {
  gridItemMinWidth?: string
  /** TODO */
  gridMaxRowItems?: number
  children: React.ReactNode
} & BaseProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

/**
 * TODO? https://css-tricks.com/responsive-layouts-fewer-media-queries/
 */
const Grid = React.forwardRef<Ref, GridProps>(function Split ({
  children,
  gridItemMinWidth = '300px',
  gridMaxRowItems,
  style = {},
  ...props
}, ref) {
  return (
    <Box
      {...props}
      ref={ref}
      className={`${styles.grid} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          [styles.gridItemMinWidth]: gridItemMinWidth,
          [styles.gridMaxRowItems]: (gridMaxRowItems && String(gridMaxRowItems)) || String(Children.count(children))
        })
      }}
    >
      {children}
    </Box>
  )
})

export default Grid


export const GridIcon: FunctionComponent = function StackIcon () {
  return (
    <Grid gap='6px' gridItemMinWidth='8px' style={{ padding: 12, borderRadius: 12, backgroundImage: 'linear-gradient(32grad, #5eb0ef, #53b9ab)', height: 64, width: 64 }}>
      <IconBox />
      <IconBox />
      <IconBox />
      <IconBox />
      <IconBox />
      <IconBox />
      <IconBox />
      <IconBox />
      <IconBox />
    </Grid>
  )
}

const IconBox = function ({ style = {} }) {
  return (
    <div
      style={{
        backgroundColor: 'rgb(255 255 255 / 0.9)',
        borderRadius: 3,
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 7px -1px',
        ...style
      }}
    />
  )
}
