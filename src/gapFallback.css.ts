import { style } from "@vanilla-extract/css";

/**
 * Used to implement custom fallback behavior for browsers that don't support the `gap` property in flexbox.
 * Specifically Safari 12 and newer
 */
export const legacyGapEnabled = style({})
