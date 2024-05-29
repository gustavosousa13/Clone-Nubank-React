import React from 'react';
import './TitleAndTextSection.css';

export default function TitleAndTextSection() {
  return (
    <div className='divpai'>
      <div className='div'>
        <p className='titulo1'>Conheça nosso Cartão de Crédito</p>
        <p className='subtitulo1'>Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno, gratuito e prático também.</p>
        <a className='saibamais'>Saiba mais</a>
      </div>
      <div>
        <img className='imagem3' src='src/assets/imagem3.png' alt='Imagem do Cartão de Crédito' />
      </div>
    </div>
  );
}
