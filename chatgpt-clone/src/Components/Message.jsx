import React from 'react';

const Message = ({ text, sender }) => {
  return (
    <div className={`message ${sender}`}>
      <div className="message-text">{text}</div>
    </div>
  );
};

export default Message;
