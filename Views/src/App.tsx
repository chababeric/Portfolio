import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage.tsx";

export default function App() {
    return (
        <BrowserRouter>
            {/*<Header />*/}
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/*<Route path="/software-engineer" element={<SoftwareEngineerPage />} />*/}
                {/*<Route path="/musician" element={<MusicianPage />} />*/}
            </Routes>
        </BrowserRouter>
    );
}
