import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
 const titleStyles = {
  title: {
    cursor: 'pointer'

  },
  color:{
    color: 'white'

  }
};
const AppBarExampleIcon = () => (
  <AppBar titleStyle={titleStyles.color}
    title="aadhaar"
  showMenuIconButton={false}/>
);

export default AppBarExampleIcon;
