<script>
	import { bio, experience, gap, showGap, skills } from '$lib/content.js';
	import { reveal } from '$lib/actions/reveal.js';
	import portrait from '$lib/assets/portrait.jpg?w=1280;800;480&enhanced';
</script>

<section class="section" id="experience" aria-labelledby="experience-title">
	<div class="container layout">
		<aside class="intro">
			<div class="sticky" use:reveal>
				<p class="eyebrow"><span>02</span><span>/ Experience</span></p>
				<h2 id="experience-title" class="section-title">A bit about me.</h2>

				<figure>
					<enhanced:img
						src={portrait}
						alt="Joseph Chauvin smiling, sitting on rocks beside a creek"
						sizes="(min-width: 960px) 320px, (min-width: 520px) 480px, 100vw"
						loading="lazy"
					/>
				</figure>

				{#each bio as paragraph, i (i)}
					<p class="bio">{paragraph}</p>
				{/each}
			</div>
		</aside>

		<div class="main">
			<ol class="timeline">
				{#each experience as job, i (job.company)}
					{#if showGap && i === 1}
						<li class="entry gap" use:reveal>
							<p class="dates mono">{gap.dates}</p>
							<p class="gap-label">{gap.label}</p>
						</li>
					{/if}
					<li class="entry" use:reveal>
						<p class="dates mono">{job.dates}</p>
						<div>
							<h3>
								{job.role} <span class="at">at</span> <span class="company">{job.company}</span>
							</h3>
							<p class="context">{job.context}</p>
							{#if job.highlights.length}
								<ul class="highlights">
									{#each job.highlights as point (point)}
										<li>{point}</li>
									{/each}
								</ul>
							{/if}
						</div>
					</li>
				{/each}
			</ol>

			<div class="skills" use:reveal>
				<h3 class="eyebrow">Toolkit</h3>
				{#each skills as group (group.group)}
					<div class="skill-group">
						<p class="group-name">{group.group}</p>
						<ul>
							{#each group.items as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.layout {
		display: grid;
		grid-template-columns: minmax(0, 4fr) minmax(0, 7fr);
		gap: clamp(2.5rem, 6vw, 6rem);
	}

	/* Grid items default to min-width: auto, which lets the image's intrinsic
	   width (1280px) stretch the column in some browsers. */
	.intro,
	.main {
		min-width: 0;
	}

	.sticky {
		position: sticky;
		top: calc(var(--header-h) + 2rem);
		display: flex;
		flex-direction: column;
		gap: var(--v-space-l);
	}

	figure {
		box-sizing: border-box;
		width: 100%;
		max-width: 20rem;
		margin: var(--v-space-s) 0 0;
		border-radius: 16px;
		overflow: hidden;
		border: var(--hairline);
	}

	/* enhanced:img renders <picture><img></picture>; <picture> is inline by default. */
	figure :global(picture) {
		display: block;
	}

	/* Size the image from its own width + aspect ratio rather than a percentage
	   height, which resolves inconsistently against an inline <picture>. */
	figure :global(img) {
		display: block;
		width: 100%;
		max-width: 100%;
		height: auto;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		object-position: 65% 40%;
		filter: saturate(0.9);
	}

	.bio {
		max-width: 40ch;
		font-size: var(--v-font-size-l);
		line-height: 1.65;
		color: var(--v-color-text-weak);
	}

	.timeline {
		list-style: none;
	}

	.entry {
		display: grid;
		grid-template-columns: 10.5rem minmax(0, 1fr);
		gap: var(--v-space-m) var(--v-space-l);
		padding-block: var(--v-space-xl);
		border-bottom: var(--hairline);
	}

	.entry:first-child {
		padding-top: 0;
	}

	.dates {
		font-size: var(--v-font-size-s);
		color: var(--v-color-text-weaker);
		padding-top: 6px;
		white-space: nowrap;
	}

	.entry h3 {
		font-size: var(--v-font-size-2xl);
		font-weight: var(--v-font-weight-bold);
		letter-spacing: -0.01em;
		line-height: 1.25;
	}

	.at {
		color: var(--v-color-text-weakest);
		font-weight: var(--v-font-weight-regular);
	}

	.company {
		color: var(--v-accent-11);
	}

	.context {
		margin-top: 4px;
		font-size: var(--v-font-size-m);
		color: var(--v-color-text-weaker);
	}

	.highlights {
		display: flex;
		flex-direction: column;
		gap: var(--v-space-s);
		margin-top: var(--v-space-m);
		list-style: none;
	}

	.highlights li {
		position: relative;
		padding-left: 1.25rem;
		font-size: var(--v-font-size-l);
		line-height: 1.6;
		color: var(--v-color-text-weak);
	}

	.highlights li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.7em;
		width: 8px;
		height: 1px;
		background: var(--v-gray-8);
	}

	.entry.gap {
		padding-block: var(--v-space-l);
	}

	.gap-label {
		font-size: var(--v-font-size-m);
		font-style: italic;
		color: var(--v-color-text-weaker);
	}

	.skills {
		display: flex;
		flex-direction: column;
		gap: var(--v-space-l);
		margin-top: var(--v-space-2xl);
	}

	.skill-group {
		display: grid;
		grid-template-columns: 10.5rem minmax(0, 1fr);
		gap: var(--v-space-s) var(--v-space-l);
		align-items: baseline;
	}

	.group-name {
		font-weight: var(--v-font-weight-bold);
		font-size: var(--v-font-size-m);
	}

	.skill-group ul {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		list-style: none;
	}

	.skill-group li {
		padding: 5px 12px;
		border: var(--hairline);
		border-radius: var(--v-radius-round);
		background: var(--v-color-surface);
		font-size: var(--v-font-size-m);
		color: var(--v-color-text-weak);
	}

	@media (max-width: 60rem) {
		.layout {
			grid-template-columns: minmax(0, 1fr);
		}

		.sticky {
			position: static;
		}

		/* Cap the photo so it doesn't take over tablet-width screens. */
		figure {
			max-width: 30rem;
		}

		figure :global(img) {
			aspect-ratio: 4 / 3;
		}
	}

	@media (max-width: 40rem) {
		.entry,
		.skill-group {
			grid-template-columns: minmax(0, 1fr);
			gap: var(--v-space-s);
		}

		.timeline {
			border-left: var(--hairline);
			padding-left: var(--v-space-l);
		}

		.dates {
			padding-top: 0;
		}
	}
</style>
