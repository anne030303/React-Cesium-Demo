import React, { Component } from "react";
import "./App.css";
import mainConfig from "./config.json";
import packageJson from "../package.json";
// import LoadingScreen from "./helpers/LoadingScreen";
import CesiumMap from './map/CesiumMap';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import CssBaseline from "@material-ui/core/CssBaseline";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapControls: {},
      openSidebar: false,
      selectTab: 0
    };

    this.handleSidebar = this.handleSidebar.bind(this);
  };

  componentWillUnmount() {
    document.title = mainConfig.title;
    window.app = packageJson.name;
    window.version = packageJson.version;
    this.setControlPreferences();
  }
  setControlPreferences() {
    const localMapControls = mainConfig.controls;
    this.setState({ mapControls: localMapControls });
    //可加入記憶map的設定，儲存在window.localStorage中，若無設定再讀取config的設定
  }


  handleSidebar(evt) {
    if (typeof evt == "boolean") {
      this.setState({ openSidebar: !evt });
    } else {
      if (!this.state.openSidebar) {
        this.setState({ openSidebar: true });
        this.setState({ selectTab: evt });
      } else if (evt === this.state.selectTab) {
        this.setState({ selectTab: 0 });
      } else {
        this.setState({ selectTab: evt });
      }
    }

  };


  render() {
    return (
      <div className='root'>
        <CssBaseline />
        <Header openSidebar={this.state.openSidebar} handleSidebar={this.handleSidebar} />
        <Sidebar
          openSidebar={this.state.openSidebar}
          selectTab={this.state.selectTab}
          handleSidebar={this.handleSidebar} />
        <CesiumMap />
      </div>
    );
  }
}

export default App;