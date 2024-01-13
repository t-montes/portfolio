import React from 'react';

const Slideshow = () => {
    return (
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
    );
}

export default Slideshow;