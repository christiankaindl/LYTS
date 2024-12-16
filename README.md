<div align='center'>
  <h1>LYTS</h1>
  <img src='./src/component-icons.png' alt='Abstract illustrations depicting the available layout components' />
  <p>Layout primitives for React.</p>
</div>

# LYTS

Layout primitives to build any kind of layout with useful props like `bleed`, `asChild` and `xAlign`/`yAlign`.

- **Composable** – Combine to create complex layouts
- **Small bundle** – 4kB when using *all* exports
- **Unstyled** – Use the styling solution of your choice
- **Layout props** – Simple, productive API

## Docs

**https://lyts.christiankaindl.com**

⚛️ [Components](https://lyts.christiankaindl.com/components) · 📚 [Guides](https://lyts.christiankaindl.com/guides) · 📖 [Examples](https://lyts.christiankaindl.com/examples)

And that's all there is to set up! Now import one of the base components—<a href='https://lyts.christiankaindl.com/components/stack'>Stack</a>, <a href='https://lyts.christiankaindl.com/components/row'>Row</a>, <a href='https://lyts.christiankaindl.com/components/clamp'>Clamp</a>, <a href='https://lyts.christiankaindl.com/components/columns'>Columns</a>, <a href='https://lyts.christiankaindl.com/components/grid'>Grid</a>—and start building great layouts.

## Usage

Layout components can be composed until you achieve your desired layout. For example, The following \<CenterCard> component renders a card with a max-width of 400px, centers it and uses a <a href='https://lyts.christiankaindl.com/components/stack'>Stack</a> to get consistent spacing:

![image]()

```jsx
const CenterCard: FunctionComponent = function () {
  return (
    // A card with clamped 400px and centered
    <Clamp clamp='400px'>
      <Stack gap={0.75} className='card'>
        <h3>Card title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Stack>
    </Clamp>
  )
}
```

Check out the <a href='https://lyts.christiankaindl.com/examples'>Examples</a> page for a comprehensive collection of layouts and how to build them with LYTS.

A real-world example using LYTS is this documentation site, which makes extensive use of all components. [Check out the code here](https://github.com/christiankaindl/LYTS-website/)!

## Support & help

If you get stuck, [reach out to @christiankaindl](https://twitter.com/christiankaindl) on Twitter. In case of bugs, [open an issue on GitHub](https://github.com/christiankaindl/LYTS/issues).

## Local Development

```sh
npm install
npm run dev
```
