import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

import {
  PageContainer,
  LoginSection,
  LoginTitle,
  LoginForm,
  InputWrapper,
  StyledInput,
  InputIcon,
  StyledButton,
  ErrorMessage,
  LoginLink,
  MarketingSection,
  MarketingTitle,
  MarketingText,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  AuthorImage,
  AuthorInfo,
  AuthorName,
  AuthorTitle,
} from './styles';

import EmailIcon from './assets/email-icon.svg';
import LockIcon from './assets/lock-icon.svg';
import ReportImage from './assets/report.jpg';

export default function Login() {const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Por favor, preencha todos os campos.');
    } else {
      setError('E-mail ou senha inválidos.');
      // Simular login, redirecionamento, etc.
      console.log('Dados do formulário:', { email, password });
    }
  };

  return (
    <>
        < Header />
            <PageContainer>
      <LoginSection>
        <LoginTitle>Faça login e acesse as ferramentas do Nilo:</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <InputWrapper>
            <InputIcon src={EmailIcon} alt="Ícone de e-mail" />
            <StyledInput
              type="email"
              placeholder="exemplo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <InputIcon src={LockIcon} alt="Ícone de cadeado" />
            <StyledInput
              type="password"
              placeholder="************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <StyledButton type="submit">Entrar na plataforma</StyledButton>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </LoginForm>
        <LoginLink>
          Não tem uma conta? <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeTI191abQ6pfw3kpKfd3ZSWoQ19O9GPocExK1Gdwqxf4snaQ/viewform?usp=dialog">Participe do nosso processo seletivo!</a>
        </LoginLink>
      </LoginSection>

      <MarketingSection>
        <MarketingTitle>
          Aproveite nosso <span style={{ color: '#FBA63D', fontStyle: 'italic' }}>ecossistema</span> financeiro
        </MarketingTitle>
        <MarketingText>
          Aprenda mais sobre a economia e finanças, aplique a teoria para fazer a sua própria gestão orçamentária e se mantenha atualizado nas novidades do mercado.
          <br/>
        <br/>
          <span style={{ fontWeight: '800' }}>Navegue com o Nilo rumo ao controle da sua vida financeira!</span>
        </MarketingText>
        <TestimonialCard>
          <TestimonialText>
            "Pra mim, o Nilo não foi só meu primeiro contato com o mundo financeiro, é ainda o que me mantém por dentro de tudo que acontece com a economia atual."
          </TestimonialText>
          <TestimonialAuthor>
            <AuthorImage src={ReportImage} alt="Raissa Hirose" />
            <AuthorInfo>
              <AuthorName>Raissa Hirose</AuthorName>
              <AuthorTitle>Product Manager no PicPay | Estudante de Ciências da Computação</AuthorTitle>
            </AuthorInfo>
          </TestimonialAuthor>
        </TestimonialCard>
      </MarketingSection>
    </PageContainer>
        < Footer />
    </>
  );

}