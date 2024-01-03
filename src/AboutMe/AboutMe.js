import React from "react";

function AboutMe(props) {
    return(
		<section className="about" id="about">
			<div className="u-text-center">
				<h2 className="heading-secondary">About Me</h2>
				<p className="intro-text">
					I am a passionate Systems Engineering and Electronic Engineering student 
					interested in developing creative and innovative solutions. 
					As a freelance developer at&nbsp;
					<a target="_blank" href="https://somositti.com/" rel="noreferrer">ITTI</a>, 
					&nbsp;I worked in both backend and frontend roles, primarily in JavaScript, along with 
					cloud functions. I have also worked as a tutor, monitor, and research assistant 
					in the design of various undergraduate and graduate courses, including master's 
					degree programs; mainly focused on software engineering, helping more than 200 
					students achieve their academic goals.
					<br />
					<br />
					I am looking for opportunities to enhance my skills in the field of AI and to 
					work in this field in the future. I enjoy applying the knowledge acquired to 
					practical solutions and am constantly seeking opportunities to learn about 
					new topics. Also I am passionate about teaching and helping others with the subjects 
					in which I excel, as 
					<br />
					<span className="about__phrase">I believe knowledge is the most solid foundation for progress</span>. 
					<br />
					My goal is to continue growing professionally and adding value to challenging 
					and creative projects in the field of software and AI development.
					<br />
					<br />
					Along with my colleagues, I founded the&nbsp;
					<a target="_blank" href="https://github.com/Open-Source-Uniandes" rel="noreferrer">Open Source</a>
					&nbsp;leadership at Universidad de los Andes to encourage and support the creation of 
					tools for the university community made by the community itself. As co-leader 
					of the team, I am responsible for administrative management and providing proposed 
					solutions to the challenges raised. 
				</p>
			</div>
		</section>
    );
}

export default AboutMe;