# waldronmatthew.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/d78b85f5-0cf2-4525-acb8-bef8f6f560be/deploy-status)](https://app.netlify.com/sites/waldronmatthew/deploys)

My personal [portfolio website](https://www.waldronmatthew.com) built using the [webpack-template](https://github.com/waldronmatt/webpack-template), the [simplepwa template](https://github.com/nikkifurls/simplepwa), the [simple-translator](https://github.com/andreasremdt/simple-translator), and a custom version of the [theme-switcher](https://web.dev/building-a-theme-switch-component).

Layout inspired by the [Composition with Red, Blue and Yellow](https://artsandculture.google.com/asset/composition-with-red-blue-and-yellow-piet-mondrian/5QG2Fm_LGUWAHA) painting on mobile and the [Great Composition A with Black, Red, Gray and Blue](https://artsandculture.google.com/story/RgWBdc6thZwOGA) painting on desktop.

## Installation

Install dependencies:

```bash
yarn
```

Install hooks:

```bash
yarn prepare
```

## Getting Started

Run dev environment:

```bash
yarn dev
```

Build and serve for Netlify:

```bash
yarn build
```

**Note:** Configure script in Netlify to auto-run via push to `main` branch.

Build for Express:

```bash
yarn prod
```

Serve for Express:

```bash
yarn serve
```

## Commands

Commit changes using conventional changelog:

```bash
yarn commit
```

Lint all files:

```bash
yarn lint
```

**Note**: `release.yml` will run this before versioning and publishing.

## License

MIT
