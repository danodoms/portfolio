export interface project {
	title: string;
	description: string;
	longDescription: string[];
	features: string[];
	link: string;
	repo: string;
	slug: string;
	images: string[];
	technologies: string[];
	contributors: contributor[];
	impacts:string[];
}

export interface contributor {
	alias: string;
	name: string;
	link: string;
}
