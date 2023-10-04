import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { playerAdd } from 'src/actions';

import './style.scss';

function Form() {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length) {
      console.log('Je veux ajouter un joueur');
      dispatch(playerAdd(inputValue));
      setInputValue('');
    }
  };

  const inputElement = useRef(null);

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        ref={inputElement}
        type="text"
        className="form-item"
        placeholder="Ajouter un joueur"
        value={inputValue}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="form-item"
      >
        Ajouter
      </button>
    </form>
  );
}

export default Form;
