import React from 'react';
import './App.css';
import CoverSection from './Components/CoverSection';
import CardSection from './Components/CardSection';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import TitleAndTextSection from './Components/TitleAndTextSection ';
import NubankUltravioleta from './Components/NubankUltravioleta';
import CartaoCredito from './Components/CartaoCredito';
import MoreProductsSection from './Components/MoreProductsSection '
import Contas from './Components/Contas'
import Shopping from './Components/Shopping'
import Cards3 from './Components/Cards3'
import Footer from './Components/Footer'

function App() {
  
    return (
  <div>
      <header className='header'>
           <div className='section'>
             <Navbar />
           </div>
      </header>
      <div style={{position:'relative', height:'60vh'}} className='cover1'>
        <div  className='imagem1'>
              <CoverSection />
          <div className='Card'>
              <Card />
          </div>
        </div>
            <div className='tituloprincipal'>
              <h2 style={{color:'white', fontSize:'52px',letterSpacing: '1px'}} className='titulo1'>100 milhões de clientes. Você no centro de tudo.</h2>
              <h3 style={{color:'white'}}className='sub'>Em cada produto ou solução que lançamos, tudo é pensado para abrir N possibilidades na sua vida.</h3>
            </div>
      </div>
         <div style={{marginTop:'400px'}}>
            <div className='Cards1'>
              <CardSection /> 
            </div>
         </div>
            <div className='titleandtextsection'>
              <TitleAndTextSection/>
            </div>
            <div className='ultravioleta'>
              <NubankUltravioleta/>
           </div>
            <div className='cartaocredito'>
               <CartaoCredito />
           </div>
           <div className='moreproduct' >
              <MoreProductsSection/>
           </div>
           <div className='conta'>
              <Contas/>
           </div>
           <div className='shopping'>
              <Shopping/>
           </div>
        <div className='card3' style={{marginTop:'150px', height:'500px'}}>
              <Cards3/>
           </div>
           <footer className='footer'>
              <Footer/>
           </footer>
  </div>
  );
}

export default App;
