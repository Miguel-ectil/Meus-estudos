'use client'
import React, { useState, useEffect } from 'react';
import './PlacaComponent.css';

const PlacaCarroComponent = ({ placa }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Carregue a fonte assim que o componente for montado
    const font = new FontFace('FEEng___', 'url(/fonts/FEEng___.ttf) format("truetype")');
    font.load().then(() => {
      document.fonts.add(font);
      setFontLoaded(true);
    });
  }, []);

  return (
    <div
      className="w-full max-w-screen-sm"
      style={{
        background: `url('../placa-c.png') no-repeat center`,
        backgroundSize: '86% 100%',
        width: '100%',
        height: '160px', // Você pode ajustar a altura aqui
        position: 'relative',
        overflow: 'hidden',
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
          margin: '34px 0px 0px 12px',
        }}
      >
        {placa}
      </div>
    </div>
  );
};

export default PlacaCarroComponent;
