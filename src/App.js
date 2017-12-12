import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabsExampleIconText from './TabsExampleIconText';
import {lightBlue500 ,grey700 ,yellowA700,white, cyan500, brown900  } from 'material-ui/styles/colors';

import Papers from './Papers';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import ExampleComponent from './ExampleComponent';
import IconButtonExampleSize from './IconButtonExampleSize';
import AppBarExampleIcon from './AppBarExampleIcon';

const muiTheme = getMuiTheme({

  tabs: {
    backgroundColor: white,
     textColor: grey700,
     selectedTextColor: lightBlue500,
  },


});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>


        <Toolbar className="App" Id='1'/>
      
      <br/>
      <div >

     <style>{'body { background-color: #EEEEEE; }'}</style>
        <Papers/>
      </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
