import { AntiqueHighlight } from "../../../components/ui/views/AntiqueHighlight";
import { AuctionCta } from "../../../components/ui/views/AuctionCta";
import { FeaturedLots } from "../../../components/ui/views/FeaturedLots";
import { WeeklyHighlights } from "../../../components/ui/views/WeeklyHighlights";

import { Footer } from "../../../components/ui/layout/Footer";
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
            <FeaturedLots />
            <AuctionCta />
            <AntiqueHighlight />
            <WeeklyHighlights />
            <Footer />
        </div>
    );
} 