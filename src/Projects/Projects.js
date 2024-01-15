import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import projects from '../lang/projects.en.json';

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
          initialSlide={isPC ? 1 : 0}
          ref={swiperRef}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} onClick={() => handleClick((index) % projects.length)}>
              <ProjectCard project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
