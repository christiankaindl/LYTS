import { box } from "@lib/Box/Box.css";
import { clamp } from "@lib/Clamp/Clamp.css";
import { columns } from "@lib/Columns/Columns.css";
import { grid } from "@lib/Grid/Grid.css";
import { row } from "@lib/Row/Row.css";
import { stack } from "@lib/Stack/Stack.css";
import { globalStyle, style } from "@vanilla-extract/css";

globalStyle('html, body', {
  margin: 0,
  fontFamily: 'sans-serif'
})

export const debug = style({})
globalStyle(`${debug} ${box}`, {
  outline: '2px solid rgba(0, 0, 0, .2)',
  padding: 18,
  borderRadius: 12
})

globalStyle(`${debug} ${stack}`, {
  outline: '2px solid #f9c6c6'
})

globalStyle(`${debug} ${row}`, {
  outline: '2px solid #f3c6e2'
})

globalStyle(`${debug} ${clamp}`, {
  outline: '2px solid #e3ccf4'
})

globalStyle(`${debug} ${columns}`, {
  outline: '2px solid #c6d4f9'
})

globalStyle(`${debug} ${grid}`, {
  outline: '2px solid #aadee6'
})

export const nav = style([debug, {
  borderRadius: 24,
  justifyContent: 'center',
  backgroundColor: 'rgb(255, 255, 255, 0.6)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 5px 24px -7px rgb(0 0 0 / 0.2)',
  padding: 18
}])
