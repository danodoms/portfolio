import type { project } from '$lib/types';



export const notableProjects: project[] = [
	{
		title: 'evento',
		description:
			'QR Code based events attendance web app',
		link: 'https://eventoportal.netlify.app',
		longDescription: ['This is a PWA, which means it can be installed', ''],
		features: ['Attendance Tracking', 'Data Persistence'],
		slug: 'evento',
		repo: 'https://github.com/danodoms/evento',
		images: [],
		technologies: ['React', 'NextJS', 'Supabase', 'TanStack Query'],
		contributors: [],
		impacts:["Successfully serves over 1,000 users", "Attendance logging sped up by 5x, reducing wait times"]
	},
	{
		title: 'XR Vision',
		description:
			'AI-Powered Rice Leaf NPK Deficiency Detector Mobile App ',
		link: '',
		longDescription: [],
		features: ['On-device AI', 'Data Persistence'],
		slug: 'xr-vision',
		repo: 'https://github.com/danodoms/XR-Vision',
		images: [],
		technologies: ['React Native', 'Expo','Tensorflow', 'Supabase', 'Legend State'],
		contributors: [],
		impacts:["On-device AI processing", "Realtime analysis"]
	}
];


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
		technologies: ['React', 'Firebase', 'Daisy UI', 'PWA', 'jikan API'],
		contributors: [],
		impacts:[]
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
		contributors: [],
		impacts:[]
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
		],
		impacts:[]
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
		contributors: [],
		impacts:[]
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
		contributors: [],
		impacts:[]
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
		contributors: [],
		impacts:[]
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
		contributors: [],
		impacts:[]
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
		contributors: [],
		impacts:[]
	}
];

