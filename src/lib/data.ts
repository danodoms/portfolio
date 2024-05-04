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
		repo: 'https://github.com/danodoms/find-my-anime',
		images: ['../projects/find-my-anime/1.png'],
		technologies: ['React', 'Firebase', 'Daisy UI'],
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
		repo: 'https://github.com/danodoms/fingerprint-attendance-system',
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
		repo: 'https://github.com/danodoms/portfolio',
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
		repo: 'https://github.com/danodoms/time-sync-react-native',
		images: ['../projects/find-my-anime/1.png'],
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
		repo: 'https://github.com/danodoms/sound-up',
		images: ['../projects/find-my-anime/1.png'],
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
		repo: 'https://github.com/danodoms/Point-of-Sale-System',
		images: ['../projects/find-my-anime/1.png'],
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
		repo: 'https://github.com/danodoms/employee-crud',
		images: ['../projects/find-my-anime/1.png'],
		technologies: ['Laravel', 'MySQL'],
		contributors: []
	}
];
