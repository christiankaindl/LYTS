import React, { CSSProperties, useRef, useState } from 'react'
import * as styles from './Stack.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { vars } from '../index.css'
import { Slot } from '@radix-ui/react-slot'
import { BaseProps } from '..'
import { useLayoutEffect } from 'react'
import useMergedRef from '@react-hook/merged-ref'

export type StackProps = {
  wrap?: boolean | CSSProperties['flexWrap']
  children: React.ReactNode
} & BaseProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

const Stack = React.forwardRef<Ref, StackProps>(function Stack ({
  children,
  gap = '1em',
  asChild = false,
  bleed,
  bleedTop,
  bleedRight,
  bleedBottom,
  bleedLeft,
  style = {},
  ...props
}, ref) {
  const Comp = asChild ? Slot : 'div';

  const myRef = useRef<HTMLDivElement>()

  const [_bleed, setBleed] = useState({})
  useLayoutEffect(() => {
    const el = myRef?.current
    if (!el) { return }
    
    // Could do simple parsing instead (`bleed.split(' ')`)
    bleed && (el.style.margin = String(bleed))
    bleedTop && (el.style.marginTop = String(bleedTop))
    bleedRight && (el.style.marginRight = String(bleedRight))
    bleedBottom && (el.style.marginBottom = String(bleedBottom))
    bleedLeft && (el.style.marginLeft = String(bleedLeft))

    setBleed({
      [vars.bleedTop]: el.style['marginTop'],
      [vars.bleedRight]: el.style['marginRight'],
      [vars.bleedBottom]: el.style['marginBottom'],
      [vars.bleedLeft]: el.style['marginLeft']
    })

    el.style.marginTop = ''
    el.style.marginRight = ''
    el.style.marginBottom = ''
    el.style.marginLeft = ''
  }, [myRef?.current, bleed, bleedLeft, bleedRight, bleedBottom, bleedTop])

  const _gap = typeof gap === 'number' ? `${gap}em` : gap
  return (
    <Comp
      {...props}
      ref={useMergedRef(ref, myRef)}
      className={`${styles.stack} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          [vars.gap]: _gap,
          ..._bleed
        })
      }}
    >
      {children}
    </Comp>
  )
})

export default Stack
