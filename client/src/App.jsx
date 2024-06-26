// App.js
import './App.css';
import MyNavbar from './components/Navbar/Navbar';
import Sidebar from './components/SideBar/SideBar';
import ChatHead from './components/ChatHead/index';
import MessageList from './components/Message/messagelist';
import ChatInput from './components/Chat/ChatInput';

function App() {
  const userData = {
    image: 'https://example.com/user.jpg',
    name: 'John Doe',
  };

  const messages = [
    { message: 'Hello there!', sender: 'John Doe', time: '10:30 AM' },
    { message: 'Hi John!', sender: 'Jane Doe', time: '10:31 AM' },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-3/4">
        <MyNavbar />
        <div className="p-4">
          <ChatHead {...userData} />
          <MessageList messages={messages} />
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

export default App;
