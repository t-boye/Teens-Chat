// Sidebar.js
// import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl mb-4">Chat App</h2>
      <ul>
        <li className="mb-2"><a href="/home">Home</a></li>
        <li className="mb-2"><a href="/profile">Profile</a></li>
        <li className="mb-2"><a href="/settings">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
