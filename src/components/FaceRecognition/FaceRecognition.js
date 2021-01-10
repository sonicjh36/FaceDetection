import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  console.log('check', box);


  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {box.map(obj => (<div key={obj.index.toString()}className='bounding-box' style={{top: obj.topRow, right: obj.rightCol, bottom: obj.bottomRow, left: obj.leftCol}}></div>))}
      </div>
    </div>
  );
}

export default FaceRecognition;