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

const handler=<a href="www.google.com">BombayTimes</a>


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
          subtitle="@bombaytimes . 2m"
          avatar="https://pbs.twimg.com/media/DQna5l1U8AA8hj5.jpg:large"
        />
      <CardText>
          <p><a href="www.google.com" style={{color:lightBlue500 }}>@Varun_dvn</a> with wrestler <a href="www.google.com" style={{color:lightBlue500 }}>@TripleH</a>...He is a superstar and he met him and got him seats. He also went and announced a match and the crowd went crazy!</p>
          <img src="https://pbs.twimg.com/media/DQna5l1U8AA8hj5.jpg:large" width= '50%' height='50%' />

      </CardText>
      <CardText>
      <a href="www.google.com">VarunDhawan.Net</a>  , <a href="www.google.com">Varun Dhawan FanClub</a>, <a href="www.google.com">Varun Dhawan FC</a> and <a href="www.google.com">3 others</a>
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
