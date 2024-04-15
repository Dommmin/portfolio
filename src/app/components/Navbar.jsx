import {useState} from 'react';
import Link from 'next/link';

export default function Navbar({ aboutMe, projects }) {
    const [isOpen, setIsOpen] = useState(false);

    const smoothScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <nav className="bg-gray-800">
            <div className="tooltip z-50" data-tip="hello">
                <button onClick={scrollToHome} className="fixed bottom-4 right-4 btn btn-circle btn-class">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5"/>
                    </svg>
                </button>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <Link className="btn btn-ghost normal-case text-2xl font-serif font-semibold"
                              href="/">Developer</Link>
                    </div>
                    <div className="hidden md:flex items-baseline space-x-4">
                        <p className="btn btn-sm" onClick={scrollToHome}>Home</p>
                        <p className="btn btn-sm" onClick={() => smoothScroll(aboutMe)}>About</p>
                        <p className="btn btn-sm" onClick={() => smoothScroll(projects)}>Projects</p>
                    </div>
                    <a href="mailto:domijas96@gmail.com" className="btn btn-outline btn-info btn-sma">Contact me</a>
                </div>
            </div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <button
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => home}
                        >
                            Home
                        </button>
                        <button
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => smoothScroll(aboutMe)}
                        >
                            About
                        </button>
                        <button
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => smoothScroll(projects)}
                        >
                            Projects
                        </button>
                    </div>
                </div>
        </nav>
);
}
