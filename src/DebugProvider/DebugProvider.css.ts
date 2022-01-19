// import { boxStyles, stackStyles, rowStyles, clampStyles, columnsStyles, gridStyles } from "@christiankaindl/lyts"

import { blueA, crimsonA, mauveA, plumA, redA, tealA, tomatoA, violetA } from "@radix-ui/colors";
import { globalStyle, style } from "@vanilla-extract/css";
import { boxStyles } from "../Box/Box";
import { stackStyles } from "../Stack/Stack";
import { rowStyles } from "../Row/Row";
import { clampStyles } from "../Clamp/Clamp";
import { columnsStyles } from "../Columns/Columns";
import { gridStyles } from "../Grid/Grid";

globalStyle('html, body', {
  margin: 0,
  fontFamily: 'sans-serif'
})

export const debug = style({
  display: 'contents'
})
globalStyle(`${debug} ${toClassName(boxStyles.box)}`, {
  outline: `2px solid ${mauveA.mauveA6}`,
  padding: 18,
  borderRadius: 15,
  backgroundColor: mauveA.mauveA2
})
globalStyle(`${debug} ${toClassName(boxStyles.box)} > ${toClassName(boxStyles.box)}`, {
  borderRadius: 9
})

globalStyle(`${debug} ${toClassName(stackStyles.stack)}`, {
  // outline: '2px solid #f9c6c6', // Red 6
  outline: `2px solid ${redA.redA6}`,
  backgroundImage: `linear-gradient(160deg, ${tomatoA.tomatoA1}, ${crimsonA.crimsonA1})`
})

globalStyle(`${debug} ${toClassName(rowStyles.row)}`, {
  outline: '2px solid #f3c6e2',
  backgroundImage: `linear-gradient(160deg, ${crimsonA.crimsonA1}, ${plumA.plumA1})`
})

globalStyle(`${debug} ${toClassName(clampStyles.clamp)}`, {
  outline: '2px solid #e3ccf4',
  backgroundImage: `linear-gradient(160deg, ${plumA.plumA1}, ${violetA.violetA1})`
})

globalStyle(`${debug} ${toClassName(columnsStyles.columns)}`, {
  outline: '2px solid #c6d4f9',
  backgroundImage: `linear-gradient(160deg, ${violetA.violetA1}, ${blueA.blueA1})`
})

globalStyle(`${debug} ${toClassName(gridStyles.grid)}`, {
  outline: '2px solid #aadee6',
  backgroundImage: `linear-gradient(160deg, ${blueA.blueA1}, ${tealA.tealA1})`
})

export const nav = style([debug, {
  borderRadius: 24,
  justifyContent: 'center',
  backgroundColor: 'rgb(255, 255, 255, 0.25)',
  // backdropFilter: 'blur(10px)',
  boxShadow: '0 5px 24px -7px rgb(0 0 0 / 0.1)',
  padding: 18
}])

// Convert class name string as used in HTML's `class` attribute (separated by a space " ") to the CSS dot-notation so that they can be composed with vanilla extract more easily
function toClassName (htmlClassNames: string) {
  return `.${htmlClassNames.split(' ').join('.')}`
}
