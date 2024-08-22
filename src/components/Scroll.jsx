import React from 'react';
import './Scroll.css';

export default function Scroll() {
  return (
    <>
      <div className="scroll">
        <div
          className="slider"
          reverse="true"
          style={{
            '--width': '350px',
            '--height': '420px',
            '--quantity': 9
          }}
        >
          <div className="list">
            <div className="item" style={{ '--position': 1 }}>
            <img  src={require('../images/House (1).jpg')} alt="Error"/>
            </div>
            <div className="item" style={{ '--position': 2 }}>
            <img  src={require('../images/House (2).jpg')} alt="Error"/>
            </div>
            <div className="item" style={{ '--position': 3 }}>
            <img  src={require('../images/House (3).jpg')} alt="Error"/>
            </div>
            <div className="item" style={{ '--position': 4 }}>
            <img  src={require('../images/House (4).jpg')} alt="Error"/>
            </div>
            <div className="item" style={{ '--position': 5 }}>
            <img  src={require('../images/House (5).jpg')} alt="Error"/>
            </div>
            <div className="item" style={{ '--position': 6 }}>
            <img  src={require('../images/House (6).jpg')} alt="Error"/>
            </div>
            <div className="item" style={{ '--position': 7 }}>
            <img  src={require('../images/House (7).jpg')} alt="Error"/>
            </div>
            <div className="item" style={{ '--position': 8 }}>
            <img  src={require('../images/House (8).jpg')} alt="Error"/>
            </div>
            <div className="item" style={{ '--position': 9 }}>
            <img  src={require('../images/House (9).jpg')} alt="Error"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
