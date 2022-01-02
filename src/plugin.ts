import { visit } from 'unist-util-visit'
import flatMap from 'unist-util-flatmap'
import { code } from 'mdast-builder'

export default function remarkSourcePlugin () {
  return (tree, file) => {
    // console.log('tree', tree)
    const newTree = flatMap(tree, (node) => {
      if (node.type === 'mdxjsEsm' && node.value.startsWith('export const Example')) {
        // console.log(node)
        return [
          node,
          code('jsx', node.value)
        ]
      }

      return [node]
    })

    // Insert react-live area
    // visit(newTree, { name: 'LiveProvider' }, (node) => {
    //   console.log(node)
    //   node.attributes.find((att) => att.name === 'code').code = 'Something else' // Use the actual code
    // })

    return newTree
  }
}
