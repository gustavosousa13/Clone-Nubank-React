import React from 'react';
import './Contas.css';

const Contas = () => {
  return (
    <div className="container">
      <div className="block" style={{ backgroundColor: 'rgb(130, 10, 209)' }}>
      <img style={{marginTop:'-15px'}} className='imagem1' src="src/assets/imagem7.png" alt="Title 1" />
        <a className='ancora1'>Conta do Nubank</a>
        <p className='paragrafo1'>Manter suas contas em dia nunca foi tão simples com Assistente de Pagamentos.</p>
        <button className='btn2' style={{ fontSize:'18px'}}>Saiba mais</button>
      </div>
      <div className="block" style={{ backgroundColor: 'rgb(47, 5, 73)' }}>
        
      <img style={{marginTop:'-10px'}} src="src/assets/imagem8.png" alt="Title 2" />    
    <a className='ancora2'>Conta PJ</a>
        <p className='paragrafo2'>Ficou mais fácil organizar o seu negócio com a conta PJ do Nubank</p>
        <button className='btn3' style={{fontSize:'18px'}}>Saiba mais</button>
      </div>
    </div>
  );
};

export default Contas