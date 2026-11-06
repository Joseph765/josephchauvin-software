<script>
	import { profile } from '$lib/content.js';

	let scrolled = $state(false);
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 8)} />

<header class:scrolled>
	<div class="container inner">
		<a class="mark" href="#top" aria-label="{profile.name}, back to top">
			<span class="monogram">JC</span>
			<span class="name">{profile.name}</span>
		</a>
		<nav aria-label="Primary">
			<ul>
				<li><a href="#work">Work</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		position: fixed;
		inset: 0 0 auto;
		z-index: 10;
		height: var(--header-h);
		border-bottom: 1px solid transparent;
		transition:
			background-color 0.3s,
			border-color 0.3s,
			backdrop-filter 0.3s;
	}

	header.scrolled {
		background-color: color-mix(in srgb, var(--v-color-background) 72%, transparent);
		backdrop-filter: blur(14px) saturate(140%);
		-webkit-backdrop-filter: blur(14px) saturate(140%);
		border-bottom-color: var(--v-color-border);
	}

	.inner {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--v-space-m);
	}

	.mark {
		display: flex;
		align-items: center;
		gap: 10px;
		text-decoration: none;
	}

	.monogram {
		display: grid;
		place-items: center;
		width: 32px;
		height: 32px;
		border-radius: var(--v-radius);
		background: var(--v-color-text);
		color: var(--v-color-text-contrast);
		font-weight: var(--v-font-weight-black);
		font-size: var(--v-font-size-m);
		letter-spacing: -0.04em;
	}

	.name {
		font-weight: var(--v-font-weight-bold);
		font-size: var(--v-font-size-m);
		opacity: 0;
		transform: translateX(-4px);
		transition:
			opacity 0.3s,
			transform 0.3s var(--ease-out);
	}

	.scrolled .name {
		opacity: 1;
		transform: none;
	}

	ul {
		display: flex;
		list-style: none;
		gap: clamp(0.25rem, 2vw, 1.5rem);
	}

	nav a {
		display: block;
		padding: 6px 8px;
		font-size: var(--v-font-size-m);
		color: var(--v-color-text-weak);
		text-decoration: none;
		transition: color 0.2s;
	}

	@media (pointer: fine) {
		nav a:hover {
			color: var(--v-color-text);
		}
	}

	@media (max-width: 30rem) {
		.name {
			display: none;
		}
	}
</style>
