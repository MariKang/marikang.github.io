
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
			title: "Experience",
			link: "#works",
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
	description: "A entry-level software engineer skilled in full-stack and backend development",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: false,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/137sCnnVEtvNIQr8IdP_QchBldLqKOZhB/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"Hi! I’m a recent graduate of Olin College of Engineering and I majored in engineering with computing. I’m a fast learner and always eager to learn new things. I’m versed in C++, C, C#, Python, Java, and web development skills. I’m also experienced in SQL and AWS RDS.",
		"Going to a college that emphasizes hands-on learning experience, I worked on self-driven projects in every class with people in different fields including but not limited to engineers. I'm used to working in a cross-functional team and effectively communicating with people in various fields.",
	],
}

export const work = {
	title: "Work Experience",
	cards: [
		{
			title: "Software Engineer and Project Manager at US Department of Transportation Volpe Center",
			date: "Aug 2022 - May 2023",
			description: ["- Coded Python-based High Injury Network(HIN) algorithm that classifies roads of high risk using OSMnx and visualizes on web application.",
			"- Architected the data collection, cleaning, and relational database creation with AWS EC2. ",
			"- Led a team of 5 software engineers using Agile Methodology and implemented ethical guidelines for the HIN algorithm to ensure equitable outcome"],
			icons: null,
		},
		{
			title: "Software Engineer Intern at Par Technology",
			date: "Jun 2022 - May 2023",
			description: ["- Created a .NET app for a connection between Point of Sales System and the Drive-Thru portal by linking the vehicle and order information to ensure the precision of the order using C# and C",
			"- Programmed license plate detection algorithm that recognizes the plate from the car images, hashes the license plate number, and obfuscates the license plate using OpenCV"],
			icons: null,
		},
		{
			title: "Data Management Researcher at Olin College of Engineering",
			date: "Feb 2021 - May 2021",
			description: ["- Implemented Java Message Service (JMS) to collect real-time data from the Federal Aviation Administration flight dataset of Boston Logan Airport to determine causal inference between airport traffic and air quality in Boston area",
			"- Developed algorithm using Python to automatically detect new raw data, filter the altitude and location of the flight, and migrate to AWS database using MySQL"],
			icons: null,
		},
		{
			title: "Full Stack Developer at Purgo Biologics",
			date: "Jun 2020 - Sep 2020",
			description: ["- Deployed a sales assistance web application that tracks primary clients and visualizes data analysis using Flask and Ubuntu server management that decreased the sales churn rate by 27%",
			"- Developed a supply chain stock management web application that shows real-time inventory and automated alerts for restocking",
			"- Generated a Look-A-Like Model using Random Forest to identify potential customers based on their order history"],
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Wearable Technology for Blind / Visually Impaired Group",
			description: "Wearable technology mainly for blind and visually impaired group. Created iOS application that has functionalities including listening to music or reading news and can be completely screen-free using three different input methods (button, ring, quiet speech) based on the user's preference.",
			icons: [
				{
					icon: faGoogleDrive,
					link: "https://drive.google.com/drive/u/1/folders/1A735z9YCnJZ5UsYWG51l2ern-dx1cvCf",
				},
			]
		},
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
	description: "Feel to reach out directly by email at marisweet3546@gmail.com",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:marisweet3546@gmail.com",
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
