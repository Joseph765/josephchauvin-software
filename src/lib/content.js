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
		slug: 'moth-ui',
		title: 'Moth UI',
		featured: true,
		tagline: 'The design system Svelte was missing. Built solo, end to end.',
		description:
			'A dark-first set of components for Svelte 5, designed together so an app looks finished the moment you install it. No theming, no config, and Svelte is the only peer dependency.',
		role: 'Sole author: design, engineering, docs',
		stack: ['Svelte 5', 'Vite', 'CSS custom properties', 'npm'],
		highlights: [
			{ value: '23', label: 'components' },
			{ value: '6', label: 'color scales' },
			{ value: '0', label: 'dependencies' }
		],
		links: {
			docs: 'https://www.moth-ui.com/getting-started',
			code: 'https://github.com/Joseph765/moth-ui'
		}
	}
];
