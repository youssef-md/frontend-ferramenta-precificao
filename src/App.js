import React from 'react';
import Button from './components/Button';

function App() {
  function sayHello() {
    console.log('oi');
  }

  return <Button onClick={sayHello} color="#000" />;
}

export default App;
