// src/App.js
import React from 'react';
import './App.css';

// Importar as imagens
import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';
import image3 from './assets/images/image3.jpeg';

function App() {
  const MyComponent = () => {
    return (
      <div className="image-container">
        <div className="image-wrapper">
          <img src={image3} alt="Imagem 3" />
          <div className="text-overlay">O que você tem certeza do que sabe?</div>
        </div>
        <div className="image-wrapper">
          <img src={image1} alt="Imagem 1" />
          <div className="text-overlay">Sei que nada Sei</div>
        </div>
        <div className="image-wrapper">
          <img src={image2} alt="Imagem 2" />
          <div className="text-overlay">Sei Taxar</div>
        </div>
        
      </div>
    );
  };

  return (
    <div className="App">
      <h1 className="title">Saber</h1>
      <MyComponent />
      <hr />
      <MyComponent />
      <hr />
      <MyComponent />
      <hr />
    
    </div>
  );
}

export default App;
