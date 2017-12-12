import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TabsExampleIconText from './TabsExampleIconText';
import TextFieldExampleSimple from './TextFieldExampleSimple';
import AvatarExampleSimple from './AvatarExampleSimple';
import RaisedButton1 from './RaisedButton1';
import Avatar from 'react-avatar';
import {Tabs, Tab} from 'material-ui/Tabs';

import {lightBlue500 ,grey700 ,yellowA700,white, cyan500, brown900, blue500 } from 'material-ui/styles/colors';


export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }


  render() {
    if(this.props.Id=='1')
    {
    return (
      <Toolbar  style={{backgroundColor: 'white' , width: '100%' , height:'50%'}} >
        <ToolbarGroup firstChild={true} >
          <TabsExampleIconText context="main"/>
        </ToolbarGroup>
        <br/>
        <ToolbarGroup>
            <Avatar  size="40" src="http://www.agnc.org.uk/media/1027568/twitterbird.png" round= "true" />
        </ToolbarGroup>

        <ToolbarGroup>
          <TextFieldExampleSimple hinttext="aadhaar" />
        </ToolbarGroup>
        <ToolbarGroup>
              <Avatar  size="40" src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=1280" round="true"/>
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton1 text="Tweet"/>
        </ToolbarGroup>

      </Toolbar>
    );
  }
  else if(this.props.Id=='2')
  {
    return (
      <Toolbar >
        <ToolbarGroup firstChild={true}>
          <Avatar  size="40" src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=1280" round= "true" />
        </ToolbarGroup>
        <br/>

        <ToolbarGroup>
          <TextFieldExampleSimple hinttext="What's happening?"/>
        </ToolbarGroup>


      </Toolbar>
    );
  }
  else if(this.props.Id=='search')
  {
    return(
      <Toolbar>
      <ToolbarGroup firstChild={true} >
        <TabsExampleIconText context="second"/>
      </ToolbarGroup>
      </Toolbar>
    );
  }
  }
}
