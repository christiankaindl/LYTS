export function useAlign (orientation: 'row' | 'column', xAlign: string, yAlign: string) {
  return {
    flexDirection: orientation,
    alignItems: orientation === 'row' ? yAlign : xAlign,
    justifyContent: orientation === 'row' ? xAlign : yAlign
  }
}
