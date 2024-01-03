import React from "react";

function Skillset(props) {
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
	
				<div id="slideshow">
					<div className="entire-content">
						<div className="content-carrousel">
                            {/*TODO: Instead of redirect to page, redirect to popup with description and URL*/}
                            <figure><a target="_blank" href="https://react.dev/" rel="noreferrer"><img src="./img/assets/react.png" alt="React" /></a></figure>
                            <figure><a target="_blank" href="https://angular.io/" rel="noreferrer"><img src="./img/assets/angular.png" alt="Angular" /></a></figure>
                            <figure><a target="_blank" href="https://nodejs.org/en" rel="noreferrer"><img src="./img/assets/nodejs.svg" alt="Node.js" /></a></figure>
                            <figure><a target="_blank" href="https://spring.io/" rel="noreferrer"><img src="./img/assets/spring.png" alt="Spring" /></a></figure>
                            <figure><a target="_blank" href="https://www.djangoproject.com/" rel="noreferrer"><img src="./img/assets/django.png" alt="Django" /></a></figure>
                            <figure><a target="_blank" href="https://flutter.dev/" rel="noreferrer"><img src="./img/assets/flutter.webp" alt="Flutter" /></a></figure>
                            <figure><a target="_blank" href="https://html.spec.whatwg.org/multipage/" rel="noreferrer"><img src="./img/assets/html-css-js.png" alt="HTML, CSS, JavaScript" /></a></figure>
                            <figure><a target="_blank" href="https://nestjs.com/" rel="noreferrer"><img src="./img/assets/nestjs.svg" alt="Nest.js" /></a></figure>
                            <figure><a target="_blank" href="https://aws.amazon.com/" rel="noreferrer"><img src="./img/assets/aws.webp" alt="Amazon Web Services" /></a></figure>
                            <figure><a target="_blank" href="https://cloud.google.com/" rel="noreferrer"><img src="./img/assets/gcp.png" alt="Google Cloud Platform" /></a></figure>
                            <figure><a target="_blank" href="https://flask.palletsprojects.com/" rel="noreferrer"><img src="./img/assets/flask.webp" alt="Flask" /></a></figure>
                            <figure><a target="_blank" href="https://www.postgresql.org/" rel="noreferrer"><img src="./img/assets/postgresql.png" alt="PostgreSQL" /></a></figure>
                            <figure><a target="_blank" href="https://www.mongodb.com/" rel="noreferrer"><img src="./img/assets/mongodb.png" alt="MongoDB" /></a></figure>
                            <figure><a target="_blank" href="https://www.ros.org/" rel="noreferrer"><img src="./img/assets/ros.png" alt="ROS (Robot Operating System)" /></a></figure>
                            <figure><a target="_blank" href="https://git-scm.com/" rel="noreferrer"><img src="./img/assets/git.png" alt="Git" /></a></figure>
						</div>
					</div>
				</div>

				<a target="_blank" href="https://github.com/t-montes" className="btn" rel="noreferrer">My GitHub</a>
			</div>
		</section>
    );
}

export default Skillset;