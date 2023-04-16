import React, { useState } from 'react';
import { IState as Props } from '../App';
import FetchApi from './api/fetchApi';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    notes: '',
    url: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        notes: input.notes,
      },
    ]);

    setInput({
      name: '',
      age: '',
      notes: '',
      url: '',
    });
  };

  return (
    <div className='AddToList'>
      <input
        type='text'
        placeholder='url'
        className='numberplate'
        value={input.url}
        onChange={handleChange}
        name='url'
      />
      <FetchApi />
    </div>
  );
};

export default AddToList;
