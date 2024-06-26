// import React from 'react';
import Message from './message'; 

const MessageList = ({ messages }) => {
  if (!messages || !messages.length) {
    return <p>No messages yet.</p>; 
  }

  return (
    <div className="mb-4">
      {messages.map((message, index) => (
        <Message
          key={index}
          message={message.content} // Assuming "content" is the message content in your data structure
          sender={message.sender} // Assuming "sender" holds the sender information
          timestamp={message.timestamp} // Assuming "timestamp" holds the message timestamp
          isSender={message.isSender} // Assuming "isSender" indicates if the message is from the sender
        />
      ))}
    </div>
  );
};

export default MessageList;
