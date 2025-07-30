import React, { useState } from 'react';
import { FaTimes, FaPaperPlane, FaBirthdayCake } from 'react-icons/fa';

function Messenger({ currentUser, onClose }) {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Moominmamma',
      content: 'Happy Birthday! 🎂 I made your favorite cake!',
      timestamp: '10:30 AM',
      isReceived: true
    },
    {
      id: 2,
      sender: currentUser.name,
      content: 'Thank you so much! I can\'t wait to try it! 🎉',
      timestamp: '10:32 AM',
      isReceived: false
    },
    {
      id: 3,
      sender: 'Snorkmaiden',
      content: 'Happy Birthday! 🌸 Here\'s to another wonderful year!',
      timestamp: '10:35 AM',
      isReceived: true
    },
    {
      id: 4,
      sender: 'Little My',
      content: 'Happy Birthday! 🎈 Let\'s have an adventure today!',
      timestamp: '10:40 AM',
      isReceived: true
    },
    {
      id: 5,
      sender: currentUser.name,
      content: 'You\'re all so sweet! Thank you everyone! 💖',
      timestamp: '10:42 AM',
      isReceived: false
    },
    {
      id: 6,
      sender: 'Moominpappa',
      content: 'Happy Birthday! 📚 I\'ll tell you a special story tonight!',
      timestamp: '10:45 AM',
      isReceived: true
    },
    {
      id: 7,
      sender: 'Snufkin',
      content: 'Happy Birthday from the mountains! 🏔️ I\'ll be back soon with a special gift!',
      timestamp: '10:50 AM',
      isReceived: true
    },
    {
      id: 8,
      sender: 'Hemulen',
      content: 'Happy Birthday! 🎊 I\'ve organized a surprise party!',
      timestamp: '10:55 AM',
      isReceived: true
    }
  ]);

  const birthdayMessages = [
    "🎂 Happy Birthday! May your day be filled with joy! 🎉",
    "🎈 Happy Birthday! Wishing you all the best! 🌟",
    "🎊 Happy Birthday! Here's to another amazing year! ✨",
    "🎁 Happy Birthday! May all your dreams come true! 💫",
    "🎂 Happy Birthday! Sending you lots of love! 💖"
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: currentUser.name,
        content: messageInput,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isReceived: false
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  const sendBirthdayMessage = () => {
    const randomMessage = birthdayMessages[Math.floor(Math.random() * birthdayMessages.length)];
    const newMessage = {
      id: messages.length + 1,
      sender: 'Birthday Bot',
      content: randomMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isReceived: true
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="messenger">
      <div className="messenger__header">
        <h3>Moomin++ 💬</h3>
        <button className="messenger__close" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      
      <div className="messenger__messages">
        {messages.map(message => (
          <div key={message.id} className={`message ${message.isReceived ? 'message--received' : 'message--sent'}`}>
            <div className="message__content">
              <div style={{ fontWeight: '600', fontSize: '12px', marginBottom: '4px' }}>
                {message.sender}
              </div>
              {message.content}
              <div className="message__time">{message.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="messenger__input">
        <button 
          onClick={sendBirthdayMessage}
          style={{
            background: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          <FaBirthdayCake />
        </button>
        <form onSubmit={handleSendMessage} style={{ display: 'flex', flex: 1, gap: '10px' }}>
          <input 
            type="text" 
            placeholder="Type a message..." 
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button type="submit" className="messenger__send">
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Messenger; 