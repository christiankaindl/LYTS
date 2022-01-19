import { FunctionComponent } from "react";
import { debug } from './DebugProvider.css'

/**
 * Render all children LYTS components with extra visual cues
 * @private
 */
const DebugProvider: FunctionComponent = function DebugProvider ({ children }) {
  return (
    <div className={debug}>
      {children}
    </div>
  )
}

export default DebugProvider
