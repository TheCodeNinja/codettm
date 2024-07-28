import React, { useState } from 'react';
import { Element, Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './scroll.css';

const Header = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <animated.header style={fadeIn} className="header">
      <h1>Hi, my name is David.</h1>
      <p>I love creating beautiful user experiences.</p>
      <Link to="contact" smooth={true} duration={500} className="cta-button">
        Get in touch
      </Link>
    </animated.header>
  );
};

const AnimatedSection = ({ children, className, id }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  const scaleAnimation = useSpring({
    transform: inView ? 'scale(1)' : 'scale(0)',
    opacity: inView ? 1 : 0,
    config: { tension: 170, friction: 26 },
  });

  return (
    <section ref={ref} className={className} id={id}>
      <animated.div style={fadeAnimation}>
        <animated.div style={scaleAnimation}>
          {children}
        </animated.div>
      </animated.div>
    </section>
  );
};

const About = () => {
  return (
    <AnimatedSection className="about" id="about">
      <h2>About</h2>
      <p>
        At the age of 15, David first came in touch with UX Design and app development.
      </p>
      <p>
        During his 4 years of military service, programming has always been a passion of his.
      </p>
      <p>
        Now, after professional coaching, David is looking for new challenges to work as a web developer.
      </p>
    </AnimatedSection>
  );
};

const Skills = () => {
  return (
    <AnimatedSection className="skills" id="skills">
      <h2>Skills</h2>
      <p>List your skills here.</p>
    </AnimatedSection>
  );
};

const Portfolio = () => {
  return (
    <AnimatedSection className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <p>Some things I've worked on.</p>
    </AnimatedSection>
  );
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <AnimatedSection className="contact" id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </AnimatedSection>
  );
};

const ScrollPage = () => {
  return (
    <div>
      <Header />
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default ScrollPage;
