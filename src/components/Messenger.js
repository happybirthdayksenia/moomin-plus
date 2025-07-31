import React, {useEffect, useState} from 'react';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';

function Messenger({ currentUser, onClose }) {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("https://message-service-lp4m.onrender.com/api/messages");
        const data = await res.json();
        setMessages(data); // just overwrite the whole list
      } catch (err) {
        console.error("Failed to fetch messages", err);
      }
    };

    fetchMessages(); // initial load
    const interval = setInterval(fetchMessages, 3000); // every 3 sec

    return () => clearInterval(interval); // clean up on unmount
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: currentUser.name,
        content: messageInput,
        timestamp: new Date().toISOString(), // Use ISO 8601 format
        isReceived: false
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
      sendMessage(newMessage);
    }
  };

  const sendMessage = async (message) => {
    try {
      const res = await fetch('https://message-service-lp4m.onrender.com/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
      });

      if (!res.ok) {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }

  const formatTimestamp = (timestamp) => {
    try {
      const date = new Date(timestamp+'Z');

      const datePart = date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit'
      });
      const timePart = date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit'
      });

      return `${datePart} ${timePart}`;
    } catch (error) {
      console.error('Error parsing timestamp:', error);
      return 'Invalid time';
    }
  };

  return (
    <div className="messenger">
      <div className="messenger__header">
        <h3>Moomin++</h3>
        <button className="messenger__close" onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      <div className="messenger__messages">
        {messages.map(message => {
          return (
              <div key={message.id}
                   className={`message ${message.sender !== currentUser.name ? 'message--received' : 'message--sent'}`}>
                <div className="message__content">
                  <div style={{fontWeight: '600', fontSize: '12px', marginBottom: '4px'}}>
                    {message.sender}
                  </div>
                  {message.content}
                  <div className="message__time">{formatTimestamp(message.timestamp)}</div>
                </div>
              </div>
          );
        })}
      </div>

      <div className="messenger__input">
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