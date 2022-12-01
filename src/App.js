import './App.css';
import React,{useState} from 'react';
import MainRouter from './routes/MainRouter';
import useWindowDimensions from './hooks/useWindowDimensions'
function App(props) {
  const {height,width} = useWindowDimensions();

  return ( 
    <div>
      <MainRouter />
    </div>
   );
}
      {/* <MainRouter /> */}

export default App;

