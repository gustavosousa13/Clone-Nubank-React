import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './MoreProductsSection.css'

export default function MoreProductsSection() {
  return (
<div  style={{height:'600px', marginTop:'-100px' }}>
    <div className='divpai' style={{display:'flex', flexDirection:'row', gap:'30px', height:'513px',marginLeft:'100px'}} className='Card'>
    <Card className='card5' sx={{borderRadius:5, maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="homem e mulher fazendo anotações"
        height="330"
        width="400"
        image="src/assets/imagemcard1.png"
      />
      <CardContent>
        <Typography color="rgb(130, 10, 209)" fontWeight="600" gutterBottom variant="h4" component="div">
        Emprestimos
        </Typography>
        <Typography fontSize="16px" fontWeight="500" variant="body3" color="black">
        Transparentes, seguros e do seu jeito: da simulação até a última parcela
        </Typography>
      </CardContent>
      <CardActions>
        <Button  style={{fontSize:'16px', color:'rgb(130, 10, 209)'}} size="large">Saiba mais</Button>
      </CardActions>
    </Card>

    <Card sx={{borderRadius:5, maxWidth: 345}}>
      <CardMedia
        component="img"
        alt=" familia em parque"
        height="330"
        width="400"
        image="src/assets/imagemcard2.png"
      />
      <CardContent>
        <Typography color="rgb(130, 10, 209)" fontWeight="600" gutterBottom variant="h4" component="div">
        Seguro de vida
        </Typography>
        <Typography fontSize="16px" fontWeight="500" variant="body3" color="black">
        Seguro para proteger você e quem você mais ama: agora e no futuro.
        </Typography>
      </CardContent>
      <CardActions>
        <Button  style={{fontSize:'16px', color:'rgb(130, 10, 209)'}} size="large">Saiba mais</Button>
      </CardActions>
    </Card>

    <Card className='cardmedia' sx={{borderRadius:5, maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="homem com celular"
        height="330"
        width="400"
        image="src/assets/imagemcard3.png"
      />
      <CardContent>
        <Typography color="rgb(130, 10, 209)" fontWeight="600" gutterBottom variant="h4" component="div">
        Seguro celular
        </Typography>
        <Typography fontSize="16px" fontWeight="500" variant="body3" color="black">
        Para você não ficar sem curtir seu celular e tudo que você pode fazer com ele.
        </Typography>
      </CardContent>
      <CardActions>
        <Button  style={{fontSize:'16px', color:'rgb(130, 10, 209)'}} size="large">Saiba mais</Button>
      </CardActions>
    </Card>

    </div>
    </div>
  );
}
