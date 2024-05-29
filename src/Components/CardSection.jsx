import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CardSection.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PixIcon from '@mui/icons-material/Pix';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const CardSection = () => {
  const [startIndex, setStartIndex] = React.useState(0);
  const cardsPerPage = 4;

  const cards = [
    
    {
      title: (
        <Typography style={{ fontSize: '24px' }} component='span'>
          <StoreMallDirectoryOutlinedIcon style={{ height: '30px', width: '30px' }} /> <br />
          Conta
        </Typography>
      ),
      description: "Receba, movimente e guarde seu dinheiro de um jeito simples e com rendimento maior que a poupança..",
      category: (
        <Typography style={{ fontSize: '18px', color: '#820AD1' }} component="span">
          Saiba Mais <ArrowForwardIcon style={{ fontSize: 14, verticalAlign: 'middle' }} />
        </Typography>
      )
    },
    {
      title: (
        <Typography style={{ fontSize: '24px' }} component='span'>
          <PaidOutlinedIcon style={{ height: '30px', width: '30px' }} /> <br />
          Empréstimo
        </Typography>
      ),
      description: "Transparentes, seguros e do seu jeito. Opções de empréstimos que deixam você no controle do início ao fim.",
      category: (
        <Typography style={{ fontSize: '18px', color: '#820AD1' }} component="span">
          Saiba Mais <ArrowForwardIcon style={{ fontSize: 14, verticalAlign: 'middle' }} />
        </Typography>
      )
    },
    {
      title:(
      <Typography style={{fontSize:'24px'}} component='span'> <MonetizationOnIcon style={{height:'30px', width:'30px'}}/> <br/>
      Investimentos</Typography>),
      description: "Investimentos a partir de R$ 1 e opções para todos os perfis. Uma experiência fácil, segura e transparente.",
      category:(
      <Typography style={{fontSize:'18px', color:'#820AD1'}} component="span">
      Saiba Mais <ArrowForwardIcon style={{ fontSize: 14, verticalAlign: 'middle' }} />
    </Typography>)
    },
    {
      title:(
      <Typography style={{fontSize:'24px'}} component='span'> <SavingsOutlinedIcon style={{height:'30px', width:'30px'}}/> <br/>
      Caixinhas</Typography>),
      description: "Organize e guarde dinheiro para seus planos. Crie Caixinhas personalizadas para cada um de seus objetivos..",
      category:(
      <Typography style={{fontSize:'18px', color:'#820AD1'}} component="span">
      Saiba Mais <ArrowForwardIcon style={{ fontSize: 14, verticalAlign: 'middle' }} />
    </Typography>)
    },
    {
      title:(
      <Typography style={{fontSize:'24px'}} component='span'> <AccountBalanceWalletIcon style={{height:'30px', width:'30px'}}/> <br/>
      Cartão de Credito</Typography>),
      description: "Organize e guarde dinheiro para seus planos. Crie Caixinhas personalizadas para cada um de seus objetivos..",
      category:(
      <Typography style={{fontSize:'18px', color:'#820AD1'}} component="span">
      Saiba Mais <ArrowForwardIcon style={{ fontSize: 14, verticalAlign: 'middle' }} />
    </Typography>)
    },
    {
      title: (
        <Typography style={{ fontSize: '24px' }} component='span'>
          <PixIcon style={{ height: '30px', width: '30px' }} /> <br />
          Pix no crédito
        </Typography>
      ),
      description: "Faça um Pix e pague com o cartão de crédito: não use o saldo da sua conta e concentre os gastos no cartão",
      category: (
        <Typography style={{ fontSize: '18px', color: '#820AD1' }} component="span">
          Saiba Mais <ArrowForwardIcon style={{ fontSize: 14, verticalAlign: 'middle' }} />
        </Typography>
      )
    },
    {
      title: (
        <Typography style={{ fontSize: '24px' }} component='span'>
          <HorizontalSplitIcon style={{ height: '30px', width: '30px' }} /> <br />
          Boleto no Crédito
        </Typography>
      ),
      description: "Pague ou parcele em até 12 vezes seus boletos com o cartão de crédito e tenha mais controle sobre o seu dinheiro.",
      category: (
        <Typography style={{ fontSize: '18px', color: '#820AD1' }} component="span">
          Saiba Mais <ArrowForwardIcon style={{ fontSize: 14, verticalAlign: 'middle' }} />
        </Typography>
      )
    },
    {
      title: (
        <Typography style={{ fontSize: '24px' }} component='span'>
          <CurrencyExchangeIcon style={{ height: '30px', width: '30px' }} /> <br />
          Parcelamento de Compras.
        </Typography>
      ),
      description: "Parcele suas compras à vista feitas em estabelecimentos físicos e virtuais direto no app do Nubank.",
      category: (
        <Typography style={{ fontSize: '18px', color: '#820AD1' }} component="span">
          Saiba Mais <ArrowForwardIcon style={{ fontSize: 14, verticalAlign: 'middle' }} />
        </Typography>
      )
    },
    {
      title: (
        <Typography style={{ fontSize: '24px' }} component='span'>
          <AccountBalanceWalletIcon style={{ height: '30px', width: '30px' }} /> <br />
          Cartão Virtual
        </Typography>
      ),
      description: "Crie novos cartões virtuais de crédito ou débito no seu app e proteja ainda mais suas compras online..",
      category: (
        <Typography style={{ fontSize: '18px', color: '#820AD1' }} component="span">
          Saiba Mais <ArrowForwardIcon style={{ fontSize: 14, verticalAlign: 'middle' }} />
        </Typography>
      )
    },
    {
      title: (
        <Typography style={{ fontSize: '24px' }} component='span'>
          <FavoriteBorderIcon style={{ height: '30px', width: '30px' }} /> <br />
          Seguro de vida
        </Typography>
      ),
      description: "Proteja você e quem você ama por a partir de R$4 por mês. Escolha o plano que se encaixa ao seu perfil.",
      category: (
        <Typography style={{ fontSize: '18px', color: '#820AD1' }} component="span">
          Saiba Mais <ArrowForwardIcon style={{ fontSize: 14, verticalAlign: 'middle' }} />
        </Typography>
      )
    },
    {
      title: (
        <Typography style={{ fontSize: '24px' }} component='span'>
          <AccountBalanceWalletIcon style={{ height: '30px', width: '30px' }} /> <br />
          Carteira Digital
        </Typography>
      ),
      description: "Armazene os dados do seu cartão de crédito nas carteiras digitais do Google Pay, Apple Pay e Samsung Pay.",
      category: (
        <Typography style={{ fontSize: '18px', color: '#820AD1' }} component="span">
          Saiba Mais <ArrowForwardIcon style={{ fontSize: 14, verticalAlign: 'middle' }} />
        </Typography>
      )
    },
  
    {
      title: (
        <Typography style={{ fontSize: '24px' }} component='span'>
          <PixIcon style={{ height: '30px', width: '30px' }} /> <br />
          Seguro celular
        </Typography>
      ),
      description: "A mais completa proteção do mercado, seja para furto ou roubo de celular, tela quebrada ou oxidada.",
      category: (
        <Typography style={{ fontSize: '18px', color: '#820AD1' }} component="span">
          Saiba Mais <ArrowForwardIcon style={{ fontSize: 14, verticalAlign: 'middle' }} />
        </Typography>
      )
    },    
  ];


  const handleNext = () => {
    setStartIndex(prevIndex => (prevIndex + 1) % (cards.length - cardsPerPage + 1));
  };

  const handlePrevious = () => {
    setStartIndex(prevIndex => (prevIndex === 0 ? cards.length - cardsPerPage : prevIndex - 1));
  };

  return (
    <Box sx={{ minWidth: 275}}>
      <div  className=" ">
        <div className="card-container active" style={{ '--startIndex': startIndex }}>
          {cards.map((card, index) => (
            <Card style={{borderRadius:'15px', height:'300px', width:'85px' }} key={index} variant="outlined" className="card">
              <CardContent>
                <Typography sx={{ fontSize:32}} color="black" gutterBottom>
                  {card.title}
                </Typography>
                <Typography sx={{fontSize: 18}} component="div">
                  {card.description}
                </Typography>
                <Typography sx={{fontSize: 12}} color="text.secondary">
                  {card.category}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="navigation-buttons">
        <Button  onClick={handlePrevious}><ArrowBackIcon sx={{ fontSize: 30, color:'black'}} /></Button>
        <Button onClick={handleNext}><ArrowForwardIcon sx={{ fontSize: 30, color:'black' }}/></Button>
      </div>
    </Box>
  );
};

export default CardSection;
