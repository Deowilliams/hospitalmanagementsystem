import React, { useState, useEffect } from 'react';
import './Dmessaging.css';

const Dmessaging = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    useEffect(() => {
      // Fetch messages from API
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => setMessages(data));
    }, []);
  
    const handleSendMessage = () => {
      // Send new message (add to list and backend in a real scenario)
      setMessages([...messages, { body: newMessage }]);
      setNewMessage('');
    };
  
    return (
      <div className="page messaging">
        <h2>Messaging</h2>
        <div className="new-message">
          <textarea
            placeholder="Type your message here..."
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
        <div className="message-list">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <p>{message.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default Dmessaging
