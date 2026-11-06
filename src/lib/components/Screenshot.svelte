<!--
	A site screenshot in a browser-window frame, linking to the live site.
	The image renders client-side only, so it stays out of the server HTML that
	link-preview crawlers read (see the og:image note in +page.svelte).
-->
<script>
	import { onMount } from 'svelte';

	/** @type {{ src: import('vite-imagetools').Picture, alt: string, href: string }} */
	let { src, alt, href } = $props();

	const host = $derived(href.replace(/^https?:\/\//, '').replace(/\/$/, ''));

	let mounted = $state(false);
	onMount(() => (mounted = true));
</script>

<a class="window" {href} target="_blank" rel="external noopener noreferrer">
	<div class="chrome" aria-hidden="true">
		<span></span><span></span><span></span>
		<p class="mono">{host}</p>
	</div>
	<div class="frame">
		{#if mounted}
			<enhanced:img
				{src}
				{alt}
				sizes="(min-width: 1200px) 560px, (min-width: 768px) 50vw, 100vw"
				loading="lazy"
			/>
		{/if}
	</div>
	<span class="visually-hidden">(opens {host} in a new tab)</span>
</a>

<style>
	.window {
		display: block;
		border: var(--hairline);
		border-radius: 12px;
		overflow: hidden;
		background: var(--v-gray-1);
		text-decoration: none;
		transition:
			border-color 0.3s,
			transform 0.4s var(--ease-out);
	}

	.chrome {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 10px 14px;
		border-bottom: var(--hairline);
	}

	.chrome span {
		flex: none;
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: var(--v-gray-5);
	}

	.chrome p {
		min-width: 0;
		margin-left: 8px;
		font-size: var(--v-font-size-xs);
		color: var(--v-color-text-weakest);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/* Reserves the space before the client-side image arrives. */
	.frame {
		position: relative;
		aspect-ratio: 3 / 2;
		background: var(--v-color-surface);
		overflow: hidden;
	}

	.frame :global(img) {
		position: absolute;
		inset: 0;
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top left;
		transition: transform 0.6s var(--ease-out);
	}

	@media (pointer: fine) {
		.window:hover {
			border-color: var(--v-gray-7);
		}

		.window:hover .frame :global(img) {
			transform: scale(1.02);
		}
	}
</style>
