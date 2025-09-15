import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

const darkBackground = '#196860';
const loginFormBackground = '#114842';
const marketingBackground = '#229C90';
const offWhite = '#FFF6E1';
const orange = '#FBA63D';
const errorColor = '#C84040';

export const PageContainer = styled(Box)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  font-family: 'Poppins', sans-serif;
  background-color: ${darkBackground};

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

export const LoginSection = styled(Box)`
  width: 100%;
  padding: 50px 20px;
  color: ${offWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    width: 50%;
    padding: 0 50px;
  }
`;

export const LoginTitle = styled(Typography)`
  font-size: 1.8rem !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  margin-bottom: 30px !important;
  text-align: center;
  width: 100%;
  max-width: 400px;

  @media (min-width: 900px) {
    font-size: 2.2rem !important;
    text-align: left;
    margin-bottom: 50px !important;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputWrapper = styled(Box)`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 15px 15px 15px 45px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: ${offWhite};
`;

export const InputIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  height: 20px;
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: ${orange};
  color: ${offWhite};
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d69538;
  }
`;

export const ErrorMessage = styled(Typography)`
  font-size: 0.9rem !important;
  font-weight: 700 !important;
  color: ${errorColor} !important;
  margin-top: 10px;
  text-align: center;
`;

export const LoginLink = styled(Typography)`
  font-size: 0.9rem !important;
  color: ${offWhite};
  text-align: center;
  margin-top: 50px !important;
  width: 100%;
  max-width: 400px;

  & a {
    color: ${orange};
    text-decoration: none;
    font-weight: bold;
  }
`;

export const MarketingSection = styled(Box)`
  width: 50%;
  background-color: ${marketingBackground};
  color: ${offWhite};
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; 
  gap: 30px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MarketingTitle = styled(Typography)`
  font-size: 2.5rem !important;
  font-weight: 700 !important;
  line-height: 1 !important;
  margin-bottom: 0 !important;
  text-align: left; 

  & span {
    color: ${orange};
  }
`;

export const MarketingText = styled(Typography)`
  font-size: 1.1rem !important;
  line-height: 1.5;
  margin-bottom: 0 !important;
  text-align: left; 
`;

export const TestimonialCard = styled(Box)`
  width: 100%;
  max-width: 550px;
  padding: 30px;
  background-color: ${loginFormBackground};
  border-radius: 8px;
`;

export const TestimonialText = styled(Typography)`
  font-style: italic;
  margin-bottom: 10px !important;
  font-size: 1rem !important;
`;

export const TestimonialAuthor = styled(Box)`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AuthorInfo = styled(Box)`
  text-align: left;
`;

export const AuthorName = styled(Typography)`
  font-weight: bold;
  font-size: 1rem !important;
`;

export const AuthorTitle = styled(Typography)`
  font-size: 0.8rem !important;
`;