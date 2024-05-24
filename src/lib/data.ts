import type { project } from '$lib/types';

export const projects: project[] = [
	{
		title: 'Find My Anime',
		description:
			'Anime recommendation web-app that suggests animes based on your already fave animes',
		link: 'https://find-my-anime.web.app/',
		longDescription: ['This is a PWA, which means it can be installed', ''],
		features: ['Anime Discovery', 'Data Persistence', 'Login Features'],
		slug: 'find-my-anime',
		repo: 'https://github.com/domsdano/find-my-anime',
		images: ['../projects/find-my-anime/1.png'],
		technologies: ['React', 'Firebase', 'Daisy UI', 'jikan API'],
		contributors: []
	},

	{
		title: 'University Library',
		description: 'A static Library website',
		link: 'https://dorsu-library.vercel.app/',
		longDescription: ['This is a PWA, which means it can be installed', ''],
		features: ['Anime Discovery', 'Data Persistence', 'Login Features'],
		slug: 'find-my-anime',
		repo: 'https://github.com/domsdano/dorsu-library',
		images: ['../projects/dorsu-library/1.png'],
		technologies: ['Svelte', 'SvelteKit', 'Daisy UI'],
		contributors: []
	},
	{
		title: 'Fingerprint Attendance System',
		description: 'Fingerprint based attendance system that generates Daily Time Record',
		longDescription: [''],
		features: [
			'Fingerprint Identification',
			'Fingerprint Registration',
			'DTR Generation',
			'Administrative Controls',
			'Holiday Calendar',
			'Timeoff Filing',
			'Employee Management',
			'Shifts Assignment'
		],
		slug: 'fingerprint-attendance-system',
		link: '',
		repo: 'https://github.com/domsdano/fingerprint-attendance',
		images: ['../projects/attendance-system/1.png'],
		technologies: ['Java', 'JavaFX', 'MySQL', 'Digital Persona API'],
		contributors: [
			{
				alias: '@henrytorlao',
				name: 'Henry Torlao Jr.',
				link: 'https://github.com/GrinHornet'
			}
		]
	},
	{
		title: 'My Portfolio',
		description: 'The personal portfolio website that you are currently on',
		link: '',
		longDescription: [''],
		features: [],
		slug: 'my-portfolio',
		repo: 'https://github.com/domsdano/portfolio',
		images: [],
		technologies: ['SvelteKit', 'shadcn-svelte'],
		contributors: []
	}
];

export const practiceProjects: project[] = [
	{
		title: 'Timesync',
		description: 'Timetable mobile app that has sync features',
		link: '',
		longDescription: ['This is a PWA, which means it can be installed', ''],
		features: ['Anime Discovery', 'Data Persistence', 'Login Features'],
		slug: 'timesync',
		repo: 'https://github.com/domsdano/time-sync-react-native',
		images: [],
		technologies: ['React Native', 'Laravel', 'WatermelonDB', 'shadcn'],
		contributors: []
	},
	{
		title: 'Sound Up',
		description: 'Displays chart of most streamed artists globally',
		link: '',
		longDescription: ['This is a PWA, which means it can be installed', ''],
		features: ['Anime Discovery', 'Data Persistence', 'Login Features'],
		slug: 'find-my-anime',
		repo: 'https://github.com/domsdano/sound-up',
		images: [],
		technologies: ['HTML', 'CSS', 'Javascript', 'Last.fm API'],
		contributors: []
	},
	{
		title: 'Blu POS',
		description: 'Point of sale system with login features',
		link: '',
		longDescription: ['This is a PWA, which means it can be installed', ''],
		features: ['Anime Discovery', 'Data Persistence', 'Login Features'],
		slug: 'find-my-anime',
		repo: 'https://github.com/domsdano/Point-of-Sale-System',
		images: [],
		technologies: ['Java'],
		contributors: []
	},
	{
		title: 'Employee CRUD',
		description:
			'A basic CRUD feature extension for interacting with the existing database from Fingerprint Attendance System, mainly for testing Laravel',
		link: '',
		longDescription: ['This is a PWA, which means it can be installed', ''],
		features: ['Anime Discovery', 'Data Persistence', 'Login Features'],
		slug: 'find-my-anime',
		repo: 'https://github.com/domsdano/employee-crud',
		images: [],
		technologies: ['Laravel', 'MySQL'],
		contributors: []
	}
];
