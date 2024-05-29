import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards3() {
  return (
<div style={{height:'600px', marginTop:'-100px' }}>
    <div style={{display:'flex', flexDirection:'row', gap:'30px', height:'560px',marginLeft:'100px'}} className='Card'>
    <Card sx={{borderRadius:5, maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="330"
        width="400"
        image="src/assets/imagemcard4.png"
      />
      <CardContent>
        <Typography color="black" fontWeight="600" gutterBottom variant="h8" component="div">
        Caixinhas
        </Typography>
        <Typography fontSize="18px" fontWeight="600" variant="body3" color="black">
        Caixinhas do Nubank: tudo o que você precisa saber sobre a ferramenta que facilita os seus planos
        </Typography>
      </CardContent>
      <CardActions>
        <Button  style={{fontSize:'16px', color:'rgb(130, 10, 209)',fontWeight:'600'}} size="large">Ler artigo</Button>
      </CardActions>
    </Card>

    <Card sx={{borderRadius:5, maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="330"
        width="400"
        image="src/assets/imagemcard5.png"
      />
      <CardContent>
        <Typography color="black" fontWeight="600" gutterBottom variant="h8" component="div">
        Empréstimo
        </Typography>
        <Typography fontSize="18px" fontWeight="600" variant="body3" color="black">
        Como fazer empréstimo no Nubank? Confira dicas para escolher o crédito certo para você
        </Typography>
      </CardContent>
      <CardActions>
        <Button  style={{fontSize:'16px', color:'rgb(130, 10, 209)',fontWeight:'600'}} size="large">Ler artigo</Button>
      </CardActions>
    </Card>

    <Card sx={{borderRadius:5, maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="330"
        width="400"
        image="src/assets/imagemcard6.png"
      />
      <CardContent>
        <Typography color="black" fontWeight="600" gutterBottom variant="h8" component="div">
        N Possibilidades
        </Typography>
        <Typography fontSize="18px" fontWeight="600" variant="body3" color="black">
        10 situações da sua vida que o Nubank ajuda a resolver com N Possibilidades
        </Typography>
      </CardContent>
      <CardActions>
        <Button  style={{fontSize:'16px', color:'rgb(130, 10, 209)',fontWeight:'600'}} size="large">Ler artigo</Button>
      </CardActions>
    </Card>



    


    </div>
    </div>
  );
}
