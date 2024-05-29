import React from 'react'
import './CartaoCredito.css'

export default function CartaoCredito() {
  return (
    <div className='divpai'>
      <div style={{height:'900px', width:'100vw'}}>
        <div className='titulo'>
         <h2 style={{color:'black'}}>Faça mais com seu cartão de crédito</h2>
        </div>
      <div className='box'>
        <div className='pix'>
            <p1 className='pixtitulo'>Pix no crédito</p1>
            <p2 className='pixsub'>Faça pagamentos PIX utilizando seu cartão de crédito. Parcele e aproveite essa vantagem.</p2>
        </div>
        <div className='boleto'>
            <p1 className='boletotitulo'>Pagamento de Boleto com cartão de crédito</p1>
            <p2 className='boletosub'>Pague seus boletos no crédito e parcele em até 12 vezes.</p2>
         </div>
          <div className='compras'>
            <p1 className='comprastitulo'>Parcelamento de Compras</p1>
            <p2 className='comprassub' >Comprou e a loja não parcelou? O Nu parcela a compra para você! Simples e prático, direto na sua fatura.</p2>
          </div>
        </div>
      </div>
    </div>
  )
}
