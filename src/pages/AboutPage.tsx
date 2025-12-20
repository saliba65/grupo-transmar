import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-32">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;