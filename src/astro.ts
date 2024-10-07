import type { AstroIntegration } from "astro";
import global from "astro-global";

export function integrations(other_integrations: AstroIntegration[]) {
	return [global()].concat(other_integrations)
}
