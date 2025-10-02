// page.tsx
'use client';
import React from 'react';
import Portfolio from './components/home';
import SobreMim from './components/Sobremim';
import Experiencia from './components/Experiecia';
import GitHubProfile from './components/Github';
import { Box, Fab } from '@mui/material';
import Contato from './components/Contato';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Seção Home/Portfolio */}
      <section id="home">
        <Portfolio />
      </section>

      {/* Seção Sobre Mim */}
      <section id="sobre">
        <SobreMim />
      </section>

      {/* Seção Experiência */}
      <section id="experiencia">
        <Experiencia />
      </section>

      {/* Seção GitHub */}
      <section id="github">
        <GitHubProfile />
      </section>

      {/* Seção Contato */}
      <section id="contato">
        <Contato />
      </section>

      {/* Botão Voltar ao Topo */}
      <Fab
        color="primary"
        aria-label="voltar ao topo"
        onClick={() => scrollToSection('home')}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          backgroundColor: '#BF1019',
          '&:hover': {
            backgroundColor: '#A00D15',
          },
          zIndex: 1000,
        }}
      >
        ↑
      </Fab>
    </Box>
  );
}