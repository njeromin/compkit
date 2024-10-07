import { setCookie, getCookie } from "./cookies";
import { storage_item } from "../common/theming";
import type { ThemeOption } from "../common/theming";

export function setTheme(theme: ThemeOption) {
	setCookie(storage_item, theme);
}

export function getTheme(): ThemeOption {
	const stored_value: ThemeOption = getCookie(storage_item);

	if (stored_value) {
		return stored_value;
	} else {
		setCookie(storage_item, "auto");
		return "auto";
	}
}

export function getInitialThemeClass() {
	switch (getTheme()) {
		case "light":
			return "light";
		case "dark":
			return "dark";
		default:
			return;
	}
}

export function cycleTheme(): ThemeOption {
	switch (getTheme()) {
		case "auto":
			setTheme("light");
			return "light";
		case "light":
			setTheme("dark");
			return "dark";
		case "dark":
			setTheme("auto");
			return "auto";
		default:
			setTheme("auto");
			return "auto";
	}
}
