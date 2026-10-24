import { MessageContainer } from "./components/feedback/MessageContainer";
import { PublicCollectionProvider } from "./providers/PublicCollectionProvider";
import { MainRouter } from "./routers/MainRouter";

function App() {
  return (
    <PublicCollectionProvider>
      <MessageContainer>
          <MainRouter />
      </MessageContainer>
    </PublicCollectionProvider>
  )
}

export default App;
