import React from "react";

function Footer(props) {
    return(
        <footer class="footer" id="footer">
		<nav>
			<ul class="footer__social-links">
				<li class="footer__social-link">
					<a target="_blank" href="https://github.com/t-montes/" rel="noreferrer">GitHub</a>
				</li>
				<li class="footer__social-link">
					<a target="_blank" href="https://www.linkedin.com/in/t-montes/" rel="noreferrer">LinkedIn</a>
				</li>
				<li class="footer__social-link">
					<a target="_blank" href="https://www.instagram.com/tony_santiago_333/" rel="noreferrer">Instagram</a>
				</li>
				<li class="number"></li>
				<li>
					<a href="mailto:santiago.montesb@gmail.com" class="number">santiago.montesb@gmail.com</a>
					&nbsp; | &nbsp;
					<a href="mailto:t.montes@uniandes.edu.co" class="number">t.montes@uniandes.edu.co</a>
				</li>
			</ul>
		</nav>
		<div class="footer__outro">
			<p class="footer__info">
				Created by&nbsp;
				<a target="_blank" href="https://github.com/t-montes/" rel="noreferrer">Tony Montes</a>
				&nbsp;Inspired by&nbsp;
				<a target="_blank" href="https://twitter.com/nisarhassan12" rel="noreferrer">Nisar.</a>
			</p>
			<p class="footer__info">&copy;2023. All rights reserved.</p>
		</div>
	</footer>
    );
}

export default Footer;