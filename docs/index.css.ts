import { globalStyle } from "@vanilla-extract/css";
import { lyts } from '../src/global.css'

globalStyle('html, body', {
  margin: 0,
  fontFamily: 'sans-serif'
})

globalStyle(lyts, {
  outline: '2px solid rgba(0, 144, 255, 0.98)',
  padding: 18,
  borderRadius: 12,
  backgroundColor: 'rgb(255, 255, 255, 0.9)'
})
