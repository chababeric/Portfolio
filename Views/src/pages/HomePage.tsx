import eric from "../assets/eric.jpg"

export default function HomePage() {
    return (
        <div className="min-h-screen h-full w-full px-4 py-8 bg-stone-900 text-white">
            <div className="max-w-4xl">
                <header className="mb-16">
                    <h1 className="text-5xl font-bold mb-4">Eric El-Chabab</h1>
                    <p className="text-2xl text-gray-300">Software Engineer Student & Musician</p>
                </header>

                <section className="mb-16">
                    <img src={eric} alt="Eric" className="mb-4 rounded-xl w-96"/>
                    <p className="text-xl">Hello, I'm Eric. I'm a software engineer and musician living in San Francisco.</p>
                    <p className="text-xl">I enjoy building things with JavaScript and React.</p>
                    <p className="text-xl">Check out my <a href="https://github.com/eric-bachman" className="underline">GitHub</a> for more projects.</p>
                </section>
            </div>
        </div>
    );
}