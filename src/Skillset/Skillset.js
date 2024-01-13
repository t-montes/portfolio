import React from "react";
import Slideshow from "./Slideshow";

function Skillset({ showSlideshow }) {
    return(
		<section className="skill craft" id="skill">
			<div className="u-text-center">
				<h2 className="heading-secondary">My Skillset</h2>
				<p className="intro-text">
					I have skills 
					in multiple languages such as&nbsp;
					<span className="about__py">Python</span>,&nbsp;
					<span className="about__jv">Java</span>,&nbsp;
					<span className="about__js">JavaScript</span> and&nbsp;
					<span className="about__ts">TypeScript</span>. 
					Furthermore, I have experience working with industry-leading frameworks such as&nbsp;
					<span className="about__react">React</span>,&nbsp;
					<span className="about__flutter">Flutter</span>,&nbsp;
					<span className="about__angular">Angular</span>,&nbsp;
					<span className="about__node">NodeJS</span>,&nbsp;
					<span className="about__spring">Spring</span> and&nbsp; 
					<span className="about__django">Django</span>. 	
					A most extensive list of my skills can be found below.
				</p>
				<div className="craft__row">
					<div className="craft__item">
						<img src="./img/browser-16.svg" alt="Browser" className="craft__img" />
						<h3 className="heading-tertiary">Front-end</h3>
						<p className="craft__description">
							React, Angular
							<br />
							HTML, CSS, Vanilla JS, Bootstrap
							<br />
							<b>Mobile:</b> Flutter, React Native
						</p>
					</div>
	
					<div className="craft__item hack"></div>
	
					<div className="craft__item">
						<img src="./img/browser-26.svg" alt="Server" className="craft__img" />
						<h3 className="heading-tertiary">Back-end</h3>
						<p className="craft__description">
							NodeJS, Spring, Django, Flask, NestJS, Express
							<br />
							<b>DB:</b> PostgreSQL, MongoDB
							<br />
							<b>Cloud:</b> AWS, GCP, Azure
							<br />
							<b>Robotics:</b> ROS
						</p>
					</div>
				</div>

				{showSlideshow && <Slideshow />}

				<a target="_blank" href="https://github.com/t-montes" className="btn" rel="noreferrer">My GitHub</a>
			</div>
		</section>
    );
}

export default Skillset;