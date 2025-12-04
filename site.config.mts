import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'MP',
	favicon: 'favicon.ico',
	owner: 'Marcelo Perez',
	profileImage: 'profile2.jpg',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/marcelop/portfolio',
			icon: Github,
		} as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/marcelo_mtl/',
			icon: Instagram,
		} as SocialLink,
	],
};
