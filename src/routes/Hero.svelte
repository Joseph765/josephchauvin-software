<script>
	import { profile } from '$lib/content.js';
	import CopyEmail from '$lib/components/CopyEmail.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
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
			<span>{profile.location}</span>
			{#each profile.focus as item (item)}
				<span aria-hidden="true">·</span><span>{item}</span>
			{/each}
		</p>

		<div class="actions" style="--i: 4">
			<LinkButton href={profile.resume.href} download={profile.resume.filename}>
				Resume
				<SocialIcon name="download" size={18} />
			</LinkButton>
			<CopyEmail email={profile.email} />
			<div class="socials">
				<a
					href={profile.links.github}
					target="_blank"
					rel="external noopener noreferrer"
					aria-label="GitHub"
				>
					<SocialIcon name="github" />
				</a>
				<a
					href={profile.links.linkedin}
					target="_blank"
					rel="external noopener noreferrer"
					aria-label="LinkedIn"
				>
					<SocialIcon name="linkedin" />
				</a>
			</div>
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
				color-mix(in srgb, var(--v-accent-9) 22%, transparent),
				transparent 70%
			),
			radial-gradient(
				40% 40% at 90% 10%,
				color-mix(in srgb, var(--v-info-9) 8%, transparent),
				transparent 70%
			);
	}

	.glow::after {
		content: '';
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(var(--v-gray-3) 1px, transparent 1px),
			linear-gradient(90deg, var(--v-gray-3) 1px, transparent 1px);
		background-size: 64px 64px;
		mask-image: radial-gradient(80% 70% at 30% 20%, black, transparent 75%);
		opacity: 0.55;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--v-space-l);
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
		border-radius: var(--v-radius-round);
		background: color-mix(in srgb, var(--v-color-surface) 70%, transparent);
		font-size: var(--v-font-size-m);
		color: var(--v-color-text-weak);
	}

	.dot {
		position: relative;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--v-success-9);
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
		font-weight: var(--v-font-weight-black);
		line-height: 0.92;
		letter-spacing: -0.045em;
		margin-left: -0.04em;
		background: linear-gradient(180deg, var(--v-color-text) 40%, var(--v-gray-10));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		padding-bottom: 0.06em;
	}

	.headline {
		max-width: 36ch;
		font-size: clamp(1.25rem, 1.2vw + 1rem, 1.75rem);
		line-height: 1.35;
		color: var(--v-color-text-weak);
		text-wrap: pretty;
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		font-size: var(--v-font-size-m);
		color: var(--v-color-text-weaker);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--v-space-m) var(--v-space-l);
		margin-top: var(--v-space-s);
	}

	.socials {
		display: flex;
		gap: var(--v-space-xs);
	}

	.socials a {
		display: grid;
		place-items: center;
		width: 40px;
		height: 40px;
		border-radius: var(--v-radius);
		color: var(--v-color-text-weak);
		transition:
			color 0.2s,
			background-color 0.2s;
	}

	@media (pointer: fine) {
		.socials a:hover {
			color: var(--v-color-text);
			background: var(--v-color-surface-raised);
		}
	}
</style>
