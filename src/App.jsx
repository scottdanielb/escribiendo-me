import Benefits from "./components/Benefits";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import FreeResources from "./components/FreeResources";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Quote />
      <Benefits />
      <About />
      <Services />
      <FreeResources />
      <ContactForm />
    </>
  );
};

export default App;
