import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import './App.css';
import {lightBlue500 ,grey700 ,yellowA700,white, cyan500, brown900, blue500 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import MailIcon from 'material-ui/svg-icons/communication/mail-outline';



class TabsExampleIconText extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  render(){
      if(this.props.context=="main"){
    return(
  <Tabs tabItemContainerStyle={{width: '400px'}}  inkBarStyle ={{background: lightBlue500 }} className="Tabss">>
    <Tab
  icon={<ActionHome/>}
      label="Home"
    />
    <Tab
    icon={<NotificationsIcon/>}
      label="Notifications"
    />
    <Tab
      icon={<MailIcon/>}
      label="Messages"
    />
  </Tabs>
);
}

else if(this.props.context=="second"){

  return(
<Tabs tabItemContainerStyle={{width: '1000px'}}  inkBarStyle ={{background: lightBlue500 }} className="Tabss">>
  <Tab

    label="Top"
  />
  <Tab

    label="Latest"
  />
  <Tab
      label="People"
  />
  <Tab
      label="Photos"
  />
  <Tab
      label="Videos"
  />
  <Tab
      label="News"
  />
  <Tab
      label="Broadcasts"
  />



</Tabs>
);
}
}
}

export default TabsExampleIconText;
