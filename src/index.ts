// Do not write code directly here, instead use the ` folder!

// What you should do here is re-exports all the things you want your user to access, ex:
// export { HelloWorld } from "./main.ts"
// export type { HelloWorldResult } from "./types.ts"

// ── Structure ──────────────────────────────────────────────────────────
import App from "./components/App/index.astro";
import Dialog from "./components/Dialog.astro";
import Card from "./components/Card.astro";
import Header from "./components/Header.astro";

export { App, Dialog, Card, Header };

// ── Interactive ─────────────────────────────────────────────────────
import Button from "./components/Button.astro";
import Input from "./components/Input.astro";
import Select from "./components/Select.astro";
import ToggleSwitch from "./components/ToggleSwitch.astro";
import Link from "./components/Link.astro";

export { Button, Input, Select, ToggleSwitch, Link };
