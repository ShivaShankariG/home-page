import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Avatar from 'react-avatar';
import IconButtonExampleSize from './IconButtonExampleSize';
import FavIcon from 'material-ui/svg-icons/action/favorite-border';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import MailIcon from 'material-ui/svg-icons/communication/mail-outline';
import Retweet from 'material-ui/svg-icons/av/repeat';
import Reply from 'material-ui/svg-icons/content/reply';
import './App.css';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';

import {lightBlue500 ,grey700 ,yellowA700,white, cyan500, brown900, blue500 } from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const handler=<a href="www.google.com">Sonakshi Sinha</a>
const colo="color: blue";

export default class CardExampleControlled extends React.Component {


  constructor(props) {
    super(props);

  }




  render() {
    return (
      <Card>
      <IconMenu
        iconButtonElement={
          <IconButton touch={true} tooltip="More"
          tooltipPosition="top-center">
            <NavigationExpandMoreIcon  />
          </IconButton>
        }
      >
        <MenuItem  onMouseEnter={(e) => e.target.style.color = lightBlue500}
        onMouseLeave={(e) => e.target.style.color = 'black'}
 primaryText="Copy link to tweet"  />
        <MenuItem  onMouseEnter={(e) => e.target.style.color = lightBlue500}
        onMouseLeave={(e) => e.target.style.color = 'black'} primaryText="Embedd tweet" />
      </IconMenu>
        <CardHeader
          title={handler}
          subtitle="@sonakshisinha. 6m"
          avatar="https://pbs.twimg.com/profile_images/933473932002209792/jqxekbtf_400x400.jpg"
        />
      <CardText>
          <p>He loved my outfit so much he tried to copy it 😂😂😂 who wore it better?!?!? Ahahahahahahahahaha <a href="www.google.com" style={{color:lightBlue500 }}>@beingsalmankhan</a> <a href="www.google.com" style={{color:lightBlue500 }}> #fashionfaceoff</a><a href="www.google.com" style={{color:lightBlue500 }}> #twinning</a>
</p>
          <img src="https://pbs.twimg.com/media/DQq_fXvUEAAR2ya.jpg" width= '50%' height='50%' />

      </CardText>
      <CardText>
      <a href="www.google.com">Salman Khan</a>
      <hr/>
      </CardText>
      <CardActions>
      <IconButton tooltip="Reply"
      tooltipPosition="top-center">
        <Reply hoverColor={lightBlue500}/>
      </IconButton>


      <IconButton tooltip="Retweet"
      tooltipPosition="top-center">
        <Retweet color='black' hoverColor={lightBlue500} />
      </IconButton>


          <IconButton tooltip="Like"
          tooltipPosition="top-center">
              <FavIcon hoverColor={lightBlue500} />
          </IconButton>


          <IconButton tooltip="Direct Message"
          tooltipPosition="top-center">
            <MailIcon hoverColor={lightBlue500}/>
          </IconButton>
      </CardActions>
    </Card>
    );
  }
}
