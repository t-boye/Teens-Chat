// components/ChatInput.js
import { useState } from 'react';

const ChatInput = () => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      console.log(input);  // Here you would send the message
      setInput('');
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="border p-2 flex-grow"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
