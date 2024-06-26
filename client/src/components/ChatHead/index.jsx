// import React from 'react';
import PropTypes from 'prop-types';

const ChatHead = ({ image, name, message, toggle, children }) => {
  return (
    <div
      className={`flex items-center p-4 bg-gray-100 rounded-lg shadow-md ${
        toggle ? 'h-full' : 'h-20'
      }`}
    >
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        {message && <p className="text-gray-600">{message}</p>}
        {children}
      </div>
    </div>
  );
};

ChatHead.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string,
  toggle: PropTypes.bool,
  children: PropTypes.node,
};

ChatHead.defaultProps = {
  message: '',
  toggle: false,
  children: null,
};

export default ChatHead;
