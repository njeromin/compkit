import Astro from "astro:global";

export function setCookie(name: string, value: any) {
	const d = new Date();
	d.setTime(d.getTime() + 10 * 365 * 24 * 60 * 60 * 1000);

	Astro.cookies.set(name, value, { maxAge: d });
}

export function getCookie(name: string) {
	const cookie = Astro.cookies.get(name);

	return cookie ? cookie.value : null;
}
