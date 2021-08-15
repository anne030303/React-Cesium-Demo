import React, { useEffect } from "react";
import "./App.css";
import mainConfig from "./config.json";
import CesiumMap from './map/CesiumMap';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import CssBaseline from "@material-ui/core/CssBaseline";
// import { useSelector, useDispatch } from 'react-redux';

function App() {

  useEffect(() => {
    document.title = mainConfig.title;
  });

  // const themes = (useSelector(state => state.checkedThemes));

  return (
    <div className='root'>
      <CssBaseline />
      <Header />
      <Sidebar />
      <CesiumMap />
    </div>
  );
}


export default App;