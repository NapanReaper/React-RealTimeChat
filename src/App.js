import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="b63a0db0-a3ed-4111-8d8c-0e708eef715f"
      userName="tuyen"
      userSecret="123"
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />} />
  );
}

export default App;
