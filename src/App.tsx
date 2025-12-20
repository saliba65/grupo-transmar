import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import OurServicesPage from "./pages/OurServicesPage";
import HistoryPage from "./pages/HistoryPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<OurServicesPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
