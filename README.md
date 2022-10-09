# waldronmatthew.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/d78b85f5-0cf2-4525-acb8-bef8f6f560be/deploy-status)](https://app.netlify.com/sites/waldronmatthew/deploys)

The code for my personal [portfolio website](https://www.waldronmatthew.com).

Code template was generated from [webpack-template](https://github.com/waldronmatt/webpack-template).

## Installation

Install dependencies:

```bash
yarn
```

Install hooks:

```bash
yarn prepare
```

Install `make`:

```bash
[your-package-manager] install make
```

Install `yamllint` and `actionlint`.

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

Lint `.yml` files:

```bash
make -f MAKEFILE
```

## License

MIT
