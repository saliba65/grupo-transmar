import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-32">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;