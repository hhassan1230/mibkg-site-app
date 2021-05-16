import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import Gallery from './components/gallery/Gallery';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
        
        <main>
           <Header/>
           <Gallery/>
           <About/>
           <Contact/>
           <Footer/>
        </main>

    </div>
  );
}

export default App;
