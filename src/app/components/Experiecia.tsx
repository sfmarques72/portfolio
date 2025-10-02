'use client';
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Divider,
  Modal,
  IconButton,
  Chip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const experiencias = [
  {
    title: 'Software Developer III - Paschoalotto',
    period: 'Setembro de 2025 – Atual',
    shortDescription: 'Gestão do ambiente de produção, versionamento e releases, garantindo estabilidade e rastreabilidade...',
    fullDescription: 'Gestão do ambiente de produção, versionamento e releases, garantindo estabilidade e rastreabilidade. Mentoria de desenvolvedores juniores e participação ativa na definição de padrões de código e boas práticas.',
    technologies: ['Gestão de Produção', 'Versionamento', 'Mentoria', 'Code Review']
  },
  {
    title: 'Software Developer II - Paschoalotto',
    period: 'Janeiro de 2025',
    shortDescription: 'Desenvolvimento full stack com foco em automação de processos e otimização operacional...',
    fullDescription: 'Desenvolvimento full stack com foco em automação de processos e otimização operacional. Utilização de MongoDB, PostgreSQL e Azure para hospedagem e monitoramento de aplicações. Criação e manutenção de documentações técnicas e operacionais. Organização e acompanhamento de tarefas via ClickUp.',
    technologies: ['MongoDB', 'PostgreSQL', 'Azure', 'ClickUp', 'Full Stack']
  },
  {
    title: 'Software Developer I - Paschoalotto',
    period: 'Janeiro de 2023',
    shortDescription: 'Início atuando como back-end, com transição para full stack no time de inovação...',
    fullDescription: 'Início atuando como back-end, com transição para full stack no time de inovação. Experiência com VB6, SQL, MongoDB, Python, C# e React.',
    technologies: ['VB6', 'SQL', 'MongoDB', 'Python', 'C#', 'React', 'Back-end', 'Full Stack']
  },
  {
    title: 'Analista I (Digital) - Paschoalotto',
    period: 'Janeiro de 2022',
    shortDescription: 'Atuando com Chatbot e automações de processos, apresentações de comites e analise...',
    fullDescription: 'Atuando com Chatbot e automações de processos, apresentações de comites e analises de resultados.',
    technologies: ['R', 'Excel', 'Robbu', 'SQL', 'PostgredSQL', 'Gestão']
  }
];

const Experiencia: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<any>(null);

  const handleOpenModal = (experiencia: any) => {
    setSelectedExperience(experiencia);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <Box
      sx={{
    height: { xs: '100vh', sm: '100vh', md: '100vh', lg: '100vh' },
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'url("/img/Frame 4.png")', // Corrigido: removidas as aspas duplas extras
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', // ⬅️ Cobre toda a área mantendo proporção
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // ⬅️ Fixa o background no scroll
    py: { xs: 0, sm: 0, md: 0 },
    overflow: 'hidden',
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          p: 0,
          height: '100%',
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
            height: '100%',
            minHeight: '100%'
          }}
        >
          {/* Imagem - CANTO ESQUERDO COLADA */}
          <Grid item xs={12} md={6} sx={{ height: '130%' }}>
            <Box
              sx={{
                width: '130%',
                height: '110%',
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
                  backgroundImage: 'url("/img/exp-anime.png")',
                  backgroundSize: 'contain',
                  backgroundPosition: 'left center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </Box>
          </Grid>

          {/* Conteúdo + Experiências */}
          <Grid item xs={12} md={6} sx={{ height: '100%' }}>
            <Box sx={{ 
              pl: { xs: 2, sm: 3, md: 4 },
              pr: { xs: 2, sm: 3, md: 4 },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              py: { xs: 2, sm: 3, md: 4 }
            }}>
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
                EXPERIÊNCIA
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
                Desenvolvedora Full Stack com experiência em diferentes níveis de senioridade, 
                atuando desde o desenvolvimento back-end até a gestão de ambientes de produção 
                e mentoria de desenvolvedores juniores.
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
                HISTÓRICO PROFISSIONAL
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
                {experiencias.map((experiencia, index) => (
                  <Card
                    key={index}
                    onClick={() => handleOpenModal(experiencia)}
                    sx={{
                      minWidth: 280,
                      flex: '0 0 auto',
                      scrollSnapAlign: 'start',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 25px rgba(191, 16, 25, 0.3)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 2 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: '#BF1019',
                          mb: 1,
                          fontSize: '1rem',
                        }}
                      >
                        {experiencia.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 'bold',
                          color: 'text.primary',
                          mb: 1.5,
                          fontSize: '0.85rem',
                        }}
                      >
                        {experiencia.period}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ 
                          fontSize: '0.8rem', 
                          lineHeight: 1.4,
                          mb: 1 
                        }}
                      >
                        {experiencia.shortDescription}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#BF1019',
                          fontWeight: 'bold',
                          fontSize: '0.7rem',
                          cursor: 'pointer'
                        }}
                      >
                        Clique para ver mais →
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            maxWidth: 600,
            width: '100%',
            maxHeight: '80vh',
            overflow: 'auto',
            position: 'relative'
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#BF1019'
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedExperience && (
            <>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: '#BF1019',
                  mb: 1,
                  pr: 4
                }}
              >
                {selectedExperience.title}
              </Typography>
              
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 'bold',
                  color: 'text.primary',
                  mb: 2
                }}
              >
                {selectedExperience.period}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.6,
                  mb: 3
                }}
              >
                {selectedExperience.fullDescription}
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#BF1019',
                    mb: 1
                  }}
                >
                  Tecnologias e Habilidades:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedExperience.technologies.map((tech: string, index: number) => (
                    <Chip
                      key={index}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: '#BF1019',
                        color: 'white',
                        fontWeight: 'bold',
                        '&:hover': {
                          backgroundColor: '#A00D15'
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Experiencia;