// components/Contato.tsx
'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Alert,
  Snackbar,
  Divider,
  Chip,
  CircularProgress
} from '@mui/material';
import {
  Phone,
  Email,
  LinkedIn,
  GitHub,
  Send,
  LocationOn,
  WhatsApp
} from '@mui/icons-material';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xovkwkzp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          assunto: formData.assunto,
          mensagem: formData.mensagem,
          _subject: `Portfolio Contato: ${formData.assunto}`,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        setSnackbarMessage('🎉 Mensagem enviada com sucesso! Entrarei em contato em breve.');
        setSnackbarSeverity('success');
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setSnackbarMessage('❌ Erro ao enviar mensagem. Use WhatsApp ou Email direto.');
      setSnackbarSeverity('error');
    } finally {
      setLoading(false);
      setOpenSnackbar(true);
    }
  };

  const handleWhatsApp = () => {
    const message = 'Olá Stephane! Gostaria de entrar em contato com você.';
    const url = `https://wa.me/5514982084608?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handlePhoneCall = () => {
    window.open('tel:+5514982084608');
  };

  const handleEmail = () => {
    window.open('mailto:sfmarques72@gmail.com?subject=Contato%20Portfolio&body=Olá%20Stephane!');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("/img/Frame 4.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        py: 8,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Header */}
          <Grid item xs={12}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 'bold',
                fontSize: {
                  xs: '2.5rem',
                  sm: '3.5rem',
                  md: '4rem',
                },
                color: 'white',
                textAlign: 'center',
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              CONTATO
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                textAlign: 'center',
                mb: 4,
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              }}
            >
              Vamos trabalhar juntos? Entre em contato!
            </Typography>
          </Grid>

          {/* Informações de Contato */}
          <Grid item xs={12} md={4}>
            <Card 
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.95)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                height: '100%'
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#BF1019',
                    fontWeight: 'bold',
                    mb: 3,
                    textAlign: 'center'
                  }}
                >
                  Vamos Conversar?
                </Typography>

                {/* Telefone */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <IconButton
                    onClick={handlePhoneCall}
                    sx={{
                      backgroundColor: '#BF1019',
                      color: 'white',
                      mr: 2,
                      '&:hover': {
                        backgroundColor: '#A00D15',
                        transform: 'scale(1.1)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Phone />
                  </IconButton>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Telefone
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#BF1019', 
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' }
                      }}
                      onClick={handlePhoneCall}
                    >
                      (14) 98208-4608
                    </Typography>
                  </Box>
                </Box>

                {/* WhatsApp */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <IconButton
                    onClick={handleWhatsApp}
                    sx={{
                      backgroundColor: '#25D366',
                      color: 'white',
                      mr: 2,
                      '&:hover': {
                        backgroundColor: '#128C7E',
                        transform: 'scale(1.1)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <WhatsApp />
                  </IconButton>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      WhatsApp
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#BF1019', 
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' }
                      }}
                      onClick={handleWhatsApp}
                    >
                      Enviar Mensagem
                    </Typography>
                  </Box>
                </Box>

                {/* Email */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <IconButton
                    onClick={handleEmail}
                    sx={{
                      backgroundColor: '#BF1019',
                      color: 'white',
                      mr: 2,
                      '&:hover': {
                        backgroundColor: '#A00D15',
                        transform: 'scale(1.1)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Email />
                  </IconButton>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      E-mail
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#BF1019', 
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        '&:hover': { textDecoration: 'underline' }
                      }}
                      onClick={handleEmail}
                    >
                      sfmarques72@gmail.com
                    </Typography>
                  </Box>
                </Box>

                {/* Localização */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <IconButton
                    sx={{
                      backgroundColor: '#BF1019',
                      color: 'white',
                      mr: 2,
                      '&:hover': {
                        backgroundColor: '#A00D15',
                      }
                    }}
                  >
                    <LocationOn />
                  </IconButton>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Localização
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#BF1019', fontWeight: 'bold' }}>
                      São Paulo, Brasil
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Redes Sociais */}
                <Typography variant="h6" sx={{ color: '#BF1019', fontWeight: 'bold', mb: 2 }}>
                  Redes Sociais
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                  <IconButton
                    onClick={() => window.open('https://github.com/sfmarques', '_blank')}
                    sx={{
                      backgroundColor: '#333',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#555',
                        transform: 'scale(1.1)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    onClick={() => window.open('https://linkedin.com/in/stephane-marques', '_blank')}
                    sx={{
                      backgroundColor: '#0077B5',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#005885',
                        transform: 'scale(1.1)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                </Box>

                {/* Tags de Habilidades */}
                <Box sx={{ mt: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Disponível para:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip label="Freelance" size="small" sx={{ backgroundColor: '#BF1019', color: 'white' }} />
                    <Chip label="Projetos" size="small" sx={{ backgroundColor: '#BF1019', color: 'white' }} />
                    <Chip label="Colaborações" size="small" sx={{ backgroundColor: '#BF1019', color: 'white' }} />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Formulário de Contato */}
          <Grid item xs={12} md={8}>
            <Card 
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.95)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#BF1019',
                    fontWeight: 'bold',
                    mb: 3,
                    textAlign: 'center'
                  }}
                >
                  Envie uma Mensagem
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Seu Nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#BF1019',
                            },
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Seu E-mail"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#BF1019',
                            },
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#BF1019',
                            },
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Mensagem"
                        name="mensagem"
                        multiline
                        rows={6}
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#BF1019',
                            },
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                        disabled={loading}
                        sx={{
                          backgroundColor: '#BF1019',
                          padding: '12px 40px',
                          fontSize: '1.1rem',
                          fontWeight: 'bold',
                          '&:hover': {
                            backgroundColor: '#A00D15',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(191, 16, 25, 0.4)'
                          },
                          transition: 'all 0.3s ease',
                          '&:disabled': {
                            backgroundColor: '#cccccc'
                          }
                        }}
                      >
                        {loading ? 'Enviando...' : 'Enviar Mensagem'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar de Confirmação */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setOpenSnackbar(false)} 
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contato;