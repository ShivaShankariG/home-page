import React from 'react';
import {lightBlue500 ,grey700 ,yellowA700,white, cyan500, brown900, blue500 } from 'material-ui/styles/colors';

const styles={
  test: {
      textAlign: 'center',
  },
  h :{
      display: 'inline-block',
      marginRight:'20px',
  },
  h3 :{
    textAlign: 'left',
    marginRight: '20px',
    marginLeft: '20px',
  },
a:{

  marginRight: '20px',
},
p:{
  marginRight: '20px',
  marginLeft: '20px',
  fontSize:'80%',
  textAlign: 'left',
  color: '#BDBDBD',
},

};

class Trends extends React.Component
{
  render()
  {
    return (
      <div>
        <div style={styles.test}>
          <h3 style={styles.h}>Trends For You   </h3><a href="www.google.com"  style={{color:lightBlue500 }} >Change  </a>
          <h3 style={styles.h3} ><a href="www.google.com"  style={{color:lightBlue500 }} >#KalakkuMachaanMAking  </a></h3>

            <h3 style={styles.h3} ><a href="www.google.com"  style={{color:lightBlue500 }} >#INDvSL  </a></h3>
            <p style={styles.p}>India struggle without Virat Koli against Sri Lanka</p>
            <h3 style={styles.h3} ><a href="www.google.com"  style={{color:lightBlue500 }} >#GhajiniKanthFirstLook </a></h3>
            <h3 style={styles.h3} ><a href="www.google.com"  style={{color:lightBlue500 }} >#INDvGER </a></h3>
            <p style={styles.p}> 1018 tweets </p>
            <h3 style={styles.h3} ><a href="www.google.com"  style={{color:lightBlue500 }} >Set Making </a></h3>
            <p style={styles.p}> 15.3k tweets </p>
            <h3 style={styles.h3} ><a href="www.google.com"  style={{color:lightBlue500 }} >Hasura </a></h3>
            <p style={styles.p}> 12k tweets </p>
            <h3 style={styles.h3} ><a href="www.google.com"  style={{color:lightBlue500 }} >#INternship </a></h3>
            <p style={styles.p}> 18k tweets </p>

        </div>
      </div>

    );
  }
}
export default Trends;
