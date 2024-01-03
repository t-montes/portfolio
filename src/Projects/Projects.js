import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import Swiper from 'swiper';
import 'swiper/css';

const projects = [
  {
    id: 'ecn1',
    title: 'Song Preloading',
    scenario: 'Scenario 1',
    stars: 5,
    description:
      'When a song is played in the app, the music player takes the initiative to preload not only the current second of the song but also a few seconds ahead of it ...',
    imageUrl: 'https://picsum.photos/100?image=101',
  },
  {
    id: 'ecn2',
    title: 'Song Downloading',
    scenario: 'Scenario 2',
    stars: 5,
    description:
      'Blackhole allows users to proactively download songs when a stable internet connection is available. By downloading songs in advance, users can build their offline music library ...',
    imageUrl: 'https://picsum.photos/100?image=103',
  },
  {
    id: 'ecn3',
    title: 'Offline Downloaded Reproduction',
    scenario: 'Scenario 3',
    stars: 5,
    description:
      'The enables users to access and enjoy their recently played songs even when they have no internet connectivity. By preserving the history of previously played songs you can continue to enjoy your songs even when ...',
    imageUrl: 'https://picsum.photos/100?image=104',
  },
  {
    id: 'ecn4',
    title: 'No-Connectivity Features',
    scenario: 'Scenario 4',
    stars: 5,
    description:
      'In various pages, such as “Last session”, “Favorites” and “Stats” the app offers features that remain accessible even when there is no internet connectivity, it also occurs with some features ...',
    imageUrl: 'https://picsum.photos/100?image=107',
  },
  {
    id: 'ecn5',
    title: 'Offline Playlist Management',
    scenario: 'Scenario 5',
    stars: 5,
    description:
      'In this scenario, the app misleadingly appears to allow users to create new playlists and add songs to them when no connectivity is available. But the playlists remain empty ...',
    imageUrl: 'https://picsum.photos/100?image=109',
  },
];

const Projects = () => {
    useEffect(() => {
        const projectsSlider = new Swiper('.projects-slider', {
          speed: 600,
          loop: true,
          slidesPerView: 'auto',
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
            },
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      
        const interval = setInterval(() => {
          projectsSlider.slideNext();
        }, 5000); // Slide every 5 seconds
      
        // Cleanup the interval when the component is unmounted
        return () => {
          clearInterval(interval);
          projectsSlider.destroy();
        };
      }, []);
      
  return (
    <section id="projects" className="projects">
        <h2 className="heading-secondary">Projects</h2>
        <div className="container">
            <div className="projects-slider swiper">
            <div className="swiper-wrapper">
                {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
            </div>
            <div className="swiper-pagination"></div>
            </div>
        </div>
    </section>
  );
};

export default Projects;