<script>
	import { profile } from '$lib/content.js';
	import Header from '$lib/components/Header.svelte';
	import Contact from './Contact.svelte';
	import Experience from './Experience.svelte';
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';

	const title = `${profile.name} · Frontend Engineer`;
	const description = profile.headline;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="theme-color" content="#050505" />
	<!-- No og:image / twitter:image on purpose: link previews show just the
	     site name + favicon. The portrait is also client-rendered so crawlers
	     can't fall back to it (see Experience.svelte). -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={profile.name} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<a class="skip" href="#work">Skip to content</a>
<Header />
<main>
	<Hero />
	<Projects />
	<Experience />
	<Contact />
</main>

<style>
	.skip {
		position: absolute;
		left: 1rem;
		top: -3rem;
		z-index: 20;
		padding: 8px 14px;
		border-radius: var(--v-radius);
		background: var(--v-color-text);
		color: var(--v-color-text-contrast);
		text-decoration: none;
		transition: top 0.2s;
	}

	.skip:focus {
		top: 1rem;
	}
</style>
