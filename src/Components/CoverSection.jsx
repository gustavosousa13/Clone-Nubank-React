import React from 'react';
import imagem1 from '../assets/imagem1.png';
import './CoverSection.css';

function CoverSection() {
  return (
    <section className="cover-section">
      <div className='imagem'>
        <img src={imagem1} alt="Imagem1" />
      </div>
    </section>
  );
}

export default CoverSection;
