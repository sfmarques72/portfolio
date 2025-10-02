'use client';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  CircularProgress,
  Alert,
  Button,
  Divider,
  IconButton,
  Paper
} from '@mui/material';
import { GitHub, Star, ForkRight, Visibility, Link as LinkIcon } from '@mui/icons-material';

interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  location?: string;
  blog?: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  updated_at: string;
}

const GitHubProfile: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Substitua pelo seu username do GitHub
  const username = 'sfmarques72';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Erro ao buscar perfil do GitHub');
        const userData: GitHubUser = await userResponse.json();

        // Fetch repos data
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        if (!reposResponse.ok) throw new Error('Erro ao buscar repositórios');
        const reposData: GitHubRepo[] = await reposResponse.json();

        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  if (loading) {
    return (
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url("/img/Frame 4.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <Box textAlign="center" sx={{ color: 'white' }}>
          <CircularProgress sx={{ color: '#BF1019', mb: 2, size: 60 }} />
          <Typography variant="h5">Carregando perfil do GitHub...</Typography>
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url("/img/Frame 4.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <Alert 
          severity="error" 
          sx={{ 
            maxWidth: 400,
            backgroundColor: 'rgba(255,255,255,0.95)',
            borderRadius: 2
          }}
        >
          <Typography variant="h6" gutterBottom>
            Erro ao carregar dados
          </Typography>
          {error}
          <Box sx={{ mt: 2 }}>
            <Button 
              variant="contained" 
              onClick={() => window.location.reload()}
              sx={{
                backgroundColor: '#BF1019',
                '&:hover': { backgroundColor: '#A00D15' }
              }}
            >
              Tentar Novamente
            </Button>
          </Box>
        </Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("/img/Frame 5.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        py: 4,
        px: 2,
      }}
    >
      {/* Frame Centralizado com Scroll */}
      <Paper
        elevation={24}
        sx={{
          width: '90%',
          maxWidth: '1200px',
          height: '85vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: 3,
          overflow: 'hidden',
          border: '3px solid #BF1019',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Header Fixo do Frame */}
        <Box
          sx={{
            backgroundColor: '#BF1019',
            color: 'white',
            py: 2,
            px: 3,
            borderBottom: '2px solid #A00D15',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: {
                xs: '1.5rem',
                sm: '2rem',
                md: '2.5rem',
              },
            }}
          >
             GITHUB 
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: 'center',
              opacity: 0.9,
              mt: 1,
            }}
          >
            Meus projetos e contribuições no GitHub
          </Typography>
        </Box>

        {/* Conteúdo com Scroll */}
        <Box
          sx={{
            flex: 1,
            overflow: 'auto',
            p: 3,
            '&::-webkit-scrollbar': {
              width: 8,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#BF1019',
              borderRadius: 4,
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'rgba(191, 16, 25, 0.1)',
            },
          }}
        >
          {user && (
            <>
              {/* Profile Section */}
              <Card 
                sx={{ 
                  mb: 4,
                  backgroundColor: 'rgba(255,255,255,0.98)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(191, 16, 25, 0.2)',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={3} textAlign="center">
                      <Avatar
                        src={user.avatar_url}
                        sx={{
                          width: 120,
                          height: 120,
                          mx: 'auto',
                          mb: 2,
                          border: '3px solid #BF1019',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        }}
                      />
                      <Button
                        variant="contained"
                        href={user.html_url}
                        target="_blank"
                        startIcon={<GitHub />}
                        sx={{
                          backgroundColor: '#BF1019',
                          '&:hover': { 
                            backgroundColor: '#A00D15',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 20px rgba(191, 16, 25, 0.4)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Ver no GitHub
                      </Button>
                    </Grid>
                    
                    <Grid item xs={12} md={9}>
                      <Typography variant="h4" gutterBottom sx={{ color: '#BF1019', fontWeight: 'bold' }}>
                        {user.name || user.login}
                      </Typography>
                      
                      <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem' }}>
                        {user.bio || 'Desenvolvedor apaixonado por tecnologia e inovação.'}
                      </Typography>

                      {user.location && (
                        <Typography variant="body2" color="text.secondary" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          📍 {user.location}
                        </Typography>
                      )}

                      {user.blog && (
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                          <LinkIcon sx={{ fontSize: 18, color: '#BF1019' }} />
                          <Typography variant="body2" color="text.secondary">
                            {user.blog}
                          </Typography>
                        </Box>
                      )}

                      <Grid container spacing={2} mt={2}>
                        <Grid item>
                          <Chip 
                            label={`${user.public_repos} Repositórios`}
                            variant="filled"
                            sx={{ 
                              backgroundColor: '#BF1019', 
                              color: 'white',
                              fontWeight: 'bold',
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <Chip 
                            label={`${user.followers} Seguidores`}
                            variant="filled"
                            sx={{ 
                              backgroundColor: '#BF1019', 
                              color: 'white',
                              fontWeight: 'bold',
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <Chip 
                            label={`${user.following} Seguindo`}
                            variant="filled"
                            sx={{ 
                              backgroundColor: '#BF1019', 
                              color: 'white',
                              fontWeight: 'bold',
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {/* Repositories Section */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  color: '#BF1019',
                  mb: 3,
                  textAlign: 'center',
                  fontSize: {
                    xs: '1.5rem',
                    sm: '2rem',
                    md: '2.2rem',
                  },
                }}
              >
                 ÚLTIMOS REPOSITÓRIOS
              </Typography>

              <Grid container spacing={3}>
                {repos.map((repo) => (
                  <Grid item xs={12} md={6} key={repo.id}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        backgroundColor: 'rgba(255,255,255,0.98)',
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(191, 16, 25, 0.1)',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 12px 40px rgba(191, 16, 25, 0.25)',
                          border: '1px solid #BF1019',
                        }
                      }}
                    >
                      <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography 
                            variant="h6" 
                            gutterBottom 
                            sx={{ 
                              color: '#BF1019', 
                              fontWeight: 'bold',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            {repo.name}
                            <IconButton 
                              href={repo.html_url} 
                              target="_blank"
                              size="small"
                              sx={{ 
                                color: '#BF1019',
                                '&:hover': { 
                                  backgroundColor: 'rgba(191, 16, 25, 0.1)',
                                  transform: 'scale(1.1)',
                                },
                                transition: 'all 0.2s ease',
                              }}
                            >
                              <LinkIcon />
                            </IconButton>
                          </Typography>
                          
                          <Typography variant="body2" color="text.secondary" paragraph sx={{ minHeight: 60 }}>
                            {repo.description || 'Repositório sem descrição.'}
                          </Typography>

                          {repo.language && (
                            <Chip 
                              label={repo.language}
                              size="small"
                              sx={{ 
                                backgroundColor: '#BF1019', 
                                color: 'white',
                                fontWeight: 'bold',
                                mb: 2
                              }}
                            />
                          )}
                        </Box>

                        <Box sx={{ mt: 'auto' }}>
                          <Divider sx={{ my: 2 }} />
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Star sx={{ fontSize: 18, color: '#FFD700' }} />
                                <Typography variant="body2" color="text.secondary" fontWeight="bold">
                                  {repo.stargazers_count}
                                </Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <ForkRight sx={{ fontSize: 18, color: '#BF1019' }} />
                                <Typography variant="body2" color="text.secondary" fontWeight="bold">
                                  {repo.forks_count}
                                </Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Visibility sx={{ fontSize: 18, color: '#2196F3' }} />
                                <Typography variant="body2" color="text.secondary" fontWeight="bold">
                                  {repo.watchers_count}
                                </Typography>
                              </Box>
                            </Box>
                            <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                              Atualizado: {formatDate(repo.updated_at)}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Footer do Frame */}
              <Box sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  🚀 Desenvolvido com React e Material-UI • Dados em tempo real da API do GitHub
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default GitHubProfile;