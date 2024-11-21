import About from '@/components/landing-page/About';
import Footer from '@/components/landing-page/Footer';
import Hero from '@/components/landing-page/Hero';
import Navbar from '@/components/landing-page/Navbar';
import Statistics from '@/components/landing-page/Statistics';
import Team from '@/components/landing-page/Team';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Statistics />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
