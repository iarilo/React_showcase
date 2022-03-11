import React from 'react';
import { FanHedar } from './layout/Header';
import { FanFooter } from './layout/Footer';
import { FanShop } from './layout/Main';
import { FanTest } from  './Test';



function App() {
  return (
    <div className="App">
      <FanHedar />
      <FanShop />
      <FanFooter />
      <FanTest />
    </div>
  );
}

export default App;
