import React, { useState, useEffect } from 'react';
import './App.css';
import { opisContext } from './context/opisContext';
import Table from './table/table';
import Tools from './tools/tools';

const App = () => {

  const [tableDescription, settableDescription] = useState([]);

  useEffect(() => {
    fetch(`https://sitar05.vot.pl/opis.json`)
      // fetch(`http://localhost:3000/view`)
      .then((response) => response.json())
      .then((response) => settableDescription(response.view))
    // .then((response) => settableDescription(response))
  }, []);


  return (
    <>
      <opisContext.Provider value={tableDescription}>
        <Tools />
        <Table />
      </opisContext.Provider>
    </>
  );
}

export default App;
