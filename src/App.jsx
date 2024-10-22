import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroComponent from './components/MainComponents/HeroComponent/HeroComponent'
import NavigationBarComponent from './components/MainComponents/NavigationBarComponent/NavigationBarComponent'
import ViewProjectComponent from './components/MainComponents/ViewProjectComponent/ViewProjectComponent'
import PortfolioComponent from './components/MainComponents/PortfolioComponent/PortfolioComponent'
import FooterComponent from './components/MainComponents/FooterComponent/FooterComponent'
import AboutComponent from './components/MainComponents/AboutComponent/AboutComponent'
import ContactFormComponent from './components/MainComponents/ContactFormComponent/ContactFormComponent'
// import Scroll from './components/SupportComponents/SmoothScrollComponent/smoothScroll'

function App() {
    return (
        <div id='scroll'>
            <Router>
                <NavigationBarComponent />
                {/* <Scroll /> */}
                <section id='content'>
                    <Routes>
                        <Route path='/' element={<HeroComponent />} />
                        <Route
                            path='/portfolio'
                            element={<PortfolioComponent />}
                        />
                        <Route path='/about' element={<AboutComponent />} />
                        <Route
                            path='/contact'
                            element={<ContactFormComponent />}
                        />
                        <Route
                            path='/viewproject/:id'
                            element={<ViewProjectComponent />}
                        />
                    </Routes>
                </section>
            </Router>
            <FooterComponent />
        </div>
    )
}

export default App
