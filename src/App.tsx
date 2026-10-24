import { MessageContainer } from "./components/feedback/MessageContainer";
import { AuthProvider } from "./providers/AuthProvider";
import { PublicCollectionProvider } from "./providers/PublicCollectionProvider";
import { UserProvider } from "./providers/UsersProvider";
import { MainRouter } from "./routers/MainRouter";

function App() {
  return (
    <PublicCollectionProvider>
      <AuthProvider>
      <UserProvider>
      <MessageContainer>
          <MainRouter />
      </MessageContainer>
      </UserProvider>
      </AuthProvider>
    </PublicCollectionProvider>
  )
}

export default App;
