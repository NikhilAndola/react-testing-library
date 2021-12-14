import './App.css';
import React from 'react';
import FindByAsync from './FindByAsync';
import AxiosCall from './AxiosCall';
// import AppTwo from './AppTwo';


const title = "Hello React test";

function App() {
  return (
    <div className="App">
      {title}
      {/* <AppTwo/> */}
      <FindByAsync/>
      <AxiosCall/>
    </div>
  );
}

export default App;
