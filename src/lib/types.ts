export interface project {
	title: string;
	description: string;
	link: string;
	repo: string;
	images: string[];
	technologies: string[];
	contributors: contributor[];
}

export interface contributor {
	alias: string;
	name: string;
	link: string;
}
