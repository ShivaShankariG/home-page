import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';



class RaisedButton1 extends React.Component{
  render(){
    return (
  <div>

    <RaisedButton label={this.props.text} primary={true}   buttonStyle={{ borderRadius: 25 }}
      style={{ borderRadius: 25 }}
      labelColor={'#FFFFFF'} />

  </div>
);
}
}

export default RaisedButton1;
