import { MessageContainer } from "./components/feedback/MessageContainer";
import { AuctioneerLotProvider } from "./providers/AuctioneerLotProvider";
import { AuthProvider } from "./providers/AuthProvider";
import { ProfileProvider } from "./providers/ProfileProvider";
import { PublicCollectionProvider } from "./providers/PublicCollectionProvider";
import { UserProvider } from "./providers/UsersProvider";
import { WalletProvider } from "./providers/WalletProvider";
import { MainRouter } from "./routers/MainRouter";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <ProfileProvider>
          <PublicCollectionProvider>
            <AuctioneerLotProvider>
              <WalletProvider>
              <MessageContainer>
                <MainRouter />
              </MessageContainer>
              </WalletProvider>
            </AuctioneerLotProvider>
          </PublicCollectionProvider>
        </ProfileProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;