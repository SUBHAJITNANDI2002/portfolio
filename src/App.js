
import './App.scss';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Intro from './components/Intro';
import Resume from './components/developementHistory/Resume';
import Employement from './components/developementHistory/Employement';
import Skills from './components/Skills';
import MyProjects from './components/MyProjects';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main>
     <Navigation/>
     <Banner/>
     <Intro/>
     <hr />
     <Resume/>
     {/* <Employement/> */}
     <Skills/>
     <MyProjects/>
     {/* <Testimonial/> */}
     <Contact/>
     <Footer/>
      
    </main>
  );
}

export default App;
