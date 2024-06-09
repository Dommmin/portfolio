'use client';

import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import profile from "../../public/profile.png"
import main from "../../public/main.png"
import blog from "../../public/Blog.png"
import chat from "../../public/Chat.png"
import ecommerce from "../../public/Ecommerce.png"
import TextEffect from "@/app/components/TextEffect";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const aboutMe = useRef(null);
    const projects = useRef(null);

    const handleDownload = () => {
        const cv = '/cv.pdf';

        const a = document.createElement('a');
        a.href = cv;
        a.download = 'cv.pdf';

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
      <>
        <Navbar aboutMe={aboutMe} projects={projects} />
          <div className="min-h-[calc(100vh-80px)] px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:justify-items-start items-center space-x-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <div className={`opacity-0 transition-opacity duration-1000 ease-out ${
                      isVisible ? 'opacity-100' : ''
                  }`}>
                      <p className="text-3xl font-semibold text-white">Hi There!</p>
                      <p className="font-bold text-6xl text-white">I&apos;m <span className="text-info">Dominik Jasiński</span></p>
                      <p>&nbsp;<TextEffect fullText="Fullstack Developer."/></p>
                  </div>
                  <div className="">
                      <Image className="rounded-b-full" alt="profile" src={main} width={400} objectFit="cover" />
                  </div>
              </div>
          </div>
          <div className="min-h-screen bg-gray-900" ref={aboutMe}>
              <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center space-x-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <div
                      className="bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-[500px] md:w-[500px]">
                      <Image loading="eager" alt="profile" src={profile} layout="fill" objectFit="cover"/>
                  </div>
                  <div className="mt-20">
                      <p className="text-5xl font-bold text-white">I make <span
                          className="text-info">Web Apps</span>
                      </p>
                      <ol className="mt-10 space-y-2 text-xl">
                          <li><span className="font-bold">Experience:</span> 2 years</li>
                          <li><span className="font-bold">Technology:</span> PHP, Javascript</li>
                          <li><span className="font-bold">Frameworks:</span> Laravel, Symfony, React, Vue</li>
                          <li><span className="font-bold">Languages:</span> Polish - Native, English - B1</li>
                          <li><span className="font-bold">Soft skills:</span> Teamwork, Communication,
                              Adaptability, Time management
                          </li>
                      </ol>
                  </div>
                  <div className="mt-5 lg:mt-10 mb-5 space-x-4">
                      <a href="https://www.linkedin.com/in/dominik-jasi%C5%84ski/" target="_blank" className="btn btn-info btn-outline px-8">Hire me</a>
                      <button onClick={handleDownload} className="btn btn-info px-8">Download CV</button>
                  </div>
              </div>
          </div>
          <div className="min-h-screen bg-gray-800" ref={projects}>
              <h2 className="font-bold text-7xl text-center text-white pt-20">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mx-auto max-w-7xl pt-10">
                  <div className="card bg-gray-900 shadow-xl">
                      <figure className="mb-12">
                          <Image src={chat} alt="Chat"/>
                      </figure>
                      <div className="card-body">
                          <h2 className="card-title flex text-center justify-center items-center mb-4">Laravel, Vue.js <br /> Chat App</h2>
                          <p className="text-center text-xs">In development...</p>
                          <div className="flex justify-between">
                              <Link
                                  href="https://github.com/Dommmin/chat-app"
                                  target="_blank"
                                  className="btn btn-info btn-outline"
                              >Source Code</Link>
                              <Link
                                  href="https://dommin.smallhost.pl/"
                                  target="_blank"
                                  className="btn btn-info"
                              >Live Demo</Link>
                          </div>
                      </div>
                  </div>
                  <div className="card bg-gray-900 shadow-xl">
                      <figure className="mb-2">
                          <Image src={ecommerce} alt="Ecommerce"/>
                      </figure>
                      <div className="card-body">
                          <h2 className="card-title flex justify-center items-center text-center mb-4">Laravel, Next.js <br/>
                              Ecommerce</h2>
                          <p className="text-center text-xs">In progress...</p>
                          <div className="flex justify-between">
                              <Link
                                  href="https://github.com/Dommmin/store"
                                  target="_blank"
                                  className="btn btn-info btn-outline"
                              >Source Code</Link>
                              <Link
                                  href="https://159.89.214.17/"
                                  target="_blank"
                                  className="btn btn-info"
                              >Live Demo</Link>
                          </div>
                      </div>
                  </div>
                  <div className="card bg-gray-900 shadow-xl">
                      <figure className="mb-12">
                          <Image className="p-8"
                               src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"}
                               width={200}
                               height={200}
                               alt="Chat"/>
                      </figure>
                      <div className="card-body">
                          <h2 className="card-title flex justify-center items-center text-center mb-4">Laravel <br/> Voting
                          </h2>
                          <p className="text-center text-xs">API only</p>
                          <div className="flex justify-between">
                              <Link href="https://gitlab.com/Dommmin/voting" target="_blank"
                                    className="btn btn-info btn-outline">Source Code</Link>
                              <button className="btn btn-info" disabled>Live Demo</button>
                          </div>
                      </div>
                  </div>
                  <div className="card bg-gray-900 shadow-xl">
                      <figure className="mb-20">
                          <Image src={blog} alt="Blog"/>
                      </figure>
                      <div className="card-body">
                          <h2 className="card-title flex justify-center items-center">Symfony Blog</h2>
                          <p className="text-center text-xs">In progress...</p>
                          <div className="flex justify-between">
                              <Link href="https://gitlab.com/Dommmin/blog" target="_blank"
                                    className="btn btn-info btn-outline">Source Code</Link>
                              <Link href="#" className="btn btn-info" disabled>Live Demo</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
}
