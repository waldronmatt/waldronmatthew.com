# waldronmatthew.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/d78b85f5-0cf2-4525-acb8-bef8f6f560be/deploy-status)](https://app.netlify.com/sites/waldronmatthew/deploys)

My personal [portfolio website](https://www.waldronmatthew.com) built using [webpack-template](https://github.com/waldronmatt/webpack-template), the [simplepwa template](https://github.com/nikkifurls/simplepwa), and a custom version of the [theme-switcher](https://web.dev/building-a-theme-switch-component).

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

## Running PWA Locally

1. Install [mkcert](https://github.com/FiloSottile/mkcert)

2. Run `mkcert localhost` in the project root directory.

3. Replace `dev` script in `package.json` with the following:

```json
"script": {
  "dev": "webpack serve --https-cert localhost.pem --https-key localhost-key.pem --env development --config config/webpack.dev.js",
}
```

## License

MIT
