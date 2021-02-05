import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';
function App() {
  if (!localStorage.getItem('username')) return (<LoginForm />)

  return (
    <ChatEngine
      height="100vh"
      projectID="b63a0db0-a3ed-4111-8d8c-0e708eef715f"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />} />
  );
}

export default App;
