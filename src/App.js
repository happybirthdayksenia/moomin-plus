import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Messenger from './components/Messenger';

function App() {
  const [isMessengerOpen, setIsMessengerOpen] = useState(false);
  const [currentUser] = useState({
    id: 1,
    name: 'Moomin User',
    avatar: 'https://via.placeholder.com/40x40/87CEEB/000000?text=M',
    isOnline: true
  });

  const toggleMessenger = () => {
    setIsMessengerOpen(!isMessengerOpen);
  };

  return (
    <div className="app">
      <Header currentUser={currentUser} onMessengerClick={toggleMessenger} />
      <div className="app__body">
        <Sidebar />
        <Feed currentUser={currentUser} />
        {isMessengerOpen && (
          <Messenger 
            currentUser={currentUser} 
            onClose={() => setIsMessengerOpen(false)} 
          />
        )}
      </div>
    </div>
  );
}

export default App;
