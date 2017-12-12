import React from 'react';
import './App.css';
import ChipExampleSimple from './ChipExampleSimple';


const styles={
  test: {
      textAlign: 'center',
  },
  h :{
      display: 'inline-block',
      marginRight:'20px',
  },
a:{

  marginRight: '20px',
},

};
export default class Suggestion extends React.Component
{
  render()
  {
    return(
    <div>
      <div style={styles.test}>
    <h4 style={styles.h}>Who to follow?   </h4><a href="www.google.com" style={styles.a} >Refresh  </a><a href="www.google.com" >View all</a>
</div>



</div>
    );
  }
}
