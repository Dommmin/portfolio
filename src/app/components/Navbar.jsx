import Link from 'next/link';

export default function Navbar({ aboutMe, projects }) {

    const smoothScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <nav className="flex max-w-8xl mx-auto w-full justify-between items-center mx-auto p-4">
                <div className="hidden md:block">
                    <Link className="btn btn-ghost normal-case text-2xl font-serif font-semibold"
                          href="/">Home</Link>
                </div>
                <div className="flex items-baseline space-x-4">
                    <p className="btn btn-sm" onClick={() => smoothScroll(aboutMe)}>About Me</p>
                    <p className="btn btn-sm" onClick={() => smoothScroll(projects)}>My Projects</p>
                </div>
                <a href="#" className="btn btn-sm btn-accent disabled" title="Temporary disabled due to server issues">My Blog</a>
            </nav>
            <div className="z-50">
                <button onClick={scrollToHome} className="fixed bottom-4 right-4 btn btn-circle btn-class">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5"/>
                    </svg>
                </button>
            </div>
        </>
    );
}
