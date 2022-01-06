import Row from "@lib/Row/Row";
import { FunctionComponent } from "react";
import * as styles from './Button.css'

const Button: FunctionComponent = function Button ({ children }) {
  return (
    <Row asChild gap={0.75}>
      <button className={styles.button}>
        {children}
      </button>
    </Row>
  )
}

export default Button
