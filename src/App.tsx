import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';
import './fonts/UKNumberPlate.ttf';
import FetchApi from './components/api/fetchApi';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    notes?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([]);

  return (
    <div className='App'>
      <FetchApi />
    </div>
  );
}

export default App;
