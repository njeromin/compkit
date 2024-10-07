// Do not write code directly here, instead use the ` folder!

// What you should do here is re-exports all the things you want your user to access, ex:
// export { HelloWorld } from "./main.ts"
// export type { HelloWorldResult } from "./types.ts"

// ── Structure ──────────────────────────────────────────────────────────
// @ts-expect-error
import ThemedBody from "./components/ThemedBody/index.astro";
// @ts-expect-error
import App from "./components/App.astro";
// @ts-expect-error
import Dialog from "./components/Dialog.astro";
// @ts-expect-error
import Card from "./components/Card.astro";
// @ts-expect-error
import Header from "./components/Header.astro";

export { ThemedBody, App, Dialog, Card, Header };

// ── Interactive ─────────────────────────────────────────────────────
// @ts-expect-error
import Button from "./components/Button.astro";
// @ts-expect-error
import Input from "./components/Input.astro";
// @ts-expect-error
import Select from "./components/Select.astro";
// @ts-expect-error
import ToggleSwitch from "./components/ToggleSwitch.astro";
// @ts-expect-error
import Link from "./components/Link.astro";

export { Button, Input, Select, ToggleSwitch, Link };
