'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import profile from '../../public/profile.png';
import Head from 'next/head';
import Navbar from './components/Navbar.jsx';
import TextTypingEffect from './components/TextTypingEffect.jsx';

const useIntersectionObserver = (options = { threshold: 0.1 }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [options]);

    return [ref, isIntersecting];
};

const ProjectItem = ({ project }) => {
    const [projectRef, projectInView] = useIntersectionObserver();

    return (
        <article
            ref={projectRef}
            className={`group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 h-full flex flex-col ${
                projectInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-teal-400 transition-colors">
                {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.split('&').map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
            {tech.trim()}
          </span>
                ))}
            </div>
            <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 inline-flex items-center gap-2 transition-colors"
                aria-label={`View source code for ${project.title}`}
            >
                View Code
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
        </article>
    );
};

export default function Home() {
    const [heroRef, heroInView] = useIntersectionObserver();
    const [aboutRef, aboutInView] = useIntersectionObserver();
    const [projectsRef, projectsInView] = useIntersectionObserver();

    const projectsData = [
        {
            title: 'E-commerce Store',
            tech: 'Laravel & Next.js & Docker',
            link: 'https://github.com/Dommmin/store',
            description: 'Full-stack e-commerce platform with payment integration and admin dashboard.'
        },
        {
            title: 'Real-time Chat App',
            tech: 'Laravel & Vue.js',
            link: 'https://github.com/Dommmin/chat-app',
            description: 'Instant messaging application with real-time updates using WebSockets.'
        },
        {
            title: 'Restaurant Reservation',
            tech: 'Laravel & Vue.js',
            link: 'https://github.com/Dommmin/restaurant',
            description: 'Online reservation system with table management and SMS notifications.'
        },
        {
            title: 'Job Offers Platform',
            tech: 'Laravel & Vue.js',
            link: 'https://github.com/Dommmin/jobs',
            description: 'Job board with advanced filtering and applicant tracking system.'
        },
        {
            title: 'Symfony Blog',
            tech: 'Symfony API Platform & React.js',
            link: 'https://gitlab.com/Dommmin/blog/',
            description: 'Modern blog platform with rich text editor and social sharing features.'
        }
    ];

    const handleDownload = () => {
        const cv = '/CV.pdf';
        const link = document.createElement('a');
        link.href = cv;
        link.download = 'Dominik_Jasinski_CV.pdf';
        link.click();
    };

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <Head>
                <title>Dominik Jasiński - Full Stack Developer Portfolio</title>
                <meta name="description" content="Professional portfolio of Dominik Jasiński - Experienced Full Stack Developer specializing in Laravel, React, and Vue.js. Check out my projects and technical expertise." />
                <meta name="keywords" content="Full Stack Developer, Laravel Developer, React Developer, Vue.js, Portfolio, Web Development" />
                <meta name="author" content="Dominik Jasiński" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://portfolio-dominik.vercel.app/" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                <meta property="og:title" content="Dominik Jasiński - Full Stack Developer Portfolio" />
                <meta property="og:description" content="Professional portfolio showcasing web development projects and technical expertise." />
                <meta property="og:image" content="https://portfolio-dominik.vercel.app/preview.png" />
                <meta property="og:url" content="https://portfolio-dominik.vercel.app/" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Dominik Jasiński - Full Stack Developer" />
                <meta name="twitter:description" content="Check out my latest web development projects and technical skills." />
                <meta name="twitter:image" content="https://portfolio-dominik.vercel.app/preview.png" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Dominik Jasiński",
                        "jobTitle": "Full Stack Developer",
                        "url": "https://portfolio-dominik.vercel.app",
                        "sameAs": [
                            "https://www.linkedin.com/in/dominik-jasi%C5%84ski/",
                            "https://github.com/Dommmin"
                        ],
                        "description": "Experienced Full Stack Developer specializing in modern web technologies and frameworks.",
                        "image": "https://portfolio-dominik.vercel.app/profile.png"
                    })}
                </script>
            </Head>

            <Navbar aboutRef={aboutRef} projectsRef={projectsRef} />

            <section
                ref={heroRef}
                className="min-h-[calc(100vh-80px)] px-4 flex items-center relative scroll-mt-20"
            >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/10 to-transparent" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-8xl mx-auto w-full">
                    <div className="self-center space-y-4">
                        <p className={`text-3xl md:text-4xl font-light text-gray-300 transition-opacity duration-500 ${heroInView ? 'animate-slide-in' : 'opacity-0'}`}>
                            Hi, I&apos;m
                        </p>
                        <h1 className={`text-6xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent transition-opacity duration-500 ${heroInView ? 'animate-slide-in-delay' : 'opacity-0'}`}>
                            Dominik Jasiński
                        </h1>
                        <TextTypingEffect
                            text="Full Stack Developer"
                            className="text-3xl md:text-4xl text-teal-400"
                            shouldStart={heroInView}
                        />
                        <div className={`flex space-x-4 pt-6 transition-opacity duration-500 ${heroInView ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
                            <a
                                href="https://www.linkedin.com/in/dominik-jasi%C5%84ski/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline hover:bg-teal-500/20 border-teal-500 text-teal-400 transition-all"
                                aria-label="Visit LinkedIn profile"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://dominik-dev.pl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline hover:bg-teal-500/20 border-teal-500 text-teal-400 transition-all"
                                aria-label="Visit my technical blog"
                            >
                                My Blog
                            </a>
                            <button
                                onClick={handleDownload}
                                className="btn bg-teal-600 hover:bg-teal-700 border-none text-white transition-colors"
                                aria-label="Download CV"
                            >
                                Download CV
                            </button>
                        </div>
                    </div>

                    <div className={`relative self-center hidden md:block transition-opacity duration-500 ${heroInView ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 blur-3xl opacity-30 rounded-full" />
                        <div className="relative hexagon-clip">
                            <Image
                                src={profile}
                                alt="Dominik Jasinski - Full Stack Developer"
                                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                                width={600}
                                height={600}
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                ref={aboutRef}
                className="py-20 bg-gray-800/50 scroll-mt-20"
                aria-labelledby="about-heading"
            >
                <div className={`max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 transition-opacity duration-500 ${aboutInView ? 'opacity-100' : 'opacity-0'}`}>
                    <div className={`relative group transition-opacity duration-500 ${aboutInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <Image
                            src={profile}
                            alt="Dominik Jasinski - Professional portrait"
                            className="rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform"
                            width={600}
                            height={400}
                            loading="lazy"
                        />
                    </div>

                    <div className={`space-y-8 transition-opacity duration-500 ${aboutInView ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        <h2 id="about-heading" className="text-5xl font-bold mb-8 relative inline-block">
                            About Me
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 origin-left scale-x-100" />
                        </h2>

                        <div className="space-y-6 text-lg">
                            <p className="text-gray-300 leading-relaxed">
                                I&apos;m a passionate Full Stack Developer with over 3 years of experience in creating
                                modern web applications. My expertise spans both frontend and backend development,
                                with a strong focus on the Laravel ecosystem and React/Vue.js. I share my knowledge and insights on my{' '}
                                <a
                                    href="https://dominik-dev.pl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 hover:text-teal-300 transition-colors"
                                    aria-label="Visit my technical blog"
                                >
                                    technical blog
                                </a>.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-gray-700/30 p-6 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                                    <h3 className="text-xl font-semibold mb-4 text-teal-400">Backend</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        {['Laravel', 'Symfony', 'REST APIs', 'MySQL', 'PostgreSQL', 'Redis'].map((skill) => (
                                            <li key={skill} className="flex items-center">
                                                <span className="w-2 h-2 bg-teal-400 mr-2 rounded-full" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-700/30 p-6 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                                    <h3 className="text-xl font-semibold mb-4 text-teal-400">Frontend</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        {['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'WebSocket'].map((skill) => (
                                            <li key={skill} className="flex items-center">
                                                <span className="w-2 h-2 bg-teal-400 mr-2 rounded-full" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-700/30 p-6 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                                    <h3 className="text-xl font-semibold mb-4 text-teal-400">DevOps & Tools</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        {['Docker', 'GitHub Actions', 'GitLab CI/CD', 'Linux', 'Nginx'].map((skill) => (
                                            <li key={skill} className="flex items-center">
                                                <span className="w-2 h-2 bg-teal-400 mr-2 rounded-full" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                ref={projectsRef}
                className="py-20 bg-gray-900/50 scroll-mt-20"
                aria-labelledby="projects-heading"
            >
                <div className={`max-w-8xl mx-auto px-4 transition-opacity duration-500 ${projectsInView ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 id="projects-heading" className="text-5xl font-bold mb-16 text-center relative">
                        My Projects
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-teal-500" />
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project, index) => (
                            <ProjectItem key={index} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900/80 py-12 mt-20">
                <div className="max-w-8xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Dominik Jasiński</h3>
                            <p className="text-gray-400">
                                Building innovative web solutions with modern technologies
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Connect</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="https://github.com/Dommmin" className="hover:text-teal-400" rel="noopener noreferrer" aria-label="GitHub profile">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/in/dominik-jasiński" className="hover:text-teal-400" rel="noopener noreferrer" aria-label="LinkedIn profile">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="https://dominik-dev.pl" className="hover:text-teal-400" rel="noopener noreferrer" aria-label="Visit my technical blog">
                                        Technical Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact</h4>
                            <a href="mailto:domijas96@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors" aria-label="Send email">
                                domijas96@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                        © {new Date().getFullYear()} Dominik Jasiński. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}