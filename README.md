![](./docs/res/icon.svg) Compkit
================================

## Getting started

1. Install from npm, pnpm, or another package manager.
	```bash
	# npm
	npm install compkit
	# pnpm
	pnpm add compkit
	# yarn
	yarn add compkit
	# bun
	bun add compkit
	```
2.  Set up the required integrations in astro.config.js
	```ts
	import { integrations } from "compkit/astro";

	export default defineConfig({
	...
		integrations: integrations([...]),
		...
	})
	```
3. Use components from the library.

## Creating a layout

An example layout like the one below should allow for theming to be responsive.

```astro
---
import { ThemedBody, App } from "compkit";

interface Props {
	prerender?: boolean;
}
---

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<!-- ... -->
	</head>
	<App prerender={prerender}>
		<slot/>
	</App>
</html>
```
