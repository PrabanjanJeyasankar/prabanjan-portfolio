import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroComponent from './components/HeroComponent/HeroComponent'
import NavigationBarComponent from './components/NavigationBarComponent/NavigationBarComponent'
import ViewProjectComponent from './components/ViewProjectComponent/ViewProjectComponent'
import PortfolioComponent from './components/PortfolioComponent/PortfolioComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import AboutComponent from './components/AboutComponent/AboutComponent'

function App() {
    return (
        <div>
            <Router>
                <NavigationBarComponent />
                <Routes>
                    <Route path='/' element={<HeroComponent />} />
                    <Route path='/portfolio' element={<PortfolioComponent />} />
                    <Route path='/about' element={<AboutComponent />} />
                    <Route
                        path='/viewproject/:id'
                        element={<ViewProjectComponent />}
                    />
                </Routes>
            </Router>
            <FooterComponent />
        </div>
    )
}

export default App
