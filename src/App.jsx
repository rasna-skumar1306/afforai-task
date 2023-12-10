import "./App.css";
import Footer from "./components/Footer/Footer.component";
import Header from "./components/Header/Header.component";
import Hero from "./components/Hero/Hero.component";
import Marketing from "./components/marketing/Marketing.component";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Marketing />
      {/* testimonial */}
      {/* faq */}
      <Footer />
    </>
  );
}

export default App;
