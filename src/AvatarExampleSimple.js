import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5};

/**
 * Examples of `Avatar` using an image, [Font Icon](/#/components/font-icon), [SVG Icon](/#/components/svg-icon)
 * and "Letter" (string), with and without custom colors at the default size (`40dp`) and an alternate size (`30dp`).
 */
 class AvatarExampleSimple extends React.Component
{
  render(){


   if(this.props.name=='1'){
     return(
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png" />
      }
    >
    </ListItem>);
}
    else {
return(

    <ListItem name='2'
      disabled={true}
      leftAvatar={
        <Avatar src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=1280" />
      }
      >
      </ListItem>


);
}
}
}
export default AvatarExampleSimple;
