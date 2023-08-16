import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export const Works = ({ title, cards }) => {
	return (
		<div id="works" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							date={value.date}
							description={value.description}
							link={value.link} />
					))}
				</div>
			</div>
		</div>
	);
}

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card2
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons} />
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const Card = ({ title, date, description, icons }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "70rem" }}>
			<h4 className="text-primary">{title}</h4>
			<h6 className="text-dark"> {date}</h6>
			{description.map((value, index) => (
						<p className= "mb-0" key={index} >{value}</p>
			))}
			{/* <p className="text-dark">{description}</p> */}
			<div className="text-end">
				{icons && icons.map((value, index) => (
					<Link key={index} href={value.link}>
						<a target="_blank" rel="noreferrer">
							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}

export const Card2 = ({ title, description, icons }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "30rem" }}>
			<h4 className="text-primary">{title}</h4>
			<p className="text-dark">{description}</p>
			<div className="text-end">
				{icons && icons.map((value, index) => (
					<Link key={index} href={value.link}>
						<a target="_blank" rel="noreferrer">
							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}