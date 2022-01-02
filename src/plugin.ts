import { visit } from 'unist-util-visit'

export default function remarkSourcePlugin () {
  return (tree, file) => {
    // console.log('tree', tree)
    visit(tree, 'mdxjsEsm', (node) => {
      // console.log(node)
    })
  }
}
