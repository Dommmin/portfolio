import Link from 'next/link';

export default function Navbar({ aboutRef, projectsRef }) {

    const smoothScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <nav className="flex max-w-8xl mx-auto w-full justify-between items-center p-4" role="navigation" aria-label="Main navigation">
                <div className="hidden md:block">
                    <Link className="btn btn-ghost normal-case text-2xl font-serif font-semibold"
                          href="/"
                          aria-label="Go to home page">Home</Link>
                </div>
                <div className="flex items-baseline space-x-4">
                    <button
                        className="btn btn-sm"
                        onClick={() => smoothScroll(aboutRef)}
                        aria-label="Scroll to About Me section">About Me</button>
                    <button
                        className="btn btn-sm"
                        onClick={() => smoothScroll(projectsRef)}
                        aria-label="Scroll to My Projects section">My Projects</button>
                </div>
                <a href="https://dominik-dev.pl"
                   className="btn btn-sm btn-accent"
                   title="My Blog"
                   aria-label="Visit my blog">Blog</a>
            </nav>
            <div className="z-50">
                <button
                    onClick={scrollToHome}
                    className="fixed bottom-4 right-4 btn btn-circle btn-class"
                    aria-label="Scroll to top of page">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         strokeWidth="1.5"
                         stroke="currentColor"
                         className="w-6 h-6"
                         aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5"/>
                    </svg>
                </button>
            </div>
        </>
    );
}
