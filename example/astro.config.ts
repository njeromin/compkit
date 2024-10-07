import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import icon from "astro-icon";
import { integrations } from "../src/astro.ts";

// https://astro.build/config
export default defineConfig({
	integrations: integrations([
		icon({
			include: {
				mdi: ["send"],
			},
		}),
	]),
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	redirects: {
		"/components": "/components/input",
	},
});
