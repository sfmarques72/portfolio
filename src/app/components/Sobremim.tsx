'use client';
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Divider
} from '@mui/material';

const cursos = [
  {
    title: 'Java Fundamentals; DP900; Microsoft Power BI SENAI (Tech do Futuro)',
    year: '2023',
  },
  {
    title: 'Microserviços',
    year: 'Alura certificado emitido 2022',
  },
  {
    title: 'C#; PostgreSQL; Metodologias Ágeis',
    year: 'DIO / Alura certificado emitido 2024',
  },
  {
    title: 'JavaScript; HTML; CSS; React',
    year: 'Alura certificado emitido 2024',
  },
  {
    title: 'Code Girls Santander (AWS)',
    year: 'DIO / Santander certificado emitido 2025',
  },
];

const SobreMim: React.FC = () => {
  return (
   <Box
  sx={{
    height: { xs: '100vh', sm: '100vh', md: '100vh', lg: '100vh' },
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'url("/img/Frame 3.png")', // Corrigido: removidas as aspas duplas extras
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', // ⬅️ Cobre toda a área mantendo proporção
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // ⬅️ Fixa o background no scroll
    py: { xs: 0, sm: 0, md: 0 },
    overflow: 'hidden',
  }}
>
  {/* Seu conteúdo aqui */}
  <Container 
    maxWidth="lg" 
    sx={{ 
      p: 0,
      height: '100%', // Ocupa 100% da altura do Box pai
      display: 'flex',
      alignItems: 'left'
    }}
  >
    <Grid
      container
      spacing={0}
      alignItems="left"
      justifyContent="left"
      sx={{ 
        height: '100%', // Ocupa 100% da altura do Container
        minHeight: '100%' // Garante altura mínima
      }}
    >
      {/* Imagem - CANTO ESQUERDO COLADA */}
      <Grid item xs={12} md={6} sx={{ height: '130%' }}>
        <Box
          sx={{
            width: '130%',
            height: '110%', // Ocupa 100% da altura da Grid
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'flex-start'
          }}
        >
          <Box
            sx={{
              width: { 
                xs: '120%', 
                sm: '110%', 
                md: '100%', 
                lg: '105%',
                xl: '90%'
              },
              height: { 
                xs: '80%', 
                sm: '85%', 
                md: '150%', 
                lg: '95%' 
              },
              backgroundImage: 'url("/img/anime-sobremim.png")',
              backgroundSize: 'contain',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </Box>
      </Grid>

      {/* Conteúdo + Cursos */}
      <Grid item xs={12} md={6} sx={{ height: '100%' }}>
        <Box sx={{ 
          pl: { xs: 2, sm: 3, md: 4 },
          pr: { xs: 2, sm: 3, md: 4 },
          height: '100%', // Ocupa 100% da altura da Grid
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Centraliza verticalmente o conteúdo
          py: { xs: 2, sm: 3, md: 4 } // Adiciona padding interno vertical
        }}>
          {/* Resto do conteúdo permanece igual */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 'bold',
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3rem',
                lg: '3.5rem',
              },
              color: 'white',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            SOBRE MIM
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: '0.85rem',
                sm: '0.9rem',
                md: '1rem',
              },
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.9)',
              mb: 2,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Desenvolvedora Full Stack com experiência em Python, React, Next.js, Django e Azure,
            apaixonada por inovação e por criar soluções escaláveis. Tenho perfil colaborativo,
            foco em resultados e busco constante evolução como futura Engenheira de Software.
          </Typography>

          <Divider
            sx={{
              my: 2,
              backgroundColor: 'white',
              height: 2,
            }}
          />

          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: {
                xs: '1.3rem',
                sm: '1.5rem',
                md: '1.7rem',
              },
              color: 'white',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            CURSOS
          </Typography>

          <Box
            sx={{
              display: 'flex',
              overflowX: 'auto',
              gap: 2,
              pb: 1,
              scrollSnapType: 'x mandatory',
              width: '100%',
              maxWidth: '100%',
              '&::-webkit-scrollbar': {
                height: 6,
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#BF1019',
                borderRadius: 3,
              },
            }}
          >
            {cursos.map((curso, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: 200,
                  flex: '0 0 auto',
                  scrollSnapAlign: 'start',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  backgroundColor: 'rgba(255,255,255,0.95)',
                }}
              >
                <CardContent sx={{ p: 1.5 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#BF1019',
                      mb: 1,
                      fontSize: '0.9rem',
                    }}
                  >
                    {curso.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: '0.8rem' }}
                  >
                    {curso.year}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Container>
</Box>
  );
};

export default SobreMim;