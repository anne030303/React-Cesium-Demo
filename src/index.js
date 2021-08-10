import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';

const { EventEmitter } = require("fbemitter");

window.map = null;
window.sidebarOpen = null;
window.emitter = new EventEmitter();
window.popup = null;
window.isDrawingOrEditing = false;
window.isCoordinateToolOpen = false;
window.isMeasuring = false;

ReactDOM.render(<App />, document.getElementById("root"));