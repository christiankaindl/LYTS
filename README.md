<div align='center'>
  <h1>LYTS</h1>
  <img src='./src/component-icons.png' alt='Abstract illustrations depicting the available layout components' />
  <p>Layout primitives for React.</p>
</div>

- Easy layouting - Powerful primitives for every type of layout
- Composable - Combine to create complex layouts
- Familiar - Apply standard CSS flexbox and grid knowledge

# Installation

```sh
npm install @christiankaindl/lyts
```

# Usage

Import the library CSS styles early in your application. For example in a Next.js app, import in `_app.js`:

```jsx
/** _app.js */
import '@christiankaindl/lyts/style.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

That's it! Now import one of the available components--Stack, Row, Clamp, Columns, Grid--and use them to get nice and consistent layouts.

Each layout component manages its direct children, for example the following creats a vertical layout (for example a blog post) with 1em spacing (the default) between elements:

```html
<Stack gap={1}>
  <h1>Very interesting article</h1>
  <p>Very short abstract</p>
  <p>Awesome content</p>
</Stack>
```
Stack also automatically removes any default margin of its direct children, which may have been added by the browser.

You can also nest layout components to create more complex layouts:

```html
<Stack asChild>
  <article>
    <h1>Very interesting article</h1>
    <Row>
      <time pubdate datetime="2021-11-18">Published 2021-11-18</time>
      <span>Example</span>
      <span>Docs</span>
    </Row>
    <p>Very short abstract</p>
    <p>Awesome content</p>
  </article>
</Stack>
```
The nested \<Row> adds a horizontal stack with the post's metadata. Also we now use the semantic article element as the wrapper component (Stack renders **NO** additional element) by specifying the `asChild` prop.

In addition to the `gap` and `asChild` props, all components also support the following props:

- `xAlign`/`yAlign`: Control vertical (y) or horizontal (x) alignment.
- `bleed`: Sets negative margin on an element. Useful for visually aligning elements such as "ghost" buttons.

Compose layout components until you get your desired outcome:

```tsx
const CenterCard: FunctionComponent = function () {
  return (
    // A card with a max-width of 750px and centers it
    <Clamp clamp='750px'>
      <Stack gap={0.75} className='card'>
        <img src='' />
        <h3>Card title</h3>
        <Row wrap gap={0.5}>
          <InfoIcon />
          <p>Info: This is a card</p>
        </Row>
        <Box xAlign='end'>Aligned to the right</Box>
      </Stack>
    </Clamp>
  )
}
```

Full docs with API and examples are coming soon.
