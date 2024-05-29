import * as React from 'react';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import './Card.css'
import { ArrowForward } from '@mui/icons-material';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&::before, &::after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

export default function Card() {
  const outerTheme = useTheme();

  return (
    <div  className='box1'>
     
    <Box
    
      sx={{
        border: '2px solid white',
        borderRadius: '12px',
        padding: '30px',
        color:'black', 
        display: 'grid',
        backgroundColor:'rgb(255, 255, 255)',
        height:'293px', width:'330px',
        gridTemplateColumns: { sm: '1fr 1fr 1fr' },
        gap: 2,
      }}
    >
       <h2 className='titulo2'>Peça sua conta e cartão <br/> de crédito do Nubank</h2>
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField className='text1' label="Digite seu CPF:" variant="standard" InputLabelProps={{style:{ fontSize:'15px', marginLeft:'0px'}}}
        inputProps={{ style: { color: 'black', fontSize:'20px' } }} 
        sx={{width:'250px', height:'60px', marginTop  :'80px',marginLeft:'5px',fontSize:'20px'}}  />
      </ThemeProvider>
      <div>
      <button className='btn'>Continuar <ArrowForward/></button>
    </div>
    </Box>
    </div>
  );
}
