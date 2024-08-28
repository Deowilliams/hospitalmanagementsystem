import React, { useState } from 'react';
import axios from 'axios';
import './Chatbox.css';

const API_URL = 'https://66ba05ecfa763ff550fa84f5.mockapi.io/medtrack/rep/response'; 

async function fetchMedicalResponse(userMessage) {
  try {
    const response = await axios.get(API_URL);
    
    
    const responseData = response.data.find(item => 
      item.question.toLowerCase() === userMessage.toLowerCase()
    );
    
    return responseData ? responseData.definition : 'Sorry, I do not have an answer for that.';
  } catch (error) {
    console.error('Fetch error:', error);
    return 'Sorry, there was an error. Please try again later.';
  }
}

function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (inputValue.trim()) {
      // Add user message
      const newMessages = [...messages, { sender: 'user', text: inputValue }];

      // Get API response
      const response = await fetchMedicalResponse(inputValue);

      // Add API response
      setMessages([...newMessages, { sender: 'api', text: response }]);
      
      // Clear input field
      setInputValue('');
    }
  };

  return (
    <div className="chatbox-container">
      <button className="chatbox-button" onClick={toggleChatbox}>
        <i className="fa-solid fa-message"></i>
      </button>
      {isOpen && (
        <div className="chatbox-window">
          <div className="chatbox-header">
            <h1>Chat<span style={{ color: "White" }}>Box</span></h1>
            <button className="close-button" onClick={toggleChatbox}>X</button>
          </div>
          <div className="chatbox-body">
            <div className="messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>
          </div>
          <div className="chatbox-footer">
            <input
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbox;
