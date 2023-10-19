import React, { useState, useEffect } from 'react'
import './PlacaComponent.css';


const PlacaMotoComponent = ({ placa }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Carregue a fonte assim que o componente for montado
    const font = new FontFace('FEEng___', 'url(/fonts/FEEng___.ttf) format("truetype")');
    font.load().then(() => {
      document.fonts.add(font);
      setFontLoaded(true);
    });
  }, []);

  const lastFourChars = placa.slice(-4);
  const firstPart = placa.slice(0, -4);

  return (
    <div
      className="w-full max-w-screen-sm"
      style={{
        background: `url('/placa-m.png') no-repeat center`,
        backgroundSize: '60% 100%',
        width: '94%',
        height: '280px', // Você pode ajustar a altura aqui
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        className={`placa-texto ${fontLoaded ? 'font-loaded' : ''}`}
        style={{
          fontFamily: 'FEEng___',
          fontSize: '100px',
          color: 'black',
          textTransform: 'uppercase',
          textAlign: 'center',
          position: 'absolute',
          left: 0,
          right: 0,
          margin: '84px 0px 0px 0px',
          lineHeight: '0.8',
        }}
      >
        {firstPart}
        <br />
        <span style={{ marginLeft: '10px' }}>{lastFourChars}</span>
      </div>
    </div>
  )
}

export default PlacaMotoComponent;
