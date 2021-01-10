import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
 apiKey: '6cb581a0909e49ff9e708781f2d1869f'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: []
    }
  }


  calculateFaceLocation = (data) => {
    console.log(data.outputs);
    console.log(data.outputs[0].data.regions.length);
    let obj = [];
    for (let i = 0 ; i < data.outputs[0].data.regions.length; i++) {
      let clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
      let image = document.getElementById('inputimage');
      let width = Number(image.width);
      let height = Number(image.height);
      obj[i] = {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height),
        index: i
      };
    }

    console.log(obj);
    return obj;

  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        // .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  }

  render() {
    const { imageUrl, box } = this.state;
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <div>
          <Logo />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
      </div>
    );
  }
}

export default App;
