# @plugin-svg-types/rsbuild

🎯 Core Functionality
plugin-svg-types is an automation plugin designed to address the issue of lack of type safety for icon names when utilizing SVG icons in a project.

It scans a designated directory for all .svg files and automatically generates a TypeScript Union Type (SvgIconName) based on those filenames (stripped of the .svg extension). This resulting union type is then exported to a type declaration file (.d.ts).

<p>
  <a href="https://npmjs.com/package/@plugin-svg-types/rsbuild">
   <img src="https://img.shields.io/npm/v/@plugin-svg-types/rsbuild?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
  <a href="https://npmcharts.com/compare/@plugin-svg-types/rsbuild?minimal=true"><img src="https://img.shields.io/npm/dm/rsbuild-plugin-example.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="downloads" /></a>
</p>

## Usage

Install:

```bash
npm add @plugin-svg-types/rsbuild -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginSvgTypes } from "@plugin-svg-types/rsbuild";

export default {
  plugins: [pluginSvgTypes()],
};
```

## Options

## License

[MIT](./LICENSE).
