import './App.css';
import NavBar from './static_tsx/tsx/navbar';
import Footer from './static_tsx/tsx/footer';
import AboutMe from './Personal_Info/about_me';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Testimonials from './Personal_Info/testimonials';
import Portfolio from './Personal_Info/portfolio';
import Experiences from './Personal_Info/experiences';
import ContactMe from './Personal_Info/contact_me';
function App() {
  return (
 
    <div className="App text-white">
      <div className='main bg'>
          <BrowserRouter>
              <NavBar />
            <Routes>
              <Route path="/" element={ <AboutMe/>  }/>
              <Route path="/testimonials" element={ < Testimonials />  }/>
              <Route path="/Portfolio" element={ < Portfolio />  }/>
              <Route path="/experiences" element={ < Experiences />  }/>
              <Route path="/contact" element={ < ContactMe />  }/>
            </Routes>
          </BrowserRouter>
          <div id="stars"></div>
          <div id="stars"></div>
          <div id="stars"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
