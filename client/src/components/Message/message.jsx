// components/Message.js
import React from 'react';

const Message = ({ message, sender, time }) => {
  return (
    <div className="mb-2">
      <p><strong>{sender}</strong>: {message} <span className="text-gray-500 text-sm">{time}</span></p>
    </div>
  );
};

export default Message;
