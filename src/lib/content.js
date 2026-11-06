// Single source of truth for the site's copy.
// Source: static/joseph-chauvin-resume.pdf (2026 resume).

export const profile = {
	name: 'Joseph Chauvin',
	role: 'Frontend engineer',
	headline:
		'Frontend engineer building design systems and real-time dashboards. 3+ years shipping for Foundry Digital and Yuma.',
	location: 'Houston, TX',
	focus: ['Svelte', 'React', 'Design Systems'],
	email: 'joseph.chauvin102@gmail.com',
	available: true,
	resume: {
		href: '/joseph-chauvin-resume.pdf',
		filename: 'Joseph Chauvin Resume.pdf'
	},
	links: {
		github: 'https://github.com/Joseph765',
		linkedin: 'https://www.linkedin.com/in/josephchauvin/'
	}
};

export const bio = [
	"I'm a front-end engineer with 3+ years building scalable design systems and real-time dashboards used directly by leadership, in React, Next.js and SvelteKit.",
	'I care about the layer between design and code: tokens, components and the small interaction details that make an interface feel considered. SvelteKit is my favorite place to build.'
];

/** Set to false to hide the career-break row in the timeline. */
export const showGap = true;

export const experience = [
	{
		company: 'Yuma',
		role: 'Front End Software Engineer',
		dates: 'Jan 2025 — Apr 2025',
		context: 'Forefront of decentralized intelligence',
		highlights: [
			'Shipped the dTAO launch dashboard on a tight timeline, delivering accurate Bittensor chain data to leadership during a critical rollout.',
			'Led front-end architecture for an internal SvelteKit + Chart.js dashboard used daily by leadership, with auto-refreshing real-time data.'
		]
	},
	{
		company: 'Foundry Digital',
		role: 'Front End Software Engineer',
		dates: 'May 2022 — Dec 2024',
		context: 'Top Bitcoin mining pool in the United States',
		highlights: [
			'Led the company design system: adopted across multiple codebases and stacks, with hands-on integration support and a documentation site.',
			'Redesigned and launched a site map feature that lets users visualize mining operations with far more clarity.'
		]
	},
	{
		company: 'Hack Reactor',
		role: 'Software Engineering Immersive',
		dates: '2020',
		context: 'Full-stack JavaScript bootcamp',
		highlights: []
	}
];

export const gap = {
	dates: '2025 — 2026',
	label: 'Explored game audio design, now back to front-end with renewed focus.'
};

export const skills = [
	{
		group: 'Daily',
		items: [
			'Svelte 5',
			'SvelteKit',
			'React 19',
			'Next.js',
			'JavaScript',
			'TypeScript',
			'CSS / SCSS'
		]
	},
	{
		group: 'Craft',
		items: [
			'Design systems',
			'Design tokens',
			'Accessibility',
			'Responsive layout',
			'SVG',
			'Data viz (Chart.js)'
		]
	},
	{
		group: 'Tooling',
		items: ['Vite', 'Vercel', 'Lit', 'Webpack', 'Git', 'SSR']
	}
];

export const projects = [
	{
		slug: 'volt-ui',
		title: 'Volt UI',
		featured: true,
		tagline: 'A Svelte design system, built solo, end to end.',
		description:
			'Design tokens, accessible components and a documentation site for building consistent, high-quality interfaces fast. It keeps a UI cohesive without slowing anyone down.',
		role: 'Sole author: design, engineering, docs',
		stack: ['Svelte', 'SvelteKit', 'CSS custom properties', 'npm'],
		highlights: [
			{ value: '38', label: 'components' },
			{ value: '135', label: 'design tokens' },
			{ value: '6', label: 'color scales' }
		],
		links: {
			docs: 'https://volt-ui.com/getting-started',
			code: 'https://github.com/Joseph765/Volt-UI'
		}
	},
	{
		slug: 'stakeflow',
		title: 'Stakeflow',
		status: 'In progress',
		tagline: 'A crypto staking dashboard built on Volt UI.',
		description:
			'A real-world proving ground for my design system. Every card, table and control is Volt UI, connected to live market data: prices and 7-day trends for the top coins are fetched server-side from CoinGecko and drawn as animated charts.',
		role: 'Personal project · design & engineering',
		stack: ['SvelteKit', 'Volt UI', 'Chart.js', 'CoinGecko API'],
		points: [
			'Built entirely from Volt UI components and design tokens',
			'Live prices and 7-day sparklines, loaded server-side',
			'Animated Chart.js graphs colored straight from the design tokens'
		],
		links: {
			live: 'https://stakeflow-lovat.vercel.app',
			code: 'https://github.com/Joseph765/stakeflow'
		}
	},
	{
		slug: '1000hills',
		title: '1000 Hills Ministry',
		status: 'Client project · Live',
		tagline: 'A production website for a Houston homeless ministry.',
		description:
			"Built in direct partnership with the ministry's director, from gathering requirements to turning feedback into revisions, for a site that brings in volunteers, donations and visitors to its outdoor service, held seven days a week.",
		role: 'Freelance · worked directly with the client',
		stack: ['SvelteKit', 'TypeScript', 'Design tokens', 'Vercel'],
		points: [
			'Scoped, reviewed and iterated directly with the director',
			'Live "next service" indicator that knows what time it is in Houston',
			"Click-to-load video embeds that skip YouTube's tracking until played"
		],
		links: {
			live: 'https://1000hills-sigma.vercel.app',
			code: 'https://github.com/Joseph765/1000hills'
		}
	}
];
