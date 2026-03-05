import { useState, useCallback, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Narrative from "./pages/Narrative";
import NotFound from "./pages/NotFound";
import Approach from "./pages/Approach";
import Collaborators from "./pages/Collaborators";
import Products from "./pages/Products";
import LoadingScreen from "./components/LoadingScreen";
import { useSmoothScroll } from "./hooks/use-smooth-scroll";
import { useImageCache } from "./hooks/use-image-cache";

// Critical images to preload into memory cache
import eyeBg from "@/assets/eye-bg.jpg";
import approachEye from "@/assets/approach-eye.png";
import founderImg from "@/assets/founder.jpeg";
import cofounderImg from "@/assets/cofounder.png";
import developerImg from "@/assets/developer.jpg";
import prawinImg from "@/assets/prawin.png";
import niranjaniImg from "@/assets/niranjani.png";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/narrative" element={<Narrative />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/collaborators" element={<Collaborators />} />
        <Route path="/products" element={<Products />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  useSmoothScroll();

  // Preload hero image eagerly (above the fold), others during idle time
  useImageCache([eyeBg], { priority: true });
  useImageCache([approachEye, founderImg, cofounderImg, developerImg, prawinImg, niranjaniImg]);

  const [loading, setLoading] = useState(() => {
    if (window.location.pathname !== "/" || sessionStorage.getItem("loaded")) return false;
    return true;
  });
  const handleLoadingComplete = useCallback(() => {
    sessionStorage.setItem("loaded", "1");
    setLoading(false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence>
          {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
        </AnimatePresence>
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
