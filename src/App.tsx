import { AntiqueHighlight } from "./components/ui/views/AntiqueHighlight";
import { AuctionCta } from "./components/ui/views/AuctionCta";
import { CategoryBar } from "./components/ui/views/CategoryBar";
import { FeaturedLots } from "./components/ui/views/FeaturedLots";
import { Footer } from "./components/ui/views/Footer";
import { Header } from "./components/ui/views/Header";
import { WeeklyHighlights } from "./components/ui/views/WeeklyHighlights";

function App() {

  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <CategoryBar />
      <FeaturedLots />
      <AuctionCta />
      <AntiqueHighlight />
      <WeeklyHighlights />
      <Footer />
    </div>
  )
}

export default App;
