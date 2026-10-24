import { AntiqueHighlight } from "../../../components/ui/views/AntiqueHighlight";
import { AuctionCta } from "../../../components/ui/views/AuctionCta";
import { CategoryBar } from "../../../components/ui/views/CategoryBar";
import { FeaturedLots } from "../../../components/ui/views/FeaturedLots";
import { WeeklyHighlights } from "../../../components/ui/views/WeeklyHighlights";

import { Footer } from "../../../components/ui/layout/Footer";
import { Header } from "../../../components/ui/layout/Header";
import { usePublicCollection } from "../../../hooks/usePublicCollection";
import { LoadingScreen } from "../../../components/ui/shared/Loading/LoadingScreen";

export function Home() {
    const { statePublicCollection } = usePublicCollection();

    const {
        loadingCollection,
    } = statePublicCollection;

    if (loadingCollection) {
        return <LoadingScreen />;
    }

    return(
    <div className="min-h-screen bg-background text-text">
            <Header />
            <CategoryBar />
            <FeaturedLots />
            <AuctionCta />
            <AntiqueHighlight />
            <WeeklyHighlights />
            <Footer />
        </div>
    );
} 