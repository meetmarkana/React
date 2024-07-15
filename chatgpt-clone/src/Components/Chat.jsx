// src/components/Chat.js
import React, { useState } from 'react';
import axios from 'axios';
import Message from './Message';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
          prompt: input,
          max_tokens: 150,
          n: 1,
          stop: null,
          temperature: 0.5,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      console.log('API Response:', response.data);

      const botMessage = { text: response.data.choices[0].text.trim(), sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);

      const errorMessage = { text: 'Error: Unable to get a response from the API.', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} sender={message.sender} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
