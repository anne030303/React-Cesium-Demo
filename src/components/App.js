import React, { useEffect } from "react";
import "./App.css";
import mainConfig from "./config.json";
import CesiumMap from './map/CesiumMap';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import CssBaseline from "@material-ui/core/CssBaseline";
import getFirebase from "../firebase";
import { useSelector, useDispatch } from 'react-redux';
import Signin from './helpers/Signin';
import Signup from './helpers/Signup';

function App() {
  const isSign = useSelector(state => state.isSign);
  const dispatch = useDispatch();
  const setCurrentUser = (authUser) => {
    dispatch({
      type: 'AUTH',
      authUser: authUser
    });
  };

  useEffect(() => {
    document.title = mainConfig.title;
  });

  useEffect(() => {
    const firebase = getFirebase();
    if (firebase) {
      firebase.auth().onAuthStateChanged(
        (authUser) => setCurrentUser(authUser)
      );
    }
  }, []);

  // const themes = (useSelector(state => state.checkedThemes));

  return (
    <div className='root'>
      <CssBaseline />
      <Header />
      <Sidebar />
      <CesiumMap />
      {(isSign.isSign && isSign.type === 'ISSIGNIN') && <Signin />}
      {(isSign.isSign && isSign.type === 'ISSIGNUP') && <Signup />}
    </div>
  );
}


export default App;