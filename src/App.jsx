import React from 'react';
import Navbar from './assets/Components/Navbar/Navbar';
import Home from './assets/Components/Home/Home';
import About from './assets/Components/About/About';
import Experience from './assets/Components/Experience/Experience';
import Projects from './assets/Components/Projects/Projects';
import Footer from './assets/Components/Footer/Footer';
import TextChange from './assets/Components/Projects/TextChange';
import './index.css'; // Ensure this is also correct

const App = () => {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
      <TextChange />
    </div>
  );
};

export default App;
