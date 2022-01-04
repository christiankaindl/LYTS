import { lyts } from "@lib/index.css";
import { style } from "@vanilla-extract/css";

// FIXME: Bleed is not applied
export const box = style([lyts, {
  display: 'flex'
}])
