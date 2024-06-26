import  { useState, useRef } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { StyledFooter } from './elements';
import PropTypes from 'prop-types';

const ChatFooter = ({ onSubmitMessage, toggle }) => {
  const inputMessage = useRef(null);
  const [message, setMessage] = useState('');

  const handleOnChange = (e) => setMessage(e.target.value);

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      onSubmitMessage(message);
      setMessage('');
    }
  };

  return (
    <StyledFooter toggle={toggle}>
      <input
        ref={inputMessage}
        value={message}
        onChange={handleOnChange}
        onKeyUp={handleKeyUp}
        type="text"
        placeholder="Digite o texto que deseja enviar e pressione enter..."
      />
      <button onClick={() => onSubmitMessage(message)}>
        <FaLocationArrow color="white" />
      </button>
    </StyledFooter>
  );
};

ChatFooter.propTypes = {
  onSubmitMessage: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};

export default ChatFooter;
