'use client';
import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box,
  Button,
  Slide,
  useScrollTrigger
} from '@mui/material';

// Componente para hide/show no scroll
function HideOnScroll(props: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

const Portfolio: React.FC = () => {
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header/Navigation - COM ANIMAÇÃO NO SCROLL */}
      <HideOnScroll>
        <AppBar 
          position="fixed"
          sx={{ 
            backgroundColor: '#BF1019',
            zIndex: 1100,
            boxShadow: '0 2px 20px rgba(0,0,0,0.3)'
          }}
        >
          <Toolbar sx={{ 
            flexDirection: { xs: 'column', sm: 'row' },
            py: { xs: 1, sm: 0 },
            gap: { xs: 1, sm: 0 }
          }}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                flexGrow: { xs: 0, sm: 1 },
                fontWeight: 'bold',
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >

            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: { xs: 1, sm: 2 },
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              justifyContent: { xs: 'center', sm: 'flex-end' }
            }}>
              <Button 
                color="inherit" 
                onClick={() => scrollToSection('home')}
                sx={{ 
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                  minWidth: 'auto',
                  px: { xs: 1, sm: 2 },
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-1px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                INICIO
              </Button>
              <Button 
                color="inherit" 
                onClick={() => scrollToSection('sobre')}
                sx={{ 
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                  minWidth: 'auto',
                  px: { xs: 1, sm: 2 },
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-1px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                SOBRE MIM
              </Button>
              <Button 
                color="inherit" 
                onClick={() => scrollToSection('experiencia')}
                sx={{ 
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                  minWidth: 'auto',
                  px: { xs: 1, sm: 2 },
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-1px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                EXPERIÊNCIA
              </Button>
              <Button 
                color="inherit" 
                onClick={() => scrollToSection('github')}
                sx={{ 
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                  minWidth: 'auto',
                  px: { xs: 1, sm: 2 },
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-1px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                GITHUB
              </Button>
              <Button 
                color="inherit" 
                onClick={() => scrollToSection('contato')}
                sx={{ 
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                  minWidth: 'auto',
                  px: { xs: 1, sm: 2 },
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-1px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                CONTATO
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#BF1019',
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: '100px', sm: '64px' } // Compensa a altura da navbar fixa
        }}
      >
        {/* Imagem de fundo */}
        <Box
          sx={{
            width: { 
              xs: '90vw', 
              sm: '80vw', 
              md: '70vw', 
              lg: 1500,
              xl: 1500 
            },
            height: { 
              xs: '50vh', 
              sm: '60vh', 
              md: '70vh', 
              lg: 650,
              xl: 900 
            },
            maxWidth: 1500,
            maxHeight: 900,
            backgroundImage: 'url("/img/anime-inicio.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            zIndex: 1
          }}
        />

        {/* Título sobreposto */}
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: { 
              xs: '2.5rem', 
              sm: '4rem', 
              md: '6rem', 
              lg: '12rem',
              xl: '16rem' 
            },
            textTransform: 'uppercase',
            letterSpacing: { xs: '0.05em', md: '0.1em' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            position: 'absolute',
            zIndex: 2,
            color: 'white',
            textAlign: 'center',
            width: '100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            px: 2
          }}
        >
          PORTFÓLIO
        </Typography>

        {/* Efeito de partículas ou elementos decorativos opcionais */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 100%)',
            zIndex: 0
          }}
        />
      </Box>

      {/* Indicador de scroll (opcional) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          textAlign: 'center',
          color: 'white'
        }}
      >
        <Typography
          variant="body2"
          sx={{
            opacity: 0.8,
            mb: 1
          }}
        >
          Role para baixo
        </Typography>
        <Box
          sx={{
            width: '2px',
            height: '30px',
            backgroundColor: 'white',
            margin: '0 auto',
            animation: 'bounce 2s infinite'
          }}
        />
      </Box>

      {/* Estilos de animação */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </Box>
  );
};

export default Portfolio;