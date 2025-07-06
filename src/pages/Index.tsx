
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Divisions from '@/components/Divisions';
import Showcase from '@/components/Showcase';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Divisions />
      <Showcase />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
