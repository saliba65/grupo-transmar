import Header from '@/components/Header';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';

const HistoryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Timeline />
      </main>
      <Footer />
    </div>
  );
};

export default HistoryPage;