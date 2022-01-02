import { createVar, globalStyle, style } from "@vanilla-extract/css";

export const lyts = style({})

globalStyle(`${lyts} > *`, {
  margin: 0
})

export const vars = {
  gap: createVar('gap')
}
