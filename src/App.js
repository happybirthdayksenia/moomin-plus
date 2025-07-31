import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Messenger from './components/Messenger';
import BirthdayCounter from './components/BirthdayCounter';

function App() {
  const [isMessengerOpen, setIsMessengerOpen] = useState(false);
  const [birthdayDate, setBirthdayDate] = useState('2024-08-02T00:00:00+07:00');
  const [currentUser] = useState({
    id: 1,
    name: 'Ksenia',
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
        <div className="app__content">
          <BirthdayCounter 
            birthdayDate={birthdayDate}
          />
        </div>
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
