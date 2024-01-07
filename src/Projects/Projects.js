import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const projects = [
  {
    id: 'pj1',
    title: 'Song Preloading',
    scenario: 'Scenario 1',
    stars: 5,
    description:
      'When a song is played in the app, the music player takes the initiative to preload not only the current second of the song but also a few seconds ahead of it ...',
    imageUrl: 'https://picsum.photos/900?image=101',
  },
  {
    id: 'pj2',
    title: 'Song Downloading',
    scenario: 'Scenario 2',
    stars: 5,
    description:
      'Blackhole allows users to proactively download songs when a stable internet connection is available. By downloading songs in advance, users can build their offline music library ...',
    imageUrl: 'https://picsum.photos/900?image=103',
  },
  {
    id: 'pj3',
    title: 'Offline Reproduction',
    scenario: 'Scenario 3',
    stars: 5,
    description:
      'The enables users to access and enjoy their recently played songs even when they have no internet connectivity. By preserving the history of previously played songs you can continue to enjoy your songs even when ...',
    imageUrl: 'https://picsum.photos/900?image=104',
  },
  {
    id: 'pj4',
    title: 'No-Connectivity Ft.',
    scenario: 'Scenario 4',
    stars: 5,
    description:
      'In various pages, such as “Last session”, “Favorites” and “Stats” the app offers features that remain accessible even when there is no internet connectivity, it lorem ipsum dolor sit amet afhdashjgdsaa dnmavd dghsjadga gashdgajdh ajghsadg sad avgh',
    imageUrl: 'https://picsum.photos/900?image=107',
  },
  {
    id: 'pj5',
    title: 'Offline Playlist',
    scenario: 'Scenario 5',
    stars: 5,
    description:
      'In this scenario, the app misleadingly appears to allow users to create new playlists and add songs to them when no connectivity is available. But the playlists remain empty ...',
    imageUrl: 'https://picsum.photos/900?image=109',
  },
]; // TODO: Change for actual projects; and it's Card structure

const Projects = () => {
  const [isPC, setIsPC] = useState(window.innerWidth >= 768);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsPC(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (index) => {
    console.log(index);
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <section id="projects" className="projects">
      <h2 className="heading-secondary">Projects</h2>
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className="projects-slider"
          spaceBetween={40}
          slidesPerView={isPC ? 3 : 1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000, 
            pauseOnMouseEnter: true,
            disableOnInteraction: true
          }}
          initialSlide={1}
          ref={swiperRef}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id} onClick={() => handleClick((index) % projects.length)}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
