import { MessageContainer } from "./components/feedback/MessageContainer";
import { AuthProvider } from "./providers/AuthProvider";
import { ProfileProvider } from "./providers/ProfileProvider";
import { PublicCollectionProvider } from "./providers/PublicCollectionProvider";
import { UserProvider } from "./providers/UsersProvider";
import { MainRouter } from "./routers/MainRouter";

function App() {
  return (
    <PublicCollectionProvider>
      <AuthProvider>
      <UserProvider>
      <ProfileProvider>
      <MessageContainer>
          <MainRouter />
      </MessageContainer>
      </ProfileProvider>
      </UserProvider>
      </AuthProvider>
    </PublicCollectionProvider>
  )
}

export default App;
