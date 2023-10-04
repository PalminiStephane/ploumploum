import { useState } from 'react';
import PropTypes from 'prop-types';

function Input({ name, inputRef, ...props }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      ref={inputRef} // je passe la ref ici, ça fait le lien avec le parent
      name={name}
      value={inputValue}
      onChange={handleChange}
      {...props} // je n'oublie pas de déverser toutes les autres props
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  inputRef: PropTypes.shape({
    current: PropTypes.any, // `useRef` retourne un objet avec une propriété `current`
  }).isRequired,
};

export default Input;
