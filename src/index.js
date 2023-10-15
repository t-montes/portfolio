import './scss/main.scss'

require('./img/projects/Film Feedback/icon.png')
require('./img/projects/Film Feedback/1.png')
require('./img/projects/Film Feedback/2.png')
require('./img/projects/Film Feedback/3.png')

// TODO: Fill the JSON and require all the images
const projects = require('./projects.json')

// order projects from newest to oldest
projects.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
})

const ps = [] // list of divs

for (const project of projects) {
    let icon
    try {
        icon = require(`./img/projects/${project.name}/icon.png`)
    } catch {
        icon = require('./img/609732.svg')
    }

    ps.push(`
    <div class="work__item">
        <h3 class="heading-tertiary">${project.name}</h3>
        <p class="work__description">
            ${project.description}
        </p>
        <img src="${icon}" alt="${project.name}" class="work__img" />
    </div>
    `)
}

const P = document.getElementById('projects')

let areodd = ps.length % 2
let i = 0
let final = ""
while (ps.length > areodd) {
    let x = i % 2 ?
        `
        <div class="craft__item hack"></div>    
            ${ps.pop()}
        </div>
        `
    :
        `
        <div class="row project">
            ${ps.pop()}
        `
    final += x
    i++
}

if (areodd) 
    final += `
    <div class="row project">
        ${ps.pop()}
    </div>
    `

P.innerHTML = P.innerHTML + final

/*
		<!-- ***** Section Projects ***** -->
		<section class="work craft" id="work">
			<div class="u-text-center" id="projects">
				<h2 class="heading-secondary">Projects</h2>
				<p class="intro-text">
					I've worked on many projects along my career, personal and academic. 
					Here are listed some of the best projects I've worked on.
				</p>
			</div>
		</section>
 */

/*ps.innerHTML = ps.innerHTML + `
<div class="row">
    <div class="craft__item">
        <img src="/browser-16.fcfd00a5.svg" alt="Browser" class="craft__img" />
        <h3 class="heading-tertiary">Front-end</h3>
        <p class="craft__description">
            HTML, CSS, Vanilla JS, Bootstrap
            <br />
            <b>Mobile:</b> Flutter, React Native
        </p>
    </div>

    <div class="craft__item hack"></div>

    <div class="craft__item">
        <img src="/browser-26.c66fe73d.svg" alt="Server" class="craft__img" />
        <h3 class="heading-tertiary">Back-end</h3>
        <p class="craft__description">
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
`*/
