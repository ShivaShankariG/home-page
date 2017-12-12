import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';
import RaisedButton1 from './RaisedButton1';
import './App.css';
const styles = {
  chip: {
    margin: 4,
    fontSize: '80px',
    width: "100%",

  },
  wrapper: {

    display: 'flex',
    flexWrap: 'wrap',
    JustifyContent: "center",
  },
  lineseparator: {
    height: '1px',
    background: '#717171',
    borderBottom: '1px solid #313030',

  },
};

function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleClick() {
  alert('You clicked the Chip.');
}

/**
 * Examples of Chips, using an image [Avatar](/#/components/font-icon), [Font Icon](/#/components/font-icon) Avatar,
 * [SVG Icon](/#/components/svg-icon) Avatar, "Letter" (string) Avatar, and with custom colors.
 *
 * Chips with the `onRequestDelete` property defined will display a delete icon.
 */
export default class ChipExampleSimple extends React.Component {

  render() {
    return (
      <div style={styles.wrapper}>
<Chip
          onRequestDelete={handleRequestDelete}
          onClick={handleClick}
          style={styles.chip}
        >
          <Avatar src="https://pbs.twimg.com/profile_images/823068184806912000/58QQY_ct_400x400.jpg" round="true" />
            <a href="www.google.com">Jitu Vaghani</a>
          <br/>
          <RaisedButton1 text="Follow"/>

        </Chip>
        <div style={styles.lineseparator}></div>

  <Chip
            onRequestDelete={handleRequestDelete}
            onClick={handleClick}
            style={styles.chip}
          >
            <Avatar src="https://pbs.twimg.com/profile_images/881236265391325184/WffFVMgb_400x400.jpg" round="true" />
              <a href="www.google.com">Priyanka Chopra</a>
              <br/>

              <RaisedButton1 text="Follow"/>


          </Chip>
          <Chip
                    onRequestDelete={handleRequestDelete}
                    onClick={handleClick}
                    style={styles.chip}
                  >
                    <Avatar src="https://pbs.twimg.com/profile_images/845323356220112897/su2ogtG7_400x400.jpg" round="true" />
                      <a href="www.google.com">Madhuri Dixit-Nene</a>
                      <br/>
                      <RaisedButton1 text="Follow"/>

                  </Chip>

                  <Chip
             onClick={handleClick}
             style={styles.chip}
           >
              <Avatar src="https://errorfixer.co/wp-content/uploads/2017/03/what-does-compose-gmail-mean.jpg" round="true" />
          <a href="www.gmail.com">   Find people you know<br/>
Import your contacts from Gmail</a>
           </Chip>



      </div>
    );
  }
}
