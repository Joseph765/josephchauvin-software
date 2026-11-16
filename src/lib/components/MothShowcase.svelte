<!-- Screenshot of the Moth UI docs site (moth-ui.com), framed as an app window. -->
<script>
	import hero from '$lib/assets/moth-ui-hero.png?w=1600;1200;800&enhanced';
</script>

<figure class="window">
	<div class="chrome" aria-hidden="true">
		<span></span><span></span><span></span>
		<p class="mono">moth-ui.com</p>
	</div>
	<enhanced:img
		src={hero}
		alt="Moth UI docs home page: the headline 'The design system Svelte was missing.' beside a Team plan pricing card built from Moth components"
		sizes="(min-width: 960px) 640px, 100vw"
		loading="lazy"
	/>
</figure>

<style>
	figure {
		margin: 0;
	}

	.window {
		border: var(--hairline);
		border-radius: 14px;
		background: #000;
		overflow: hidden;
		box-shadow:
			0 0 0 1px color-mix(in srgb, var(--m-accent-9) 10%, transparent),
			0 40px 80px -30px color-mix(in srgb, var(--m-accent-9) 35%, transparent);
	}

	.chrome {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 12px 16px;
		border-bottom: var(--hairline);
		background: var(--m-gray-1);
	}

	.chrome span {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--m-gray-5);
	}

	.chrome p {
		margin-left: 10px;
		font-size: var(--m-font-size-xs);
		color: var(--m-color-text-weakest);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	img {
		display: block;
		width: 100%;
		height: auto;
	}
</style>
