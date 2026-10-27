import { MessageContainer } from "./components/feedback/MessageContainer";
import { AuctioneerLotProvider } from "./providers/AuctioneerLotProvider";
import { AuthProvider } from "./providers/AuthProvider";
import { AwardsProvider } from "./providers/AwardsProvider";
import { BidsProvider } from "./providers/BidsProvider";
import { ProfileProvider } from "./providers/ProfileProvider";
import { PublicCollectionProvider } from "./providers/PublicCollectionProvider";
import { PublicLotsProvider } from "./providers/PublicLotProvider";
import { UserProvider } from "./providers/UsersProvider";
import { WalletProvider } from "./providers/WalletProvider";
import { MainRouter } from "./routers/MainRouter";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <ProfileProvider>
          <PublicLotsProvider>
          <PublicCollectionProvider>
            <AuctioneerLotProvider>
              <AwardsProvider>
              <WalletProvider>
              <BidsProvider>
              <MessageContainer>
                <MainRouter />
              </MessageContainer>
              </BidsProvider>
              </WalletProvider>
              </AwardsProvider>
            </AuctioneerLotProvider>
          </PublicCollectionProvider>
          </PublicLotsProvider>
        </ProfileProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;