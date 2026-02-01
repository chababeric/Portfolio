import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-purple-950 text-white shadow-lg">
            <nav className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold hover:text-purple-300 transition-colors no-underline text-white">
                        EE
                    </Link>

                    <ul className="flex gap-8 list-none m-0">
                        <li>
                            <Link
                                to="/"
                                className="text-lg hover:text-purple-300 transition-colors no-underline text-white"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/engineer"
                                className="text-lg hover:text-purple-300 transition-colors no-underline text-white"
                            >
                                Software Engineering
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/musician"
                                className="text-lg hover:text-purple-300 transition-colors no-underline text-white"
                            >
                                Music
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
