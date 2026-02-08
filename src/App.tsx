import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import HowWeWork from "./pages/HowWeWork";
import WhyChooseUs from "./pages/WhyChooseUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BisCrs from "./pages/services/BisCrs";
import IsiCertification from "./pages/services/IsiCertification";
import WpcEta from "./pages/services/WpcEta";
import TecMtcte from "./pages/services/TecMtcte";
import EprCertification from "./pages/services/EprCertification";
import CeCbCertification from "./pages/services/CeCbCertification";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/bis-crs" element={<BisCrs />} />
          <Route path="/services/isi" element={<IsiCertification />} />
          <Route path="/services/wpc-eta" element={<WpcEta />} />
          <Route path="/services/tec-mtcte" element={<TecMtcte />} />
          <Route path="/services/epr" element={<EprCertification />} />
          <Route path="/services/ce-cb" element={<CeCbCertification />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
