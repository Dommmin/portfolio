'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import profile from "../../public/profile.png";
import { useRef } from "react";
import Head from "next/head";
import Navbar from "./components/Navbar.jsx";
import TextTypingEffect from "./components/TextTypingEffect.jsx";

export default function Home() {
    const aboutMe = useRef(null);
    const projects = useRef(null);

    const handleDownload = () => {
        const cv = '/CV.pdf';
        const link = document.createElement('a');
        link.href = cv;
        link.download = 'Dominik_Jasinski_CV.pdf';
        link.click();
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <Head>
                <title>Dominik Jasiński - Full Stack Developer Portfolio</title>
                <meta name="description" content="Explore the portfolio of Dominik Jasiński, a Full Stack Developer experienced in PHP, JavaScript, and frameworks like Laravel and Vue.js." />
                <meta name="keywords" content="Dominik Jasiński, portfolio, Full Stack Developer, Laravel, Vue.js, React, Symfony" />
                <meta name="author" content="Dominik Jasiński" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://portfolio-dominik.vercel.app/" />
                <link rel="icon" href="/favicon.ico" />

                {/* Open Graph */}
                <meta property="og:title" content="Dominik Jasiński - Full Stack Developer Portfolio" />
                <meta property="og:description" content="Discover my projects and expertise in building modern web applications." />
                <meta property="og:image" content="https://portfolio-dominik.vercel.app/preview.png" />
                <meta property="og:url" content="https://portfolio-dominik.vercel.app/" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Dominik Jasiński - Full Stack Developer Portfolio" />
                <meta name="twitter:description" content="Check out my projects and professional experience." />
                <meta name="twitter:image" content="https://portfolio-dominik.vercel.app/preview.png" />

                {/* JSON-LD */}
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
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Self-Employed"
                        },
                        "description": "Explore the portfolio of Dominik Jasiński, a specialist in creating modern web applications."
                    })}
                </script>
            </Head>

            <Navbar aboutMe={aboutMe} projects={projects} />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="min-h-[calc(100vh-80px)] px-4 flex items-center"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <motion.div variants={itemVariants} className="self-center space-y-4">
                        <motion.p
                            className="text-3xl font-light text-gray-300"
                            variants={itemVariants}
                        >
                            Hi, I&apos;m
                        </motion.p>
                        <motion.h1
                            className="text-6xl font-bold"
                            variants={itemVariants}
                        >
                            Dominik Jasiński
                        </motion.h1>
                        <TextTypingEffect
                            text="Full Stack Developer"
                            className="text-3xl text-teal-400"
                        />
                        <motion.div
                            variants={itemVariants}
                            className="flex space-x-4 pt-6"
                        >
                            <a
                                href="https://www.linkedin.com/in/dominik-jasi%C5%84ski/"
                                target="_blank"
                                className="btn btn-outline btn-primary"
                            >
                                LinkedIn
                            </a>
                            <button
                                onClick={handleDownload}
                                className="btn btn-primary"
                            >
                                Download CV
                            </button>
                        </motion.div>
                    </motion.div>

                </div>
            </motion.div>

            <motion.section
                ref={aboutMe}
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                className="min-h-screen py-20 bg-gray-800/50"
            >
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center"
                    >
                        <div className="relative group">
                            <Image
                                src={profile}
                                alt="Dominik Jasinski portrait"
                                className="bg-gradient-to-b from-teal-500 rounded-xl shadow-2xl"
                                width={500}
                                priority
                            />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-6 p-4">
                        <h2 className="text-5xl font-bold mb-8">About Me</h2>
                        <div className="space-y-4 text-lg text-gray-300">
                            <p>
                                I am a dedicated <span className="text-teal-400">Full Stack Developer </span>
                                with 2 years of experience in creating scalable web applications.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="font-semibold text-xl mb-2">Technologies</h3>
                                    <ul className="list-disc list-inside text-gray-400">
                                        <li>PHP (Laravel, Symfony)</li>
                                        <li>JavaScript</li>
                                        <li>React, Vue.js</li>
                                        <li>TypeScript</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl mb-2">Skills</h3>
                                    <ul className="list-disc list-inside text-gray-400">
                                        <li>Teamwork</li>
                                        <li>Communication</li>
                                        <li>Adaptability</li>
                                        <li>Time Management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                ref={projects}
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                className="min-h-screen py-20 bg-gray-900/50"
            >
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl font-bold text-center mb-16"
                    >
                        My Projects
                    </motion.h2>

                    <motion.div
                        variants={itemVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                title: "E-commerce Store",
                                tech: "Laravel & Next.js",
                                link: "https://github.com/Dommmin/store"
                            },
                            {
                                title: "Real-time Chat App",
                                tech: "Laravel & Vue.js",
                                link: "https://github.com/Dommmin/chat-app"
                            },
                            {
                                title: "Restaurant Reservation",
                                tech: "Laravel & Vue.js",
                                link: "https://github.com/Dommmin/restaurant"
                            },
                            {
                                title: "Job Offers Platform",
                                tech: "Laravel & Vue.js",
                                link: "https://github.com/Dommmin/jobs"
                            },
                            {
                                title: "Symfony Blog",
                                tech: "Symfony API Platform & React.js",
                                link: "https://gitlab.com/Dommmin/blog/"
                            }
                        ].map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors group"
                            >
                                <h3 className="text-2xl font-semibold mb-2 group-hover:text-teal-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">{project.tech}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="text-blue-400 hover:underline"
                                >
                                    Source Code
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}