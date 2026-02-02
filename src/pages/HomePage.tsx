import eric from "../assets/eric.jpg"
import c from "../assets/c.svg"
import cpp from "../assets/cpp.svg"
import cs from "../assets/cs.svg"
import css3 from "../assets/css-3.svg"
import git from "../assets/git.svg"
import html5 from "../assets/html5.svg"
import java from "../assets/java.svg"
import javascript from "../assets/javascript.svg"
import laravel from "../assets/laravel.svg"
import mysql from "../assets/mysql.svg"
import nodejs from "../assets/nodejs.svg"
import postgresql from "../assets/postgresql.svg"
import python from "../assets/python.svg"
import react from "../assets/react.svg"
import react_native from "../assets/react_native.svg"
import tailwind from "../assets/tailwind.svg"
import typescript from "../assets/typescript.svg"
import vue from "../assets/vue.svg"

export default function HomePage() {
    const technologies = [
        { name: 'C', icon: c },
        { name: 'C++', icon: cpp },
        { name: 'C#', icon: cs },
        { name: 'Python', icon: python },
        { name: 'Java', icon: java },
        { name: 'JavaScript', icon: javascript },
        { name: 'TypeScript', icon: typescript },
        { name: 'Node.js', icon: nodejs },
        { name: 'HTML5', icon: html5 },
        { name: 'CSS3', icon: css3 },
        { name: 'Tailwind', icon: tailwind },
        { name: 'Laravel', icon: laravel },
        { name: 'Vue', icon: vue },
        { name: 'React', icon: react },
        { name: 'React Native', icon: react_native },
        { name: 'MySQL', icon: mysql },
        { name: 'PostgreSQL', icon: postgresql },
        { name: 'Git', icon: git },
    ];

    return (
        <div className="min-h-screen w-full px-4 py-8 bg-stone-900 text-white">
            <div className="max-w-4xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-5xl font-bold mb-4">Eric El-Chabab</h1>
                    <p className="text-2xl text-gray-300">Software Engineering Student & Musician</p>
                </header>

                <section className="mb-8">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <img src={eric} alt="Eric" className="rounded-xl w-64 h-80 object-cover flex-shrink-0"/>
                        <div className="flex-1">
                            <p className="text-xl leading-relaxed">
                                Hello, I’m Eric — a software engineering student at École de Technologie Supérieure (ÉTS) and a classically trained musician. 
                                My path combines precision, creativity, and discipline, and I bring that mindset into every project I build. 
                                I’m driven to design impactful digital experiences, master emerging technologies, and continuously push my limits as a developer. 
                                My goal is to grow into an engineer who not only writes great code, but builds products that leave a lasting impression. 
                                I’m always seeking ambitious challenges, meaningful collaborations, and opportunities to create work I’m proud of.
                            </p>

                            <div className="flex flex-wrap gap-6 mt-4">
                                <a
                                    href="/software"
                                    className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-stone-900 transition"
                                >
                                    Coding Projects
                                </a>

                                <a
                                    href="/music"
                                    className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-stone-900 transition"
                                >
                                    Music Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">Technologies</h2>
                    <div className="grid grid-cols-6 gap-4">
                        {technologies.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex items-center justify-center w-16 h-16 rounded-full bg-stone-800 hover:bg-stone-700 transition-colors p-3"
                                title={tech.name}
                            >
                                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain"/>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}