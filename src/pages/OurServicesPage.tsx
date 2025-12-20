import Header from '@/components/Header';
import OurServices from '@/components/OurServices';
import Footer from '@/components/Footer';

const OurServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <OurServices />
      </main>
      <Footer />
    </div>
  );
};

export default OurServicesPage;