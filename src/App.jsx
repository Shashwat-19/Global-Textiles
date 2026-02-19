import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <WhyChooseUs />
      <Products />
      <Gallery />
      <Contact />
    </Layout>
  )
}

export default App
