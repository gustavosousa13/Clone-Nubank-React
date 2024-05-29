import { AlignVerticalCenter } from "@mui/icons-material"
import React from "react"
import './Footer.css'

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div style={{backgroundColor:'black', height:'1400px', marginTop:'120px'}} className="container-fluid text-center text-md-left">
        <div className="row">
  

            <hr className="clearfix w-100 d-md-none pb-0"/>
            
  <div className="primeiracoluna">
            <div className="col-md-3 mb-md-0 mb-3">
                <h5>Nubank</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Sobre nós</a></li>
                    <li><a href="#!"> Carreiras</a></li>
                    <li><a href="#!">Perguntas Frequentes</a></li>
                    <li><a href="#!">LContato</a></li>
                    <li><a href="#!">Imprensa</a></li>
                    <li><a href="#!">ESG</a></li>
                    <li><a href="#!">Investidores</a></li>
                </ul>
                
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Produtos</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Conta digital</a></li>
                    <li><a href="#!"> Cartão de Crédito</a></li>
                    <li><a href="#!">NuBank Ultravioleta</a></li>
                    <li><a href="#!">Função Constuir limite</a></li>
                    <li><a href="#!">Emprestimo</a></li>
                    <li><a href="#!">Conta PJ</a></li>
                    <li><a href="#!">Cartão de Crédito PJ</a></li>
                    <li><a href="#!">Nubank Vida</a></li>
                    <li><a href="#!">Investimentos</a></li>
                </ul>
            </div>
            </div>
            
            <div className="segundacoluna">
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Explore</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Comunidade</a></li>
                    <li><a href="#!">Blog</a></li>
                    <li><a href="#!">InvestNews</a></li>
                    <li><a href="#!">Newsletter</a></li>
                    <li><a href="#!">México</a></li>
                    <li><a href="#!">Colômbia</a></li>
                </ul>
            </div>
            
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Veja também</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Tudo sobre o Pix</a></li>
                    <li><a href="#!">Fornecedores</a></li>
                </ul>
            </div>
            </div>

            
            <div className="terceiracoluna">
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Transparência</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Política de privacidade</a></li>
                    <li><a href="#!"> Política de segurança</a></li>
                    <li><a href="#!">Contratos</a></li>
                    <li><a href="#!">Relatórios financeiros</a></li>
                    <li><a href="#!">Ética e compliance</a></li>
                    <li><a href="#!">Dados abertos</a></li>
                    <li><a href="#!">SRC</a></li>
                    <li><a href="#!">Convenção de boletos</a></li>
                    <li><a href="#!">PLD/CFTP</a></li>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Fale com a gente</h5>
                <ul className="list-unstyled">
                    <li><p href="#!">Capitais e Regiões metropolitanas</p></li>
                    <li><a href="#!"> 4020 0185</a></li>
                    <li><p href="#!">Demais localidades</p></li>
                    <li><a href="#!">0800 591 2117</a></li>
                    <li><a href="#!">meajuda@nubank.com.br</a></li>
                    <li><p href="#!">Atendimento 24h</p></li>
                    <li><a href="#!">Canal de atendimento em libras</a></li>
                </ul>
            </div>
            </div>
            <div className="quartacoluna">
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Ouvidoria</h5>
                <ul className="list-unstyled">
                    <li><a href="#!"> 0800 887 0463</a></li>
                   <li><a href="#!">ouvidoria@nubank.com.br</a></li>
                    <li><p href="#!">Atendimento das 9h às 18h (dias úteis)</p></li>
                    <li><a href="#!">Canal de atendimento em libras</a></li>
                </ul>
            </div>
            <div className="logo" style={{lineHeight:'50px', marginLeft:'-320px'}}>
              <p>Baixe o app</p>
              <div className="logos">
                <a href="https://appstore.com" target="_blank" rel="noopener noreferrer">
              <img  className='appstore' src="src/assets/Appstore.png"/>
              </a>
              <a href="https://play.google.com/store/apps?hl=pt&pli=1" target="_blank" rel="noopener noreferrer">
              <img style={{height:'26px',marginLeft:'5px',marginTop:'20px'}}className="google" src="src/assets/Google_Play_2022_logo.svg"/>
              </a>
              </div>
            </div>
        </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>

</footer>

export default Footer