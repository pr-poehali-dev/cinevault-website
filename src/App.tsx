
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GenrePage from "./pages/GenrePage";
import SeriesPage from "./pages/SeriesPage";
import CollectionsPage from "./pages/CollectionsPage";
import CollectionPage from "./pages/CollectionPage";
import TrailersPage from "./pages/TrailersPage";
import ReviewsPage from "./pages/ReviewsPage";
import ReviewDetailPage from "./pages/ReviewDetailPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/genre/:slug" element={<GenrePage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/:slug" element={<CollectionPage />} />
          <Route path="/trailers" element={<TrailersPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/reviews/:slug" element={<ReviewDetailPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;