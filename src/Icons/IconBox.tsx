import { CSSProperties, FunctionComponent } from "react"

const IconChild: FunctionComponent<{ style?: CSSProperties }> = function ({ style = {} }) {
  return (
    <div
      style={{
        backgroundColor: 'rgb(255 255 255 / 0.9)',
        borderRadius: 3,
        boxShadow: '0 4px 15px -4px rgba(0, 0, 0, 0.2)',
        ...style
      }}
    />
  )
}

export default IconChild
