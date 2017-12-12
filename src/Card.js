import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import './App.css';
import {lightBlue500 ,grey700 ,yellowA700,white, cyan500, brown900, blue500 } from 'material-ui/styles/colors';


const handle=<a href="www.google.com ">Shiva</a>

export default class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {

    return (
      <Card>
        <CardHeader
          title= {handle}
          subtitle="@TheOneShiva ‏"
          avatar="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=1280"/>

          <CardActions>
            <FlatButton label= "TWEETS 0"/>
              <FlatButton label= "FOLLOWING 89"/>
          </CardActions>

      </Card>
    );

}
}
