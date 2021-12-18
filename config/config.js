
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faGoogleDrive, faChrome } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Mari",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Mari",
	description: "A Computer Engineer in Olin College of Engineering skilled in computer science, data analysis, user-integrated design, web development, and machine learning.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/13Qo7QrCeMjjayg703Xk4gIPIjFUmAUvEadxQqkqO47Q/edit?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I am a junior in Olin College of Engineering pursuing a degree in Engineering with Computing. I have a work experience as a web developer in Purgo Biologics, and I'm currently a research assistant in Boston University. ",
		"As a student in a college with project-based curriculum and integrated learning, I have various project experiences related to user-experience design and integrated engineering with mechanical and electrical engineers. To me, designing for the users is as important as the programming itself.",
	],
}

export const work = {
	title: "Work Experience",
	cards: [
		{
			title: "Research Assistant",
			description: "I improved an eye tracker for people with disabilities involving the nervous system in Boston University School of Medicine.",
			icons: null,
		},
		{
			title: "Data Researcher",
			description: "I built algorithm using Python to collect FAA flight data for air quality research in Boston Logan area in Olin College of Engineering.",
			icons: null,
		},
		{
			title: "Web Developer",
			description: "I programmed two web applications with full security measures using python flask and ubuntu server management for product subsidiary stock management and salesperson assistance.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Music Visualizer",
			description: "A music visualizer that gets user input, generates music based on an open-source machine learning neural network using the input, and visualizes the instrument and notes with LEDs and moving cats.",
			icons: [
				{
					icon: faChrome,
					link: "https://olincollege.github.io/pie-2021-03/Disco-Cats/",
				},
				{
					icon: faGithub,
					link: "https://github.com/GatiAher/disco_cats",
				},
			]
		},
		{
			title: "FAA Data Management",
			description: "An algorithm that consistently collects FAA flight data for Boston Logan airport, filter the data, and add into its own Amazon AWS Aurora MySQL database.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/joon628/FAADataSort",
				},
			]
		},
		{
			title: "Fall Detection Analysis",
			description: "An analysis of fall detection based on the algorithm that monitors the motion of a person using accelerometer and detect a falling motion.",
			icons: [
				{
					icon: faChrome,
					link: "https://marisweet3546.wixsite.com/falldetectionqea",
				},
				{
					icon: faGithub,
					link: "https://github.com/joon628/Quantitative_Fall_Detection_Analysis",
				},
			]
		},
		{
			title: "Line Following Robot",
			description: "A line-following robot using arduino motorshield and two infrared reflectance sensors.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/MariKang/line-following-robot",
				},
			]
		},
		{
			title: "Spotify Song Data Analysis",
			description: "An analysis of song popularity using Spotify tracks' metadata from spotifyr package.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/MariKang/DataSci-SpotifyAnalysis",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Feel to reach out directly by email at mkang1@olin.edu.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:mkang1@olin.edu",
			isPrimary: true,
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/marikang/",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE
export const SEO = {
	// 50 - 60 char
	title: "Mari Kang| Computer Engineer",
	description: "A Computer Engineer in Olin College of Engineering skilled in computer science, data analysis, user-integrated design, web development, and machine learning.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@marikang",
	description: "Computer Engineer | Program Manager",
	cards: [
		{
			title: "My website",
			link: "https://marikang.github.io/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/MariKang/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/marikang/",
		},
	]
}
