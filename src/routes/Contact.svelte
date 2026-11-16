<script>
	import { profile } from '$lib/content.js';
	import { reveal } from '$lib/actions/reveal.js';
	import CopyEmail from '$lib/components/CopyEmail.svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';

	const year = new Date().getFullYear();
</script>

<section class="section contact" id="contact" aria-labelledby="contact-title">
	<div class="container">
		<div use:reveal>
			<p class="eyebrow"><span>03</span><span>/ Contact</span></p>
			<h2 id="contact-title" class="title">Let's build something<br />people enjoy using.</h2>
			<p class="lede">
				I'm looking for my next front-end role, especially one with a design system or a data-heavy
				product. The fastest way to reach me is email.
			</p>
			<CopyEmail email={profile.email} size="l" />
			<p class="location mono">
				<SocialIcon name="map-pin" size={16} /> Based in {profile.location}
			</p>
		</div>

		<footer>
			<p class="mono">© {year} {profile.name}</p>
			<ul>
				<li>
					<a href={profile.links.github} target="_blank" rel="external noopener noreferrer">
						<SocialIcon name="github" size={16} /> GitHub
					</a>
				</li>
				<li>
					<a href={profile.links.linkedin} target="_blank" rel="external noopener noreferrer">
						<SocialIcon name="linkedin" size={16} /> LinkedIn
					</a>
				</li>
				<li>
					<a href={profile.resume.href} download={profile.resume.filename} rel="external">
						<SocialIcon name="download" size={16} /> Resume
					</a>
				</li>
			</ul>
		</footer>
	</div>
</section>

<style>
	.contact {
		padding-bottom: var(--m-space-xl);
		background: radial-gradient(
			50% 60% at 0% 100%,
			color-mix(in srgb, var(--m-accent-9) 12%, transparent),
			transparent 70%
		);
	}

	.title {
		margin: var(--m-space-m) 0 var(--m-space-l);
		font-size: var(--display-l);
		font-weight: var(--m-font-weight-black);
		letter-spacing: -0.035em;
		line-height: 1.02;
	}

	.lede {
		max-width: 48ch;
		margin-bottom: var(--m-space-xl);
		font-size: var(--m-font-size-l);
		line-height: 1.6;
		color: var(--m-color-text-weak);
	}

	.location {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-top: var(--m-space-l);
		font-size: var(--m-font-size-s);
		color: var(--m-color-text-weaker);
	}

	footer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: var(--m-space-m);
		margin-top: clamp(5rem, 12vw, 9rem);
		padding-top: var(--m-space-l);
		border-top: var(--hairline);
		font-size: var(--m-font-size-m);
		color: var(--m-color-text-weaker);
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: var(--m-space-l);
		list-style: none;
	}

	footer a {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: var(--m-color-text-weak);
		text-decoration: none;
		transition: color 0.2s;
	}

	@media (pointer: fine) {
		footer a:hover {
			color: var(--m-color-text);
		}
	}
</style>
