import React from "react";

function Footer(props) {
    return(
        <footer className="footer" id="footer">
		<nav>
			<ul className="footer__social-links">
				<li className="footer__social-link">
					<a target="_blank" href="https://github.com/t-montes/" rel="noreferrer">GitHub</a>
				</li>
				<li className="footer__social-link">
					<a target="_blank" href="https://www.linkedin.com/in/t-montes/" rel="noreferrer">LinkedIn</a>
				</li>
				<li className="footer__social-link">
					<a target="_blank" href="https://www.instagram.com/tony_santiago_333/" rel="noreferrer">Instagram</a>
				</li>
				<li className="number"></li>
				<li>
					<a href="mailto:santiago.montesb@gmail.com" className="number">santiago.montesb@gmail.com</a>
					&nbsp; | &nbsp;
					<a href="mailto:t.montes@uniandes.edu.co" className="number">t.montes@uniandes.edu.co</a>
				</li>
			</ul>
		</nav>
		<div className="footer__outro">
			<p className="footer__info">
				Created by&nbsp;
				<a target="_blank" href="https://github.com/t-montes/" rel="noreferrer">Tony Montes</a>
				&nbsp;Inspired by&nbsp;
				<a target="_blank" href="https://twitter.com/nisarhassan12" rel="noreferrer">Nisar.</a>
			</p>
			<p className="footer__info">&copy;2024. All rights reserved.</p>
		</div>
	</footer>
    );
}

export default Footer;