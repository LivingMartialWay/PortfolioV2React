import React from 'react';
import StarfieldAnimation from 'react-starfield-animation';
import './Techlist.css';
//import reactlogo from '../img/react.png';
//import jslogo from '../img/javascript.png';
//import nodelogo from '../img/nodejs.png';

function Techlist() {
    return (
    <div className="Techlist">
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
    </div>
    )
  };

export default Techlist;
