import React from 'react'
import './Shopping.css'

export default function Shopping() {
  return (
    <div className='body'>
        <div className='imagem'>
            <img className='img' style={{height:'300px', marginLeft:'40px'}} src='src/assets/imagem9.png'/>
        </div>
        <div className='textos'>
            <a className='titulo' style={{marginLeft:'0',marginRight:'0',fontSize:'48px'}}>Shopping do Nu</a>
            <h2 className='sub'>Tem shopping no seu bank! Mais de 150 <br/>parceiros com ofertas para você aproveitar.</h2>
             <a style={{fontSize:'18px'}}className='saibamais'>Saiba mais</a>
      </div>
    </div>
  )
}
