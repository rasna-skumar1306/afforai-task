import "./App.scss";
import Footer from "./components/Footer/Footer.component";
import Header from "./components/Header/Header.component";
import Hero from "./components/Hero/Hero.component";
import Testimonial from "./components/Testimonial/Testimonials.component";
import Marketing from "./components/marketing/Marketing.component";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Marketing />
      <Testimonial />
      {/* faq */}
      <Footer />
    </div>
  );
}

export default App;
