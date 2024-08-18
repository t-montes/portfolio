import React from "react";

function AboutMe(props) {
    return(
		<section className="about" id="about">
			<div className="u-text-center">
				<h2 className="heading-secondary">About Me</h2>
				<p className="intro-text">
					I am a passionate Systems Engineering and Electronic Engineering last-year student 
					interested in developing creative and innovative solutions. 
					<br />
					My work in Artificial Intelligence includes my recent publication, 
					<a target="_blank" href="https://aclanthology.org/2024.lchange-1.4/" rel="noreferrer">Historical Ink: SSD</a>, 
					and my role as an ML Intern at Cornell. I am passionate about contributing to AI-related projects, whether in research or industry, 
					where I can apply my expertise to drive innovation.
					I continually seek opportunities to expand my knowledge and enjoy teaching and helping others in areas where I excel, as I believe that
					<br />
					<span className="about__phrase">I believe knowledge is the most solid foundation for progress</span>. 
					<br />
					<br />
					My goal is to contribute to challenging and innovative projects in AI research, particularly in Computer Vision and Natural Language Processing.
				</p>
			</div>
		</section>
    );
}

export default AboutMe;