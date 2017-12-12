import React from 'react';
import TextField from 'material-ui/TextField';
import logo from './logo.svg';
import IconButtonExampleComplex from './IconButtonExampleComplex';
import SearchIcon from 'material-ui/svg-icons/action/search';
class TextFieldExampleSimple extends React.Component
{
  render()
  {
 return (

  <div>
    <TextField
     style={{  borderRadius: 25 }}
      hintText={this.props.hinttext}
      hasIcon={true}
      iconButton={<SearchIcon/>}
      />
  </div>
);
}
}
 export default TextFieldExampleSimple;
