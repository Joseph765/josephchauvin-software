<script>
	import { profile } from '$lib/content.js';
	import { Button } from 'moth-ui-svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
</script>

<section class="hero" id="top" aria-labelledby="hero-title">
	<div class="glow" aria-hidden="true"></div>
	<div class="container content">
		{#if profile.available}
			<p class="status" style="--i: 0">
				<span class="dot" aria-hidden="true"></span>
				Available for work
			</p>
		{/if}

		<h1 id="hero-title" style="--i: 1">{profile.name}</h1>

		<p class="headline" style="--i: 2">{profile.headline}</p>

		<p class="meta mono" style="--i: 3">
			{#each profile.focus as item, i (item)}
				{#if i}<span aria-hidden="true">·</span>{/if}<span>{item}</span>
			{/each}
		</p>

		<div class="actions" style="--i: 4">
			<Button href={profile.resume.href} size="l" download={profile.resume.filename}>
				Resume
				<SocialIcon name="download" size={18} />
			</Button>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		box-sizing: border-box;
		min-height: 92svh;
		display: flex;
		align-items: flex-end;
		padding-block: calc(var(--header-h) + 4rem) clamp(4rem, 10vh, 7rem);
		isolation: isolate;
		overflow: hidden;
	}

	/* One soft accent light + a faint grid, fading out toward the bottom. */
	.glow {
		position: absolute;
		inset: 0;
		z-index: -1;
		background:
			radial-gradient(
				60% 55% at 15% 0%,
				color-mix(in srgb, var(--m-accent-9) 22%, transparent),
				transparent 70%
			),
			radial-gradient(
				40% 40% at 90% 10%,
				color-mix(in srgb, var(--m-info-9) 8%, transparent),
				transparent 70%
			);
	}

	.glow::after {
		content: '';
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(var(--m-gray-3) 1px, transparent 1px),
			linear-gradient(90deg, var(--m-gray-3) 1px, transparent 1px);
		background-size: 64px 64px;
		mask-image: radial-gradient(80% 70% at 30% 20%, black, transparent 75%);
		opacity: 0.55;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--m-space-l);
	}

	.content > * {
		animation: rise 0.9s var(--ease-out) both;
		animation-delay: calc(var(--i) * 90ms + 100ms);
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
	}

	.status {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 6px 14px 6px 12px;
		border: var(--hairline);
		border-radius: var(--m-radius-full);
		background: color-mix(in srgb, var(--m-color-surface) 70%, transparent);
		font-size: var(--m-font-size-m);
		color: var(--m-color-text-weak);
	}

	.dot {
		position: relative;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--m-success-9);
	}

	.dot::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background: inherit;
		animation: ping 2.4s var(--ease-out) infinite;
	}

	@keyframes ping {
		to {
			transform: scale(2.8);
			opacity: 0;
		}
	}

	h1 {
		font-size: var(--display-xl);
		font-weight: var(--m-font-weight-black);
		line-height: 0.92;
		letter-spacing: -0.045em;
		margin-left: -0.04em;
		background: linear-gradient(180deg, var(--m-color-text) 40%, var(--m-gray-10));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		padding-bottom: 0.06em;
	}

	.headline {
		max-width: 36ch;
		font-size: clamp(1.25rem, 1.2vw + 1rem, 1.75rem);
		line-height: 1.35;
		color: var(--m-color-text-weak);
		text-wrap: pretty;
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		font-size: var(--m-font-size-m);
		color: var(--m-color-text-weaker);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--m-space-m) var(--m-space-l);
		margin-top: var(--m-space-s);
	}
</style>
